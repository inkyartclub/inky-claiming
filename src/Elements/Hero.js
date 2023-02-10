import { useEffect, useState } from "react";
import { accountIdRegex } from "./helper/regex";
import toast from "react-hot-toast";
import createPersistedState from "use-persisted-state";
import { checkNftPassOwnership } from "./utilities/mirrornode";
import HeroView from "./components/HeroView";
import ConfirmClaimModal from "./ConfirmClaimModal";
import { attemptClaimOfNft, nftsToClaim } from "./utilities/api";
import { useQuery } from "@tanstack/react-query";
import { useHashConnect } from "./utilities/hashconnect/HCProvider";

const useAccountIdState = createPersistedState("account");

export default function Hero() {
  const { accountIds } = useHashConnect();

  const [persistedAccount, setPersistedAccount] = useAccountIdState("");
  const [accountId, updateAccountId] = useState(persistedAccount);
  const [canClaimMode, setClaimMode] = useState(false);
  const [openClaim, setShowClaim] = useState(false);
  const [allClaimed, setAllClaimed] = useState(false);

  useEffect(() => {
    if (accountIds.length > 0) {
      updateAccountId({ id: accountIds[0], valid: true });
    }
  }, [accountIds]);

  useEffect(() => {
    if (!accountId.valid) {
      return;
    }

    checkNftPassOwnership(accountId.id)
      .then((passOwnership) => {
        accountId.serials = passOwnership;

        setPersistedAccount(accountId);

        setClaimMode(true);
      })
      .catch(() => {
        setPersistedAccount({
          id: "",
          valid: false,
          selected_serial: "Serial",
          serials: [],
        });
      });
  }, []);

  const updateSerial = ({ target }) => {
    const updated = {
      ...accountId,
      selected_serial: target.text,
    };

    updateAccountId(updated);
    setPersistedAccount(updated);
  };

  const startClaiming = () => {
    if (!allClaimed) {
      setShowClaim(true);
    }
  };

  const checkPassOwnership = () => {
    if (!accountId.valid) {
      return;
    }

    const passOwnership = checkNftPassOwnership(accountId.id);

    const bank = [
      "Waiting for the magical toad...",
      "Humbly asking the hedgehogs to give up their secrets...",
      "Scrambling for the swamp witches book of shadows...",
      "Indeed, this is the way...",
      "Luck is where preparation meets opportunity...",
      "Spinning the yarn...",
      "Lightfast inks for the win...",
      "Their loyalty is inspired by the hellish landscape of bosch...",
    ];

    const loading = bank[Math.floor(Math.random(0, bank.length) * bank.length)];

    toast.promise(passOwnership, {
      loading,
      success: (result) => {
        accountId.selected_serial = result[0];
        accountId.serials = result;

        setPersistedAccount(accountId);
        setClaimMode(true);

        return "Yes, you have the pass you can start claiming!";
      },
      error:
        "Oh noes, we are unable to detect if you own a pass at this time...",
    });
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    const valid = accountIdRegex.test(value);

    setClaimMode(false);
    updateAccountId({ id: value, valid });
  };

  const serial = persistedAccount?.selected_serial?.substr(1) || "";
  const claimableQuery = useQuery(["claimable-nfts", serial], () =>
    nftsToClaim(serial)
  );

  const processNftClaiming = ({ account_id, serial, nfts }) => {
    nfts.map((nft) => {
      const claimNft = attemptClaimOfNft({
        nft_id: nft.token,
        account_id,
        serial,
      });

      toast.promise(
        claimNft,
        {
          loading: `Attempting to claim ${nft.name} (${nft.token})`,
          success: () => {
            // After every successful claim
            claimableQuery.refetch();

            return `🔥 Successfully claimed NFT ${nft.name} (${nft.token})`;
          },
          error: ({ response }) =>
            `🥲 Oh no we got a claiming error - ${response.data.message} for ${nft.name} (${nft.token})`,
        },
        {
          position: "top-right",
          duration: 10000,
        }
      );
    });
  };

  return (
    <>
      <ConfirmClaimModal
        open={openClaim}
        setOpen={setShowClaim}
        processNftClaiming={processNftClaiming}
        account={persistedAccount}
        setAllClaimed={setAllClaimed}
        claimableData={claimableQuery.data}
        serial={serial}
      />
      <HeroView
        updateSerial={updateSerial}
        handleOnChange={handleOnChange}
        canClaimMode={canClaimMode}
        startClaiming={startClaiming}
        openClaim={openClaim}
        setShowClaim={setShowClaim}
        allClaimed={allClaimed}
        checkPassOwnership={checkPassOwnership}
        accountId={accountId}
      />
    </>
  );
}
