const Header = () => {
  return (
    <div className="text-white ">
      <div className="flex flex-col gap-2 text-white ">
        <span className="text-4xl font-light tracking-wide uppercase">
          Muizz
        </span>
        <span className="text-5xl font-medium tracking-wide uppercase">
          Jamiu
        </span>
        <span className="font-normal text-[1.3rem]">
           Frontend developer
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-13">
        <h4 className="text-2xl font-medium uppercase">Profile </h4>
        <hr className="border-[#444] my-4" />
        <p>
          Frontend Developer who enjoys transforming ideas into fast,
          responsive, and engaging web experiences using React, Next.js,
          TypeScript, and Tailwind CSS. Passionate about solving problems,
          learning deeply, and building products that create real value for
          users. Dedicated to continuous growth and delivering high-quality,
          maintainable solutions.
        </p>
      </div>
    </div>
  );
};

export default Header;
