import Footer from "./Footer";
import { First, Second, Fifth, Fourth, Third } from "@/landing/sections";

const Landing = () => {
  return (
    <div className="h-screen bg-white flex flex-col gap-8">
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
