/* eslint-disable react/prop-types */
const ProductCard = ({ image, name, price }) => {
  return (
    <div>
      <img width={"100rem"} src={image} alt="" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
