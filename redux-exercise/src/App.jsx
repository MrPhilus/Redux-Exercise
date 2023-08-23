import "./App.css";
import CustomButton from "./components/CustomButton";
import ProductCard from "./components/ProductCard";

import { useSelector, useDispatch } from "react-redux";
import { priceChange } from "../src/redux/slices/currencySlice";

function App() {
  const dispatch = useDispatch();
  const currencyType = useSelector((state) => state.currency.currecncyType);

  function priceSwap() {
    dispatch(priceChange(currencyType));
  }

  const buttonsGrid = [
    { text: "NGN", color: "grey" },
    { text: "USD", color: "red" },
  ];

  const dummyData = [
    {
      image:
        "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "signature briefcase",
      dollarPrice: "$234",
      nairaPrice: "₦130,000",
    },
    {
      image:
        "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$134",
      nairaPrice: "₦80,000",
    },
    {
      image:
        "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "black briefcase",
      dollarPrice: "$334",
      nairaPrice: "₦230,000",
    },
    {
      image:
        "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
      name: "red briefcase",
      dollarPrice: "$364",
      nairaPrice: "₦730,000",
    },
  ];

  //mapping through data and assigning the result to products
  const products = dummyData.map((item, index) => {
    return (
      <ProductCard
        key={index}
        price={currencyType ? item.dollarPrice : item.nairaPrice}
        image={item.image}
        name={item.name}
      />
    );
  });

  //Mapping through and assigning buttons to a variable for cleaner code
  const options = buttonsGrid.map((item, index) => {
    return (
      <CustomButton
        key={index}
        text={item.text}
        style={{ backgroundColor: item.color }}
        onClick={priceSwap}
      />
    );
  });

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          gap: "3rem",
        }}
      >
        {products}
      </div>
      <div>{options}</div>
    </div>
  );
}

export default App;
