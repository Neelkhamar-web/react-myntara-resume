import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagaction } from "../store/bagslice";

const Homeitem = (item) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.bag);
  console.log("bagggg", bagitems);
  const ele = bagitems.indexOf(item.item.id) >= 0;
  console.log(item.item.id, ele);
  function handleitem(item) {
    dispatch(bagaction.addbagitem(item));
  }
  function handleitemremove(item) {
    dispatch(bagaction.removebagitem(item));
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.item.image} alt="item image" />
        <div className="rating">
          {item.item.stars} ⭐ | {item.item.count}
        </div>
        <div className="company-name">{item.item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.item.current_price}</span>
          <span className="original-price">Rs {item.item.original_price}</span>
          <span className="discount">
            ({item.item.discount_percentage}% OFF)
          </span>
        </div>

        {ele ? (
          <button
            className="btn-add-bag"
            onClick={(id) => {
              handleitemremove(item.item.id);
            }}
          >
            Remove to Bag
          </button>
        ) : (
          <button
            className="btn-add-bag"
            onClick={(id) => {
              handleitem(item.item.id);
            }}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default Homeitem;
