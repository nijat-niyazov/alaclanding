import { cat, girld, guyd, hand, reng } from "@/assets";
import CustomButton from "@/components/custom";
import Image from "next/image";

function Card({ heading, text, image, bg, fromBottom = 0, id }) {
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
      className="grid-item h-[272px] md:h-auto rounded-[40px] md:rounded-[200px] md:pl-[72px]  overflow-hidden relative flex flex-col md:flex-row gap-4 items-center justify-between"
    >
      <div className="p-6 pb-2 md:px-0 md:py-10 md:max-w-[340px] ">
        <h3 className="mb-2 font-bold text-xl md:text-2xl tracking-[0.36px] ">
          {heading}
        </h3>
        <p className="text-[14px] md:text-[16px] tracking-[0.28px]">{text}</p>
      </div>

      <Image
        className="absolute pl-4 md:p-0 md:hidden"
        style={{
          bottom: fromBottom + "px",
        }}
        src={image}
        alt={heading}
        height={id !== 1 ? 170 : 190}
        // width={170}
      />

      <Image
        className="hidden  md:inline-block"
        src={image}
        alt={heading}
        width={170}
        // height={192}
      />
    </div>
  );
}

const cards = [
  {
    id: 1,

    desCols: 3,
    heading: "Doctor's appointment",
    text: "Doctors with verified reviews in any area of the city and a quick appointment",
    bg: "#DEECFF",
    image: girld,
  },
  {
    id: 2,
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
    fromBottom: 40,
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
    <section
      id="services"
      className="p-4 h-full  text-primary_blue md:p-0 md:w-[80%] mx-auto md:mt-20 mt-14"
    >
      <h2 className="font-extrabold  text-2xl mb-16 text-center md:text-start">
        Medical Services
      </h2>

      <div className="grid-container gap-2 grid-cols-2 md:gap-4 md:grid-cols-6 mb-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            bg={card.bg}
            fromBottom={card.fromBottom}
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

        <CustomButton disabled={true} label="Download App" variant="primary" />
      </div>
    </section>
  );
};

export default Second;
