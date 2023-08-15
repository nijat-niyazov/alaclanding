import { android, apple, qr } from "@/assets";
import CustomButton from "@/components/custom";
import Image from "next/image";

function Fifth() {
  return (
    <section
      id="download"
      className="custom-style2 pt-6 pb-[56px] z-0 h-full relative  "
    >
      <div className="flex flex-col md:flex-row  md:w-[80%] md:mx-auto justify-between">
        <div className="flex flex-col justify-center md:order-1 mx-auto pl-8 md:pl-0 items-center w-full h-[420px] md:w-[500px] md:h-[560px]">
          <div className="bgiphone w-full h-full object-cover" />
        </div>
        <div className="flex flex-col px-4 justify-center md:w-1/3 gap-10">
          <p className="text-[24px] font-bold leading-[28.8px] text-[#172D66] text-center   md:text-[32px]">
            Download now
          </p>
          <p className="text-base text-[#172D66] text-center md:px-16">
            Find out more than 20 clinics of Baku with top rated doctors
          </p>
          <CustomButton
            icon={apple}
            label={"Download for iOS"}
            variant="primary"
          />
          <CustomButton
            icon={android}
            label={"Download for Android"}
            variant="primary"
          />
        </div>
        <div className="w-1/3 hidden md:flex justify-center items-center flex-col gap-10">
          <p className="text-[17px] text-[#2D488C] px-24">
            Scan QR code for downloading
          </p>
          <Image src={qr} alt="qr" className="w-[210px] h-[210px] md:mt-5" />
        </div>
      </div>
    </section>
  );
}

export default Fifth;
