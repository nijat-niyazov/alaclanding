import { Fifth, First, Fourth, Second, Third } from "@/landing/sections";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="h-full bg-white">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
};

export default Landing;
