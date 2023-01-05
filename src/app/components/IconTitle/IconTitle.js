const IconTitle = ({
  icon,
  title,
  className,
  isGray,
  isFlex,
  onClick,
  isCircle,
  isActive,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isFlex && "flex-col"} flex items-center gap-2 ${className}`}
    >
      {isActive ? (
        <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center">
          <img src={icon} alt="Hello" />
        </div>
      ) : isCircle ? (
        <div className="border border-textColor w-14 h-14 rounded-full flex justify-center items-center">
          <img src={icon} alt="Hello" />
        </div>
      ) : (
        <img src={icon} alt="Hello" />
      )}
      {title !== "See More" ? <h3
        className={
          isGray ? "text-textColor text-sm text-center" : "text-white text-sm"
        }
      >
        {title}
      </h3> : <h3 className="opacity-0">hello</h3>}
    </div>
  );
};

export default IconTitle;
