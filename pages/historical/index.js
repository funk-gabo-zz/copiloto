import SidebarFilter from "../../components/SidebarFilter";
import HistoricalMain from "../../components/HistoricalMain";

const index = () => {
  return (
    <div className='container'>
      <SidebarFilter />
      <HistoricalMain />
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          background-color: blueviolet;
          display: flex;
        }
        .sbfcontainer {
          width: 100px;
          height: 100px;
          background-color: brown;
        }
      `}</style>
    </div>
  );
};

export default index;
