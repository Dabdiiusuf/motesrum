const Calendar = () => {
  return (
    <div className="relative bg-[#29262D] w-[414px] h-[526px] rounded-2xl overflow-hidden">
      <div className="absolute right-[-100px] top-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#A1003E] via-[#A1003E] to-[#CE252B] rotate-[25deg]"></div>
      <div className="absolute right-[-100px] bottom-[80px] w-[400px] h-[100px] bg-gradient-to-r from-[#520052] to-[#FF0077] rotate-[-25deg]"></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Calendar;
