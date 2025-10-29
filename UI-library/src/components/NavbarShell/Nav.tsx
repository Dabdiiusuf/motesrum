import SecondButton from "../Buttons/SecondButton/SecondButton";
import ThirdButton from "../Buttons/ThirdButton/ThirdButton";
import logo from "../../assets/images/LOGO.png";

const Nav = () => {
  return (
    <div className="max-w-screen h-[100px] bg-[#212121] flex justify-between items-center px-10">
      <div className="flex text-white items-center gap-2">
        <img src={logo} alt="viaplay logo" />
        <h1>viaplay</h1>
      </div>
      <div className="flex flex-row gap-10">
        <ThirdButton text={"Avsluta"} />
        <SecondButton text={"Mina bokningar"} />
      </div>
    </div>
  );
};

export default Nav;
