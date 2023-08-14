import Image from "next/image";
import React from "react";
import { partner } from "@/assets";
import CustomButton from "@/components/custom";

function Fourth() {
  return (
    <section className="bg-white h-full text-[#172D66] w-full flex justify-center items-center gap-8 md:flex-row flex-col py-8 px-4 md:mx-auto md:w-[80%]">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <p className="text-2xl font-bold my-4">Be our partner</p>
        <p className="text-2xl text-center md:text-start md:text-4xl">
          Pick up the best service from more than{" "}
          <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#60E9CC] to-[#DE81FF]">10 000 best doctors</span>
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Image src={partner} alt="partner" className="w-[180px] h-[360px]" />
      </div>
      <div className="flex flex-col gap-10">
        {" "}
        <p className="text-base text-[#172D66] ">
          Find out more than 20 clinicsof Baku with top rated doctors
        </p>
        <CustomButton label={"Contact us"} variant="primary" />
      </div>
    </section>
  );
}

export default Fourth;
