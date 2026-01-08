import Image from "next/image";

const Logo = () => {
  return (
    <div className="fixed top-3 left-4 sm:left-8 lg:left-16 flex items-center z-50">
      <div className="flex flex-col justify-center items-center group">
        <Image
          src="/catcoffe-logo.svg"
          width={100}
          height={100}
          alt="CatCoffe logo"
          className="sm:w-[130px] sm:h-[130px] lg:w-[170px] lg:h-[170px]"
        />
        <h1 className="text-coffee-highlight text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 ease-out group-hover:tracking-widest">
          CatCoffe
        </h1>
      </div>
    </div>
  );
};

export default Logo;
