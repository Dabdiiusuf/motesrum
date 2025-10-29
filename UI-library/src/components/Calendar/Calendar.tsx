import SecondButton from "../Buttons/SecondButton/SecondButton";

const Calendar = () => {
  return (
    <div className="relative bg-[#29262D] w-[414px] h-[526px] rounded-2xl overflow-hidden">
      <div className="h-full w-full absolute flex flex-col justify-around items-center z-10">
        <div className="text-center text-white">
          <h1>Välj datum</h1>
          <h2>October 2025</h2>
        </div>
        <div>My</div>
        <SecondButton text={"Välj"} />
      </div>
      <div className="absolute right-[-100px] top-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#A1003E] via-[#A1003E] to-[#CE252B] rotate-[25deg] z-0"></div>
      <div className="absolute right-[-100px] bottom-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#520052] to-[#FF0077] rotate-[-25deg] z-0"></div>
    </div>
    //border-2 border-green-600
  );
};

export default Calendar;
