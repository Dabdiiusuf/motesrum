type Props = {
  handleNext?: () => void;
  text?: string;
};

const ThirdButton = ({
  handleNext = () => {
    console.log("Next page");
  },
  text = "Nästa",
}: Props) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] rounded-md bg-[#FF315E] text-white cursor-pointer hover:bg-[#c02b4b]"
        onClick={handleNext}
      >
        {text}
      </button>
    </div>
  );
};

export default ThirdButton;
