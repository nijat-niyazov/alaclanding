import Footer from "./Footer";
import { First, Second } from "./sections";

const Landing = () => {
  return (
    <div className="flex flex-col gap-14">
      <First />
      <Second />
      <Footer />
    </div>
  );
};

export default Landing;
