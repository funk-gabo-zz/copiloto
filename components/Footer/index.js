import styles from "./styles";

const index = () => {
  return (
    <footer>
      <div className="copyr">
        <span>Copyright © 2021 eTrans.cl | Credits</span>
      </div>
      <div className="poweredb">
        <span>Powered by eTrans.cl</span>
      </div>
      <style jsx>{styles}</style>
    </footer>
  );
};

export default index;
