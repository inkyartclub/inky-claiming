/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { accountIdRegex } from "./helper/regex";
import toast from "react-hot-toast";
import createPersistedState from 'use-persisted-state';
import { checkNftPassOwnership } from "./utilities/mirrornode";
import HeroView from "./components/HeroView";

const useAccountIdState = createPersistedState('account');

const navigation = [
  { name: 'Watch the Promo', href: '#' },
  { name: 'Discord', href: '#' },
  { name: 'Zuse Market', href: '#' },
]

export default function Hero() {

  const [persistedAccount, setPersistedAccount] = useAccountIdState('');
  const [accountId, updateAccountId] = useState(persistedAccount);
  const [canClaimMode, setClaimMode] = useState(false);
  const [allClaimed, setAllClaimed] = useState(false);

  useEffect(() => {
    if (!accountId.valid) {
      return
    }

    checkNftPassOwnership(accountId.id)
      .then(() => {
        setClaimMode(true)
      })
      .catch(() => {
        setPersistedAccount({ id: '', valid: false })
      });
  }, []);

  const startClaiming = () => {

  }

  const checkPassOwnership = () => {
    if (!accountId.valid) {
      return
    }

    const myPromise = checkNftPassOwnership(accountId.id);

    toast.promise(myPromise, {
      loading: 'Waiting for the magical toad...',
      success: () => {
        setPersistedAccount(accountId)
        setClaimMode(true)

        return 'Yes, you have the pass you can start claiming!'
      },
      error: "Oh noes, we are unable to detect if you own a pass at this time...",
    });
  }

  const handleOnChange = event => {
    const { value } = event.target;
    const valid = accountIdRegex.test(value)

    setClaimMode(false)
    updateAccountId({ id: value, valid });
  }


  return <HeroView
    handleOnChange={handleOnChange}
    canClaimMode={canClaimMode}
    startClaiming={startClaiming}
    allClaimed={allClaimed}
    checkPassOwnership={checkPassOwnership}
    accountId={accountId}
  />
}
