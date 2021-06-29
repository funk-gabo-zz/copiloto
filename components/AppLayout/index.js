import Header from "../Header";
import Footer from "../Footer";
import { globalStyles } from "../../styles/global";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <style jsx>{globalStyles}</style>
    </>
  );
};

export default Layout;
