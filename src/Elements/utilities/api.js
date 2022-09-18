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

const nftsToClaim = async () => {

}

const attemptClaimOfNft = async () => {

}

export {
  getNfts
}
