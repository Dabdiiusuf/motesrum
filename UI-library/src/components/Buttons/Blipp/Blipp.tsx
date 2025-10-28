// import blipp from "./assets/images/contactless-payment.png";

const Blipp = ({
  handleBlipp = () => {
    console.log("hello");
  },
}) => {
  return (
    <div>
      <button onClick={handleBlipp}>
        <img
          // src={blipp}
          alt="blipp image"
          className="w-[150px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Blipp;
