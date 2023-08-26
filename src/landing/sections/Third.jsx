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
    <section
      id="partnership"
      className="bgsection3 z-0 py-16 bg-white  max-w-full relative  md:flex md:items-center md:justify-center w-full md:h-[750px]"
    >
      <div className="z-10  h-full bg-transparent px-4 flex justify-around flex-col  items-center gap-3 text-center">
        <p className="text-[24px] font-bold leading-[28.8px] text-[#172D66]">
          Find out more than 20 clinics of Baku with top rated doctors
        </p>

        <div className="flex items-center justify-around w-full">
          {clinics.map((clinic, i) => (
            <Image
              key={i}
              src={clinic.img}
              unoptimized={true}
              alt={`clinic+${clinic.id}`}
              className="w-[64px] h-[64px] rounded-[16px] object-cover"
            />
          ))}
        </div>
        <p className="text-base text-[#172D66] text-justify ">
          ALAC invites local clinics to partner with our platform, enhancing the
          healthcare experience for all. By joining our platform, clinics can
          showcase their expertise, add their team of skilled professionals, and
          offer a diverse range of medical services.
        </p>
      </div>
    </section>
  );
}

export default Third;
