/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const passIds = [ 288, 1, 7, 3, 4, 99, 23, 45, 89, 66 ]
// const passIds = [ 288, 1, 3 ]
// const passIds = [ 288 ]

const total = passIds.length

const smCols = total < 4 ? total : 4
const largeCols = total < 7 ? total : 7
// const
const hasMultiple = total > 1

export default function Input({
  onTextChange = () => false,
  canClaimMode = true,
  value = ''
}) {
  return (
    <div className="mt-4 sm:w-1/2">
      <div className="flex flex-row mb-1">
        <label htmlFor="account-number" className="w-1/2 block mb-2 text-sm text-left font-medium text-gray-200">
          Hedera Account Id
        </label>
        {canClaimMode &&
          <label htmlFor="account-number" className="w-1/2 block mb-2 text-sm font-medium text-gray-200 text-right pr-1">
            Pass Number
          </label>
        }
      </div>
      <div className="flex rounded-md shadow-sm">
        <input
          type="text"
          name="account-number"
          id="account-number"
          className="block py-4 w-full rounded-md -mr-2 z-10 focus:border-green-500 focus:ring-green-500 text-xl border border-white"
          placeholder="0.0.123456"
          pattern="[0-9].[0-9].[0-9]"
          onChange={onTextChange}
          value={value}
        />
        { canClaimMode && <SerialDropdown /> }

        />
      </div>
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SerialDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left -mr-3">
      <span className="absolute -right-1 flex -mt-1 h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
      </span>
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-white bg-white pl-6 pr-2 py-4 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100">
          Serial
          <ChevronDownIcon className="hover:animate-[spin_1s] ml-2 mt-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
          <Menu.Items
            className={`absolute border mb-2 -left-20 md:-left-40 md:-right-40 grid lg:grid-cols-${largeCols} grid-cols-3 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none place-items-center justify-center`}
            >
          {passIds.map((id) => {
            return <Menu.Item>
              {({ active }) => (
                <a
                href="#"
                onClick={console.log}
                className={classNames(
                  'inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-md font-medium text-gray-800 my-2 ',
                  active ? 'bg-gray-100 text-green-600 bg-green-100' : 'text-gray-600'
                )}
                >
                  #{id}
                </a>
                )}
                </Menu.Item>
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
