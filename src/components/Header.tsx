const Header = () => {
  return (
    <div className="text-white ">
      <div className="flex flex-col gap-2 text-white ">
        <span className="font-light text-4xl uppercase tracking-wide">
          Muizz
        </span>
        <span className="font-medium text-5xl uppercase tracking-wide">
          Jamiu
        </span>
        <span className="font-normal text-[1.3rem]">
          Junior frontend developer
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-13">
        <h4 className="uppercase font-medium text-2xl">Profile </h4>
        <hr className="border-[#444] my-4" />
        <p>
          Profile Frontend Developer with experience building interactive web
          applications using React, TypeScript, JavaScript, and Tailwind.
          Focused on clean design, reusable components, and seamless user
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Header;
