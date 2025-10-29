import NavbarShell from "../NavbarShell/Nav";

const Background = () => {
  return (
    <div className="bg-[#212121]">
      <NavbarShell />
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="absolute left-0 top-0 w-4/5 h-full z-10 bg-gradient-to-r from-[#212121] via-[#212121] to-[#212121] backdrop-blur-sm [mask-image:linear-gradient(to_right,black_0,black_70%,transparent_100%)]"></div>
        <div className="absolute right-[-250px] top-30 w-[65%] h-[500px] bg-gradient-to-tr from-[#A1003E] via-[#A1003E] to-[#CE252B] rotate-[25deg] opacity-70 z-0"></div>
        <div className="absolute right-[-250px] bottom-30 w-[65%] h-[500px] bg-gradient-to-r from-[#6c026c] to-[#FF0077] rotate-[-25deg] opacity-70 z-0"></div>
      </div>
    </div>
  );
};

export default Background;
