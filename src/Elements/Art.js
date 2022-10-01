import moment from "moment";
import { SlideshowLightbox } from 'lightbox.js-react'
import { useQuery } from "@tanstack/react-query";
import { getNfts } from "./utilities/api";

export default function Art() {

  const nftQuery = useQuery(['nfts'], getNfts)
  const nfts = nftQuery.data?.data || []

  return (
    <div className="bg-white tracking-tight">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Inky's NFT Library</h2>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {!!nfts && nfts.map((nft, i) => (
            <a key={i} className="group">
              <div className="hover:scale-110 duration-300 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <SlideshowLightbox theme="day">
                  <img className='w-full rounded' src={nft.image_url} alt="img"/>
                  <></>
                </SlideshowLightbox>
              </div>
              <div className="flex-wrap break-words">
                <div className="flex mt-4 justify-between">
                  <div className="flex-row  text-left">
                    <p className="text-sm font-light text-gray-600">NAME</p>
                    <p className="-mt-.5 text-xl font-bold text-gray-800">{nft.name}</p>
                  </div>
                  <div className="flex-row text-right">
                    <p className="text-sm font-light text-gray-600">SYMBOL</p>
                    <p className="-mt-.5 text-xl font-bold text-gray-800">{nft.symbol}</p>
                  </div>
                </div>
                <div className="flex mt-4 justify-between">
                  <div className="flex-row  text-left">
                    <p className="text-sm font-light text-gray-600">COLLECTION ID</p>
                    <p className="-mt-.5 text-xl font-bold text-gray-800">{nft.token}</p>
                  </div>
                  <div className="flex-row text-right">
                    <p className="text-sm font-light text-gray-600">CLAIMABLE FROM</p>
                    <p className="-mt-.5 text-xl font-bold text-gray-800">{moment(nft.release_at, "DD.MM.YYYY").format('Do MMM YY').toString()}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
