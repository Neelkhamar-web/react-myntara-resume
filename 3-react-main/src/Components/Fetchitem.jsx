import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchaction } from "../store/fetchslice";
import { itemaction } from "../store/itemslice";

const Fetchitem = () => {
  const fetchi = useSelector((state) => state.fetch);
  console.log("ffffff", fetchi);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchaction.markfethstarted()); // Dispatch function, not just action type
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();
        console.log("iiiiiiiiiiiiii", data);
        if (data) {
          dispatch(fetchaction.markfetchdone());
          dispatch(fetchaction.markfetchfinish());
          dispatch(itemaction.addinitialitem(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchi.fetchdone, dispatch]); // Corrected dependency array

  return null; // Since this is a side-effect only component, it doesn't render anything
};

export default Fetchitem;
