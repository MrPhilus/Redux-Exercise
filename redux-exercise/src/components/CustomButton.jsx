/* eslint-disable react/prop-types */

const CustomButton = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default CustomButton;
