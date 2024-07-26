const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-gray-200 hover:font-semibold`
          : "bg-blue-900 text-white border-blue-900 hover:bg-blue-800"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      
        {label}
        {iconURL && (
        <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5"/>
        )}
    </button>
  );
};

export default Button;