const ArrowDownIcon = ({
  style = {},
  fill = "white",
  width = "100%",
  height = "100%",
  className = "",
  viewBox = "0 0 15 15",
  handleClick = () => {},
}) => (
  <svg
    onClick={handleClick}
    style={style}
    width={width}
    height={height}
    viewBox={viewBox}
    className={`svg-icon ${className || ""}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.375 6.25L7.5 9.375L10.625 6.25H4.375Z" fill={fill} />
  </svg>
);

export default ArrowDownIcon;
