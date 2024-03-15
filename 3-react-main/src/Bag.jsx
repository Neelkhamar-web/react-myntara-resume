import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BagSummary from "./Components/BagSummary";
import Bagitem from "./Components/Bagitem";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagitem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  console.log(items);
  const a = items.items;
  console.log("q", a);
  const final = a.filter((item) => {
    const indexOfItem = bagitem.indexOf(item.id); // Corrected spelling here
    return indexOfItem >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {final.map((item) => (
              <Bagitem items={item} key={item.id} /> // Added key prop here
            ))}
          </div>

          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
