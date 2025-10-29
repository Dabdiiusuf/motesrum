const Stepper = () => {
  return (
    <div className="relative flex justify-between w-[600px] max-h-content">
      <div className="bg-[#999999] w-[20px] h-[20px] rounded-full z-10 ml-5"></div>
      <div className="bg-[#999999] w-[20px] h-[20px] rounded-full z-10"></div>
      <div className="bg-[#999999] w-[20px] h-[20px] rounded-full z-10"></div>
      <div className="bg-[#999999] w-[20px] h-[20px] rounded-full z-10 mr-5"></div>
      <hr className="absolute left-0 right-0 top-1/2 border-[1px] border-[#999999] z-0" />
    </div>
  );
};

export default Stepper;
