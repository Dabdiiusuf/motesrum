type Props = {
  handleBook?: () => void;
  text?: string;
};

const FirstButton = ({
  handleBook = () => {
    console.log("hi");
  },
  text = "Boka",
}: Props) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] bg-gradient-to-tr from-[#D200DA] via-[#E9006D] to-[#FF0000] rounded-md text-white cursor-pointer"
        onClick={handleBook}
      >
        {text}
      </button>
    </div>
  );
};

export default FirstButton;
