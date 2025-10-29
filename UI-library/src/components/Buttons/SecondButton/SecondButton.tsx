const BookLater = (
  handleBookLater = () => {
    console.log("Booklater");
  },
  bookLater = "Boka senare"
) => {
  return (
    <div>
      <button
        className="w-[138px] h-[48px] bg-white rounded-md cursor-pointer border-1"
        onClick={handleBookLater}
      >
        {bookLater}
      </button>
    </div>
  );
};

export default BookLater;
