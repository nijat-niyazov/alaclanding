import { cat, girld, guyd, hand, reng } from "@/assets";
import CustomButton from "@/components/custom";
import Image from "next/image";

function Card({ heading, text, image, bg, mobCols = 1, desCols = 2 }) {
  return (
    <div
      style={{
        backgroundColor: bg,
        gridColumn: `span ${desCols}`,

        "@media (max-width: 600px)": {
          gridColumn: `span ${mobCols}`,
        },
      }}
      className="rounded-[40px] md:rounded-[200px] md:pl-[72px]  overflow-hidden relative flex flex-col md:flex-row gap-4 items-center justify-between"
    >
      <div className="p-6 pb-2 md:px-0 md:py-12 ">
        <h3 className="mb-2 font-bold text-xl md:text-2xl">{heading}</h3>
        <p className="text-[14px] md:text-[16px]">{text}</p>
      </div>

      <div className="flex items-center justify-center relative w-[180px]">
        <Image src={image} alt="girl_doc" fill />
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1,
    mobCols: 2,
    desCols: 3,
    heading: "Doctor's appointment",
    text: "Doctors with verified reviews in any area of the city and a quick appointment",
    bg: "#DEECFF",
    image: girld,
  },
  {
    id: 2,
    desCols: 3,
    heading: "Diagnostics",
    text: "MRI, CT, ultrasound, ECG, X-ray",
    bg: "#FBE5FF",
    image: reng,
  },
  {
    id: 3,

    heading: "Services",
    text: "Procedures and treatments",
    bg: "#D9F6F2",
    image: hand,
  },
  {
    id: 4,
    heading: "Veterinary",
    text: "Medical care for animals",
    bg: "#FFEDE9",
    image: cat,
  },
  {
    id: 5,
    heading: "Abroad",
    text: "Procedures and treatments",
    bg: "#F4EFFF",
    image: guyd,
  },
];

const Second = () => {
  return (
    <section className="p-4 h-full bg-white text-primary_blue md:p-0 md:w-[80%] mx-auto md:pt-8">
      <h2 className="font-extrabold  text-2xl mb-16 text-center md:text-start">
        Medical Services
      </h2>

      <div className="grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-6 mb-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            mobCols={card?.mobCols}
            desCols={card?.desCols}
            bg={card.bg}
            heading={card.heading}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 md:gap-0 md:justify-between md:flex-row">
        <p className="text-primary_blue leading-7 text-center md:text-start   font-[500] text-[16px] md:text-[20px] ">
          Pick up the best service from <br />
          more than 10 000 best doctors
        </p>

        <CustomButton label="Download App" variant="primary" />
      </div>
    </section>
  );
};

export default Second;
