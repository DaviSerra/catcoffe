import { Coffee } from "lucide-react";
import Image from "next/image";

const HeroSecton = () => {
  return (
    <section className="absolute top-1/5 right-0 md:right-20 flex flex-col items-center justify-center">
      <div className="fixed left-1/5 top-1/6 -z-10 opacity-40 hidden md:block">
        <Image
          src="/icons.png"
          width={500}
          height={500}
          alt="Cat with coffee"
        />
      </div>

      <div className="flex flex-col items-center md:items-end gap-3 md:gap-4 text-center md:text-right">
        <h1 className="text-5xl md:text-8xl font-bold bg-linear-to-r bg-clip-text text-transparent from-coffee-deep via-coffee-cream to-coffee-cream">
          CatCoffe
        </h1>

        <p className="text-lg md:text-3xl font-medium tracking-wide bg-linear-to-r bg-clip-text text-transparent from-coffee-dark via-coffee-cream to-coffee-cream">
          A cafeteria que une paixão por gatos e café de qualidade.
        </p>

        <p className="text-base md:text-3xl text-coffee-medium font-medium">
          O melhor do café artesanal,
          <span className="block">com o charme que só a CatCoffe tem.</span>
        </p>

        <button className="mt-2 bg-coffee-deep hover:bg-coffee-medium duration-300 h-10 w-64 rounded-full flex justify-center items-center gap-3 text-coffee-highlight font-semibold">
          Explore nossos produtos
          <Coffee size={20} />
        </button>
      </div>

      <div className="fixed top-[70%] md:top-2/3 md:right-1/4 flex flex-col items-center md:items-start gap-2 text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-bold text-coffee-deep">
          Combo Miaudável!
        </h1>
        <p className="text-coffee-medium font-medium">
          Brownie quentinho + Cappuccino cremoso
        </p>
        <p className="text-coffee-medium font-medium">Por R$ 18,90</p>

        <button className="bg-coffee-deep hover:bg-coffee-medium duration-300 h-10 w-32 text-coffee-highlight rounded-full font-semibold">
          Fazer pedido
        </button>
      </div>

      <div className="fixed -bottom-20 -right-32 hidden md:block">
        <Image
          width={450}
          height={200}
          src="/combo-promo.png"
          alt="promo brand"
        />
      </div>
    </section>
  );
};

export default HeroSecton;
