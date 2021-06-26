const index = () => {
  return (
    <footer>
      <div className="copyr">
        <span>Copyright © 2021 eTrans.cl | Credits</span>
      </div>
      <div className="poweredb">
        <span>Powered by eTrans.cl</span>
      </div>
      <style jsx>
        {`
          footer {
            border-top: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: rgb(218, 218, 218);
            background-color: #000000;
          }
          footer div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 110px;
            width: 300px;
            padding: 50px 0;
            margin: 0 110px;
            font-size: 1.5rem;
          }
        `}
      </style>
    </footer>
  );
};

export default index;
