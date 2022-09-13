/* This example requires Tailwind CSS v2.0+ */
export default function AcquireNftCta() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Don't have a Super Inky Pass?</span>
          <span className="block text-green-400">Acquire one from the links below to claim unique NFTs until 2033.</span>
        </h2>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-bold text-white hover:bg-green-600 text-xl"
            >
              Acquire from Zuse Market
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-5 py-3 text-base font-medium text-gray-700 hover:bg-indigo-200 text-xl"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
