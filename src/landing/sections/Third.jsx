import React from "react";
import { clinic1, clinic2, clinic3, clinic4 } from "@/assets";
import Image from "next/image";
function Third() {
  const clinics = [
    {
      id: 1,
      img: clinic1,
    },
    {
      id: 2,
      img: clinic2,
    },
    {
      id: 3,
      img: clinic3,
    },
    {
      id: 4,
      img: clinic4,
    },
  ];

  return (
    <section className="bgsection3 z-0 py-16 bg-white  max-w-full relative md:flex md:items-center md:justify-center w-full md:h-[750px]">
      <div className="z-10  bg-transparent px-4 flex justify-center flex-col  items-center gap-8 text-center">
        <p className="text-[24px] font-bold leading-[28.8px] text-[#172D66]">
          Find out more than 20 clinics of Baku with top rated doctors
        </p>
        <div className="flex flex-wrap justify-center gap-4 w-full h-auto   md:w-[792px]">
          {clinics.map((clinic) => (
            <>
              <Image
                src={clinic.img}
                alt={`clinic+${clinic.id}`}
                className="w-[64px] h-[64px] rounded-[16px] object-cover"
              />
              <Image
                src={clinic.img}
                alt={`clinic+${clinic.id}`}
                className="w-[64px] h-[64px] rounded-[16px] object-cover"
              />
              <Image
                src={clinic.img}
                alt={`clinic+${clinic.id}`}
                className="w-[64px] h-[64px] rounded-[16px] object-cover"
              />
              <Image
                src={clinic.img}
                alt={`clinic+${clinic.id}`}
                className="w-[64px] h-[64px] rounded-[16px]  object-cover"
              />
            </>
          ))}
          <Image
            src={clinics[0].img}
            alt={`clinic+${clinics[0].id}`}
            className="w-[64px] h-[64px] rounded-[16px] object-cover"
          />
          <p className="text-base text-[#172D66]">
            Find out more than 20 clinicsof Baku with top rated doctors
          </p>
        </div>
      </div>
    </section>
  );
}

export default Third;
