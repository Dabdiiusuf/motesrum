import SecondButton from "../Buttons/SecondButton/SecondButton";

const Calendar = () => {
  return (
    <div className="relative bg-[#29262D] w-[414px] h-[526px] rounded-2xl overflow-hidden">
      <div className="h-full w-full absolute flex flex-col justify-between items-center z-10 py-10">
        <div className="text-center text-white">
          <h1>Välj datum</h1>
          <h2>October 2025</h2>
        </div>
        <div className="text-white">dates</div>
        <SecondButton text={"Välj"} />
      </div>
      <div className="absolute right-[-180px] top-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#CE252B] to-[#A1003E] rotate-[25deg] z-0"></div>
      <div className="absolute right-[-180px] bottom-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#6c026c] to-[#FF0077] rotate-[-25deg] z-0"></div>
    </div>
    //border-2 border-green-600
  );
};

export default Calendar;
