import React from "react";
import Header from "../Header/headerComponent";
import Footer from "../Footer/footerComponent";
import Routers from "../../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
