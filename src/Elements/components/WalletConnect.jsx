import { HashConnectConnectionState } from "hashconnect/dist/types";
import { useHashConnect } from "../utilities/hashconnect/HCProvider";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";
import { ReactComponent as HashPackIconWhiteTrans } from "../images/hashPackIconWhiteTrans.svg";

export default function WalletConnect() {
  const { pair, unpair, accountIds, connectionState, pairingString } =
    useHashConnect();

  const [showQrCode, setShowQrCode] = useState(false);

  const copyPairingString = useCallback(() => {
    if (!pairingString) {
      toast.error("Can't copy pairing string, it's not set");
      return;
    }
    if (pairingString) {
      navigator.clipboard.writeText(pairingString);
      toast.success("Copied pairing string to clipboard");
    }
  }, [pairingString]);

  const onShowQrCode = useCallback(() => {
    if (!pairingString) {
      toast.error("Can't show QR code, pairing string is not set");
      return;
    }
    setShowQrCode(true);
  }, [pairingString]);

  useEffect(() => {
    if (connectionState !== HashConnectConnectionState.Connected) {
      setShowQrCode(false);
    }
  }, [connectionState]);

  if (connectionState === HashConnectConnectionState.Paired) {
    return (
      <Menu as="div" className="relative inline-block text-left flex-shrink-0">
        <Menu.Button className="disabled:opacity-50 disabled:hover:opacity-50 hover:shadow-md flex flex-shrink-0 items-center text-center justify-center uppercase bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md pr-2">
          <HashPackIconWhiteTrans className="h-8 w-8 fill-white" />
          <p>{accountIds?.[0]}</p>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 origin-top-right divide-y divide-zinc-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item key="disconnect">
              <div
                className="cursor-pointer text-black hover:text-white text-sm rounded-md hover:bg-red-600 p-2 m-1"
                onClick={unpair}
              >
                <p className="whitespace-nowrap">Disconnect</p>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  } else {
    return (
      <>
        <Menu
          as="div"
          className="relative inline-block text-left flex-shrink-0"
        >
          <Menu.Button
            className="disabled:opacity-50 disabled:hover:opacity-50 hover:shadow-md flex flex-shrink-0 items-center text-center justify-center uppercase bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md pr-2"
            disabled={connectionState !== HashConnectConnectionState.Connected}
          >
            <HashPackIconWhiteTrans className="h-8 w-8 fill-white" />
            {connectionState === HashConnectConnectionState.Connected ? (
              <p>Connect</p>
            ) : (
              <p>...</p>
            )}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-50 absolute right-0 mt-2 origin-top-right divide-y divide-zinc-100 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                <Menu.Item key="pair">
                  <div
                    className="cursor-pointer text-black  hover:text-white text-sm rounded-md hover:bg-zinc-800 p-2"
                    onClick={pair}
                  >
                    <p className="whitespace-nowrap">Direct Connect</p>
                  </div>
                </Menu.Item>
              </div>
              <div className="p-1">
                <Menu.Item key="qrcode">
                  <div
                    className="cursor-pointer text-black  hover:text-white text-sm rounded-md hover:bg-zinc-800 p-2"
                    onClick={onShowQrCode}
                  >
                    <p className="whitespace-nowrap">Scan QR Code</p>
                  </div>
                </Menu.Item>
              </div>
              <div className="p-1">
                <Menu.Item key="copy">
                  <div
                    className="cursor-pointer text-black  hover:text-white text-sm rounded-md hover:bg-zinc-800 p-2"
                    onClick={copyPairingString}
                  >
                    <p className="whitespace-nowrap">Copy Pairing String</p>
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Transition
          appear
          show={Boolean(showQrCode && pairingString)}
          as={Fragment}
        >
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setShowQrCode(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-zinc-900"
                    >
                      HashPack Connect
                    </Dialog.Title>
                    <Dialog.Description className="mt-4">
                      <p className="mt-2">
                        Scan this QR code with your mobile HashPack app to
                        connect.
                      </p>
                      <p className="mt-2">
                        Find out more at{" "}
                        <a
                          href="https://www.hashpack.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-500 hover:text-zinc-600 cursor-pointer"
                        >
                          https://hashpack.app
                        </a>
                        .
                      </p>
                    </Dialog.Description>
                    <div className="flex mt-4 justify-center border-2 p-4">
                      <QRCodeSVG // @ts-ignore
                        value={pairingString}
                        className="w-full h-full"
                        level="L"
                      />
                    </div>

                    <div className="flex mt-4 justify-end">
                      <button
                        className={`border border-1 border-light w-full disabled:opacity-30 disabled:hover:opacity-30 flex flex-shrink-0 items-center text-center justify-center uppercase bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-1 px-2`}
                        onClick={() => setShowQrCode(false)}
                      >
                        <strong>Close</strong>
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
}
