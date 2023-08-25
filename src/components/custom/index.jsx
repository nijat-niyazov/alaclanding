import Image from "next/image";

const CustomButton = ({ label, variant, icon, disabled }) => {
  const className = () => {
    switch (variant) {
      case "primary":
        return disabled
          ? "opacity-50 py-4 flex  bg-primary_blue justify-center font-semibold text-[16px] text-center w-full md:px-6 md:w-auto  text-white rounded-[32px]"
          : "py-4 flex  bg-primary_blue justify-center font-semibold text-[16px] text-center w-full md:px-6 md:w-auto  text-white rounded-[32px]";
    }
  };

  return (
    <button className={className()} disabled={disabled}>
      {icon && <Image src={icon} alt="icon" className="mx-1" />}
      <span className="md:px-2">{label}</span>
    </button>
  );
};

export default CustomButton;
