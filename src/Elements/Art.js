import moment from "moment";
import { SlideshowLightbox } from 'lightbox.js-react'
import { useQuery } from "@tanstack/react-query";
import { getNfts } from "./utilities/api";
import useCopyToClipboard from "./helper/hooks/useCopyToClipboard";

export default function Art() {

    const [value, copy] = useCopyToClipboard()

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
                    <p onClick={() => copy(nft.token)} className="flex cursor-pointer -mt-.5 text-xl font-bold text-gray-800">
                        {nft.token}
                        <svg className="mt-1 ml-1 h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                        </svg>
                    </p>
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
