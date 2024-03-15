import React from "react";
import Homeitem from "../Components/Homeitem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  // Check if items is defined and has an 'items' property
  const ivalue = items && items.items ? items.items : [];

  // Assuming each item has its own properties and there's no nested 'items' property
  // You don't need to access 'items.items' here
  // You can directly use 'items' as the array to map over
  const firstItem = ivalue.length > 0 ? ivalue : [];
  console.log(firstItem);

  return (
    <main>
      <div className="items-container">
        {firstItem.map((item) => (
          <Homeitem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
