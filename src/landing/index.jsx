import { Fifth, First, Fourth, Second, Third } from "@/landing/sections";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="h-screen bg-white flex flex-col gap-8">
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
};

export default Landing;
