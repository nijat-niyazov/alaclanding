"use client";
import { close, menu } from "@/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const DropDown = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickAway = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  console.log(isOpen);

  return (
    <>
      <button
        ref={buttonRef}
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={isOpen ? close : menu} alt="menu" width={32} height={32} />
      </button>
      <div
        // ref={modalRef}
        className={`w-full absolute top-14  max-w-md transform overflow-hidden rounded-[48px] bg-white  text-center align-middle shadow-xl transition-opacity  duration-300 ${
          isOpen ? "h-auto opacity-100" : "h-auto opacity-0"
        } `}
      >
        <div className="grid gap-8 text-primary_blue  overflow-hidden text-lg font-bold p-12">
          {links.map((link, i) => (
            <Link
              className="cursor-pointer"
              key={i}
              onClick={() => setIsOpen(false)}
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
      </div>
    </>
  );
};

export default DropDown;
