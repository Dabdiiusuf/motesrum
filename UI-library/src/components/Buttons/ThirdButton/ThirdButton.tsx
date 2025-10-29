const Next = (
  handleNext = () => {
    console.log("Next page");
  },
  thirdVariant = "Nästa"
) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] rounded-md bg-[#FF315E] text-white cursor-pointer"
        onClick={handleNext}
      >
        {thirdVariant}
      </button>
    </div>
  );
};

export default Next;
