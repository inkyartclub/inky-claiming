import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Promo({
  open,
  setOpen
}) {

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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
          <div className="flex min-h-full items-end justify-center text-center sm:items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  ">
                <video
                  autoPlay
                  alt="Inky Promo Video"
                  ref={videoEl}
                  controls
                ><source src='https://spaces.remotesoftwaredevelopment.com/Ink%27s%20Art%20Club/promo/INKY-PROMO.m4v' type="video/mp4"/></video>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
