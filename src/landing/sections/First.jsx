"use client";

import { arrowd, close, logo, main, menu } from "@/assets";
import CustomButton from "@/components/custom";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Link } from "react-scroll";

const links = ["Services", "Partnership", "Download"];

const First = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative w-full custom-style    pb-1.5">
      <div className="md:pt-8 z-10 p-4 md:p-0 md:w-[80%] h-screen   mx-auto">
        <header className="flex relative items-center justify-between">
          <Image src={logo} alt="logo" width={84} height={32} />

          {/* <Menu as="div">
            <Menu.Button>
              <Image
                src={isOpen ? close : menu}
                alt="menu"
                width={32}
                height={32}
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div className="absolute left-0 mt-2 px-4 py-4 bg-white w-full rounded-[48px]">
                <Link
                  to={"services"}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {links[0]}
                </Link>
              </div>
            </Transition>
          </Menu> */}

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={isOpen ? close : menu}
              alt="menu"
              width={32}
              height={32}
            />
          </button>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <div className="fixed top-12 w-full overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-[48px] bg-white p-12 text-center align-middle shadow-xl transition-all">
                      <div className="grid gap-8 text-primary_blue text-lg font-bold ">
                        {links.map((link, i) => (
                          <Link
                            key={i}
                            onClick={closeModal}
                            to={link.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <ul className="hidden md:flex mr-32 rounded-[48px] py-4 px-10 bg-white gap-10 font-[500] text-[16px] text-primary_blue shadow-custom">
            <li>Services</li>
            <li>Partnership</li>
            <li>Download</li>
          </ul>
          <span className="text-primary_blue font-bold text-lg hidden md:inline-block">
            *7770
          </span>
        </header>

        <div className="flex flex-col md:flex-row">
          {/* Landing Image */}
          <div className="md:m-0 md:order-2   flex items-center justify-center">
            <div className=" mt-10 mb-5 inline-block md:hidden">
              <Image src={main} alt="landing_main" width={350} priority />
            </div>
            <div className="mt-20  hidden md:flex">
              <Image
                src={main}
                alt="landing_main"
                width={650}
                height={300}
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:w-[570px] order-1  md:mt-[130px] mb-6 text-center md:text-start">
            <p className="text-primary_blue mb-4  font-[500] text-[16px] md:text-2xl  md:mb-8 ">
              Meet älaj
            </p>

            <p className="px-11 leading-10 text-primary_blue  md:text-start  md:p-0 md:pr-6 font-bold mb-6  md:text-5xl text-[32px] md:mb-8 md:font-extrabold">
              New way to find a doctor or best medical services
            </p>

            <p className="text-primary_blue leading-6 px-12 md:pr-48   md:p-0 md:text-start font-[500] text-[16px] md:text-2xl mb-8 md:mb-10">
              Find out more than 20 clinics of Baku with top rated doctors
            </p>

            <CustomButton label="Download app" variant="primary" />
          </div>
        </div>

        <div className="hidden  px-10 py-4 rounded-[48px] bg-white md:flex items-center justify-center absolute -bottom-7   left-1/2 -translate-x-1/2">
          <Image src={arrowd} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default First;
