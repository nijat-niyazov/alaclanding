import { arrowd, logo, main } from "@/assets";
import CustomButton from "@/components/custom";
import Image from "next/image";
import { Link } from "react-scroll";
import DropDown from "./DropDown";

const links = ["Services", "Partnership", "Download"];

const First = () => {
  return (
    <section className="relative w-full custom-style pb-1.5">
      <div className="md:pt-8 z-10 p-4 md:p-0 md:w-[80%] h-screen   mx-auto">
        <header className="flex relative items-center justify-between">
          <Image src={logo} alt="logo" width={84} height={32} />

          <DropDown links={links} />

          <ul className="hidden md:flex  rounded-[48px] py-4 px-10 bg-white gap-10 font-[500] text-[16px] text-primary_blue shadow-custom">
            {links.map((link, i) => (
              <Link
                className="cursor-pointer"
                key={i}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {link}
              </Link>
            ))}
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
          <div className="md:w-[570px] order-1  md:mt-[130px] mb-6 text-center md:text-start text-primary_blue">
            <p className=" mb-4  font-[500] text-[16px] md:text-2xl  md:mb-8 ">
              Meet älaj
            </p>

            <p className="px-12 leading-10   md:text-start  md:p-0 md:mr-26 font-bold mb-6  md:text-5xl text-[32px] md:mb-8 md:font-extrabold md:mr-40">
              New way to find a doctor or best medical services
            </p>

            <p className=" leading-6 px-12 md:pr-48   md:p-0 md:text-start font-[500] text-[16px] md:text-2xl mb-8 md:mb-10">
              Find out more than 20 clinics of Baku with top rated doctors
            </p>

            <CustomButton label="Download app" variant="primary" />
          </div>
        </div>

        <div className="hidden  px-10 py-4 rounded-[48px] bg-white md:flex items-center justify-center absolute -bottom-7   left-1/2 -translate-x-1/2">
          <Image src={arrowd} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default First;
