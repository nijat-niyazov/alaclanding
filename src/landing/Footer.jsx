import { facebook, instagram, logo, youtube } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pb-8 px-4 w-full md:pb-20 md:w-[80%] m-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-40">
        {/* first */}
        <div className="mb-10 md:m-0">
          <Image src={logo} alt="logo" className="mb-6" />
          <p className="text-primary_blue mb-4  font-[500] text-[16px]  tracking-[0.32px]">
            Alac is the world’s leading <br /> community for creatives to share,
            <br /> grow, and get hired.
          </p>
        </div>

        {/* second */}
        <div className="flex gap-2 flex-col text-secondary_blue ">
          <section className="flex gap-2 items-center md:justify-end">
            <div className="px-6 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <span className="text-[16px] font-semibold px-2 leading-6">
                +994 55 979 90 34
              </span>
            </div>
            <div className="px-6 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <span className="text-[16px] font-semibold px-2 leading-6">
                *7700
              </span>
            </div>
          </section>

          <section className="flex gap-2 items-center">
            <div className="px-6 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <span className="text-[16px] font-semibold px-2 leading-6">
                @info.alac.az
              </span>
            </div>
            <div className="px-4 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <Image width={16} src={facebook} alt="avatar" />
            </div>
            <div className="px-4 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <Image width={16} src={instagram} alt="avatar" />
            </div>
            <div className="px-4 py-4 bg-[#F0F3FF] rounded-[32px] hidden md:flex items-center justify-center ">
              <Image width={16} src={youtube} alt="avatar" />
            </div>
          </section>

          <section className="flex md:hidden gap-2 items-center">
            <div className="px-4 py-4 bg-[#F0F3FF] rounded-[32px] flex items-center justify-center ">
              <Image width={16} src={youtube} alt="avatar" className="p" />
            </div>
          </section>
        </div>
      </div>

      <section className="flex text-secondary_blue  items-center justify-between">
        <span className="text-[14px] font-[500] px-2 leading-6">
          © Alac. All rights reserved.
        </span>
        <span className="text-[14px] font-[500] px-2 leading-6">2023</span>
      </section>
    </div>
  );
};

export default Footer;
