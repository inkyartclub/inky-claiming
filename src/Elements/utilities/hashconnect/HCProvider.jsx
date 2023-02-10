import { HashConnect } from "hashconnect";
import { HashConnectConnectionState } from "hashconnect/dist/esm/types";
import React, { useCallback, useEffect, useState } from "react";
import hashPackStatusCodes from "./hashPackStatusCodes";
import hashConnectProviderCodes from "./hashConnectProviderCodes";
import hederaStatusCodes from "./hederaStatusCodes";

export const LogType = {
  Info: "info",
  Success: "success",
  Warning: "warning",
  Error: "error",
  Debug: "info",
};

let APP_CONFIG = {
  name: "dApp Example",
  description: "An example hedera dApp",
  icon: "https://absolute.url/to/icon.png",
};

const network = process.env.REACT_APP_HEDERA_NETWORK || "testnet";

export const HashConnectContext = React.createContext({
  pair: () => null,
  unpair: () => null,
  sendTransaction: () => null,
  pairingString: null,
  connectionState: HashConnectConnectionState.Disconnected,
  accountIds: [],
  network: network,
  installedExtensions: null,
  provider: null,
  signer: null,
  sign: () => null,
});

let hashConnect;

export function HCProvider({ children, metaData, network, logger, debug }) {
  const [connectionState, setConnectionState] = useState(
    HashConnectConnectionState.Disconnected
  );

  const [topic, setTopic] = useState("");
  const [pairingString, setPairingString] = useState();
  const [encryptionKey, setEncryptionKey] = useState();
  const [accountIds, setAccountIds] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const [installedExtensions, setInstalledExtensions] = useState(null);

  const logEvent = useCallback(
    (log) => {
      if (log.type === LogType.Debug && !debug) {
        return;
      }

      if (debug) {
        console.log(JSON.stringify(log, null, 4));
      }

      if (logger) {
        logger(log);
      }
    },
    [logger, debug]
  );

  const initializeHashConnect = useCallback(async () => {
    try {
      console.log(
        `Initializing HashConnect\n==============\nNetwork: ${network}\nMetadata: ${JSON.stringify(
          metaData,
          null,
          2
        )}\nDebug:${debug}`
      );
      const initMetadata = metaData || APP_CONFIG;
      const { topic, pairingString, encryptionKey, savedPairings } =
        await hashConnect.init(initMetadata, network, debug);

      setTopic(topic);
      setPairingString(pairingString);
      setEncryptionKey(encryptionKey);
      setAccountIds(
        savedPairings.reduce((acc, curr) => {
          return [...acc, ...curr.accountIds];
        }, [])
      );
    } catch (error) {
      console.error(error);
    }
  }, [debug, metaData, network]);

  useEffect(() => {
    try {
      if (accountIds.length > 0 && network && topic) {
        const mainAccount = accountIds[0];
        const provider = hashConnect.getProvider(network, topic, mainAccount);
        const signer = hashConnect.getSigner(provider);

        setProvider(provider);
        setSigner(signer);
      }
    } catch (error) {
      console.error(error);
    }
  }, [accountIds, network, topic]);

  useEffect(() => {
    hashConnect = new HashConnect();

    const additionalAccountRequestEventHandler = (data) => {
      // TODO: handle additional account request
    };

    const foundExtensionEventHandler = (data) => {
      setInstalledExtensions(data);
    };

    const pairingEventHandler = (data) => {
      const { pairingData } = data;
      const { accountIds, encryptionKey } = pairingData || {};

      setTopic(data.topic);
      setEncryptionKey(encryptionKey);
      setAccountIds(accountIds || []);
    };

    const connectionStatusChangeEventHandler = (state) => {
      setConnectionState(state);
    };

    const acknowledgeMessageEventHandler = (data) => {
      // TODO: handle acknowledge message. Use to verify that the transaction was sent to the network
    };

    hashConnect.additionalAccountRequestEvent.on(
      additionalAccountRequestEventHandler
    );

    hashConnect.foundExtensionEvent.on(foundExtensionEventHandler);

    hashConnect.pairingEvent.on(pairingEventHandler);

    hashConnect.acknowledgeMessageEvent.on((acknowledgeData) => {
      acknowledgeMessageEventHandler(acknowledgeData);
    });

    hashConnect.connectionStatusChangeEvent.on(
      connectionStatusChangeEventHandler
    );

    initializeHashConnect();

    return () => {
      // TODO: Set HashConnect to null
      // Detach existing handlers
      hashConnect.additionalAccountRequestEvent.off(
        additionalAccountRequestEventHandler
      );
      hashConnect.foundExtensionEvent.off(foundExtensionEventHandler);
      hashConnect.pairingEvent.off(pairingEventHandler);
      hashConnect.acknowledgeMessageEvent.off(acknowledgeMessageEventHandler);
      hashConnect.connectionStatusChangeEvent.off(
        connectionStatusChangeEventHandler
      );
      hashConnect.acknowledgeMessageEvent.off(acknowledgeMessageEventHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pair = useCallback(() => {
    hashConnect.connectToLocalWallet();
  }, []);

  const unpair = useCallback(() => {
    hashConnect.clearConnectionsAndData();
    initializeHashConnect();
  }, [initializeHashConnect]);

  const sign = useCallback(
    async ({ payload, accountId }) => {
      const accountToSign = accountId || accountIds[0];
      let res = await hashConnect.sign(topic, accountToSign, payload);
      return res;
    },
    [topic, accountIds]
  );

  const sendTransaction = useCallback(
    async ({ byteArray, metadata }) => {
      const transaction = {
        topic,
        byteArray,
        metadata: {
          returnTransaction: false,
          ...metadata,
        },
      };

      try {
        const result = await hashConnect.sendTransaction(topic, transaction);
        const { success, error } = result;

        // error could be a string or an object depending on if it's a HashPack or Hedera SDK error

        const errorCode =
          typeof error === "string"
            ? error
            : // @ts-ignore
              error?.status || "HASHCONNECT_FAILED_TRANSACTION";

        const code = success ? "HASHCONNECT_SENT_TRANSACTION" : errorCode;

        const message =
          hashConnectProviderCodes[code] ||
          hashPackStatusCodes[code] ||
          hederaStatusCodes[code];

        logEvent({
          code,
          message,
          type: success ? LogType.Success : LogType.Error,
          data: result,
        });

        return result;
      } catch (error) {
        logEvent({
          code: "HASHCONNECT_FAILED_TRANSACTION",
          type: LogType.Error,
        });
      }
    },
    [logEvent, topic]
  );

  return (
    <HashConnectContext.Provider
      value={{
        pair,
        unpair,
        sendTransaction,
        connectionState,
        topic,
        accountIds,
        pairingString,
        encryptionKey,
        network,
        installedExtensions,
        provider,
        signer,
        sign,
      }}
    >
      {children}
    </HashConnectContext.Provider>
  );
}

const defaultProps = {
  metaData: APP_CONFIG,
  network: "testnet",
  debug: false,
};

HCProvider.defaultProps = defaultProps;

export function useHashConnect() {
  const value = React.useContext(HashConnectContext);
  return value;
}
