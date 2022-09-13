/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Input from "./components/Input";
import { accountIdRegex } from "./helper/regex";

const navigation = [
  { name: 'Watch the Promo', href: '#' },
  { name: 'Discord', href: '#' },
  { name: 'Zuse Market', href: '#' },
]

export default function Hero() {

  const [accountId, updateAccountId] = useState({ id: '', valid: false });

  const handleOnChange = event => {
    const { value } = event.target;
    const valid = accountIdRegex.test(value)

    updateAccountId({ id: value, valid });
  }

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
    videoEl.current &&
    videoEl.current.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative overflow-hidden bg-black ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 pb-8">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="Your Company"
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-black shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to Inky's Art Club.</span>{' '}
                <span className="block text-green-400 xl:inline">Claim your green NFTs today.</span>
              </h1>
              <p className="mt-4 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-6 md:text-xl lg:mx-0">
                Get access to an <b>entire decade</b> of adorable, unique, and exclusive NFT art by holding a <b>Inky Super Pass</b>, every single month. Start claiming below, join our community, and support charities.
              </p>
              <div className="flex-row sm:flex sm:justify-center lg:justify-start mt-2">
                <Input onTextChange={handleOnChange}/>
                <div className="md:mt-11 md:mx-4 sm:mx-2  sm:mt-11 mt-4">
                  <div className="rounded-md shadow disabled">
                    <a
                      href="#"
                      hidden={true}
                      className={`flex w-full items-center justify-center rounded-md border border-transparent ${accountId.valid ? 'bg-green-500' : 'bg-gray-500'} px-8 text-base font-medium text-white  ${accountId.valid ? 'hover:bg-green-600' : 'hover:bg-gray-600'} md:py-4 py-4 text-lg`}
                    >
                      {!!accountId.valid ? 'Check Claim Status' : 'Enter Account Id' }
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 2xl:right-36 pt-4">
        <video
          style={{ maxWidth: "100%", width: "850px", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt="Inky pass video"
          ref={videoEl}
        ><source src='https://spaces.remotesoftwaredevelopment.com/pass/Ink-Pass-dev.m4v' type="video/mp4"/></video>
      </div>
    </div>
  )
}
