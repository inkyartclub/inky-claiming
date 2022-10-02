import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
  }
})

const getNfts = async () => {
  const { data } = await api.get('api/v1/collections')

  return data
}

const nftsToClaim = async (serial) => {
  if (!serial) {
    return {}
  }

  const { data } = await api.get(`api/v1/claim/${serial}/status`)

  return data
}

const attemptClaimOfNft = async ({
  nft_id,
  account_id,
  serial
}) => {

  const { data } = await api.post(`api/v1/nft/${nft_id}/serial/${serial}/account/${account_id}/claim`)

  return data

}

export {
  getNfts,
  nftsToClaim,
  attemptClaimOfNft
}
