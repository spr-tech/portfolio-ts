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
        <span className="font-normal text-[1.3rem]">Frontend Engineer</span>
      </div>

      <div className="flex flex-col gap-3 mt-13">
        <h4 className="text-2xl font-medium uppercase">Profile </h4>
        <hr className="border-[#444] my-4" />
        <p>
          Frontend Engineer focused on building modern web applications with
          React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning ideas
          into intuitive, high-performance products, solving real-world
          problems, and creating clean, maintainable solutions that deliver
          meaningful user experiences.
        </p>
      </div>
    </div>
  );
};

export default Header;
