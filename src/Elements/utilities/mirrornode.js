// This will check if an account has a pass before hitting the API

import axios from "axios";

const passId = process.env.REACT_APP_NFT_PASS_ID

const api = axios.create({
  baseURL: process.env.REACT_APP_MIRRORNODE_URL,
})

const checkNftPassOwnership = async (accountId) => {
  const { data } = await api.get(`tokens/${passId}/nfts?account.id=${accountId}`)

  if (!!data.nfts.length) {
    return true
  }

  throw new Error('pass not found')
}

export {
  checkNftPassOwnership
}
