const Book = (
  handleBook = () => {
    console.log("hi");
  }
) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] bg-gradient-to-tr from-[#FF0000] via-[#E9006D] to-[#D200DA] rounded-md text-white cursor-pointer"
        onClick={handleBook}
      >
        Boka
      </button>
    </div>
  );
};

export default Book;
