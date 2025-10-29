type Props = {
  handleDate?: () => void;
  text?: string;
};

const SecondButton = ({
  handleDate = () => console.log("SecondButton"),
  text = "Boka senare",
}: Props) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] bg-white rounded-md cursor-pointer border-1"
        onClick={handleDate}
      >
        {text}
      </button>
    </div>
  );
};

export default SecondButton;
