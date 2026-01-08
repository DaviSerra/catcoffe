import Logo from "../Logo/Logo";
import Image from "next/image";

const BrandShowcase = () => {
  return (
    <section className="relative hidden md:block w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/shape-wave.png')] bg-contain bg-no-repeat" />

      <div className="relative z-10">
        <Logo />
      </div>

      <div className="absolute top-72 left-20 z-10">
        <Image
          src="/coffe-concept.png"
          width={450}
          height={400}
          alt="Coffee cup"
        />
      </div>
    </section>
  );
};
export default BrandShowcase;
