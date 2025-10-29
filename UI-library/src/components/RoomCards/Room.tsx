import FirstButton from "../Buttons/FirstButton/FirstButton";
import SecondButton from "../Buttons/SecondButton/SecondButton";
import roomImage from "../../assets/images/petr-magera-fgSpHuVbv50-unsplash.jpg";

const Room = () => {
  return (
    <div className="h-[562px] w-[417px] bg-[#2F2F2F] flex flex-col rounded-2xl">
      <div className="relative h-[40%] w-full text-white">
        <img src={roomImage} alt="" className="h-full w-full" />
        <h1 className="absolute bottom-0 mb-3 ml-5 z-10">Vättern</h1>
        <div className="absolute bottom-0 bg-gradient-to-t from-[black] opacity-70 h-[40%] w-full"></div>
      </div>
      <div className="mx-5 mt-5 text-white">
        Mötesrummet Vättern är ett modernt rum för 1–6 personer, utrustat med
        skärm, whiteboard samt kamera för videomöten.
      </div>
      <div className="flex justify-between px-5 border-b mt-3 py-2 text-white">
        <p>Kapacitet</p>
        <div>6 (emoji)</div>
      </div>
      <div className="flex justify-between px-5 border-b mt-5 py-2 text-white">
        <p>Utrustning</p>
        <div>(emoji)</div>
      </div>
      <div className="flex justify-between px-5 mt-15">
        <SecondButton text={"Se bokningar"} />
        <FirstButton text={"Välj rum"} />
      </div>
    </div>
  );
};

export default Room;
