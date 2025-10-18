import iconCheck from "../assets/icon-check.svg";

export const InputCheck = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-row items-center justify-align gap-4 m-4 ">
      <div className="w-[20px] h-[20px] bg-[#A4FFAF] flex flex-row items-center justify-center ">
        <img src={iconCheck} alt="" />
      </div>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};
