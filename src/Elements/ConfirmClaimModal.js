/* This example requires Tailwind CSS v2.0+ */
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { nftsToClaim } from "./utilities/api";
import { useHashConnect } from "./utilities/hashconnect/HCProvider";
import { TokenAssociateTransaction } from "@hashgraph/sdk";
import { getAccount } from "./utilities/mirrornode";
import { toast } from "react-hot-toast";

export default function ConfirmClaimModal({
  open,
  setOpen,
  setAllClaimed,
  processNftClaiming,
  account = {},
  serial,
  claimableData,
}) {
  const cancelButtonRef = useRef(null);

  const claims = useMemo(
    () => claimableData || { claimable_count: 0 },
    [claimableData]
  );
  const claimable = claims.claimable_count;

  const { accountIds, signer } = useHashConnect();
  const [tokensRequiringAssociation, setTokensRequiringAssociation] = useState(
    claims.nfts || []
  );

  const generateVernacular = () => {
    if (!serial || !claimable) {
      setAllClaimed(true);
      return "All NFTs claimed!";
    }

    setAllClaimed(false);

    if (claimable === 1) {
      return "❤️ Claim your last NFT";
    }

    return `⚡️ Claim your ${claimable} NFTs`;
  };

  const onStartClaimingPress = () => {
    setOpen(false);

    if (!serial || !claimable) {
      return;
    }

    if (claims.nfts.length) {
      processNftClaiming({
        serial,
        account_id: account.id,
        nfts: claims.nfts,
      });
    }
  };

  const onAssociateTokenIdsPress = useCallback(async () => {
    if (
      signer &&
      accountIds.length > 0 &&
      tokensRequiringAssociation.length > 0
    ) {
      try {
        const tokenIds = tokensRequiringAssociation;
        const batchSize = 10;
        const batches = [];

        while (tokenIds.length) {
          batches.push(tokenIds.splice(0, batchSize));
        }

        for (let i = 0; i < batches.length; i++) {
          const batch = batches[i];

          const associateTransaction = new TokenAssociateTransaction()
            .setAccountId(accountIds[0])
            .setTokenIds(batch)
            .freezeWithSigner(signer);

          await toast.promise(associateTransaction.executeWithSigner(signer), {
            loading: `Associating ${batch.length * i + 1} of ${
              tokensRequiringAssociation.length
            } tokens...`,
            success: "Tokens associated!",
            error: "Failed to associate tokens",
          });
        }

        setTokensRequiringAssociation([]);
      } catch (e) {
        console.error(e);
      }
    }
  }, [accountIds, signer, tokensRequiringAssociation]);

  useEffect(() => {
    if (!claims.nfts?.length || accountIds.length === 0) {
      setTokensRequiringAssociation([]);
      return;
    }

    const checkTokenAssociation = async () => {
      try {
        const accountData = await getAccount({ accountId: accountIds[0] });

        const tokenBalances = accountData?.balance?.tokens || [];
        const tokensRequiringAssociation = claims.nfts.filter(
          (claimableTokenId) =>
            !tokenBalances.find((t) => t.token_id === claimableTokenId)
        );

        setTokensRequiringAssociation(tokensRequiringAssociation);
        return;
      } catch (e) {
        console.error(e);
      }
    };

    checkTokenAssociation();
  }, [accountIds, claims]);

  return (
    <Transition.Root show={!!open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="font-barlow relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <img
                    className="mx-auto h-20 w-20 items-center justify-center rounded-full"
                    src="https://spaces.remotesoftwaredevelopment.com/Ink%27s%20Art%20Club/icon_meta.JPG"
                    alt="img"
                  />
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-gray-900 mb-8"
                    >
                      Get ready to start claiming Inky's NFTs
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg text-gray-600 mb-8">
                        Before starting the claiming process ensure that you
                        have associated all of the collection ids listed in
                        Inky's NFT library below. <br />
                        <br /> Feel free to double check before continuing. 😀
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  {tokensRequiringAssociation.length && (
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-4 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:col-start-2 sm:text-lg"
                      onClick={onAssociateTokenIdsPress}
                    >
                      Associate Token Ids
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-4 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:col-start-2 sm:text-lg"
                    onClick={onStartClaimingPress}
                    disabled={tokensRequiringAssociation.length > 0}
                  >
                    {generateVernacular()}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-4 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-lg"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    OK, I'll double check.
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
