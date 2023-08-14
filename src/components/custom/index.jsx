const CustomButton = ({ label, variant }) => {
  const className = () => {
    switch (variant) {
      case "primary":
        return "py-4 bg-primary_blue font-semibold text-[16px] text-center w-full md:px-6 md:w-auto  text-white rounded-[32px]";
    }
  };

  return (
    <button className={className()}>
      <span className="md:px-2">{label}</span>
    </button>
  );
};

export default CustomButton;
