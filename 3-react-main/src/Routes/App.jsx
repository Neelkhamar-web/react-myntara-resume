import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Fetchitem from "../Components/Fetchitem";
import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

function App() {
  const fetch = useSelector((state) => state.fetch);
  return (
    <>
      <Header />
      <Fetchitem />
      {fetch.currentfetching ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
}

export default App;
