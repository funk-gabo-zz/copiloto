const index = () => {
  return (
    <header>
      <picture>
        <img src="/Foton.svg" alt="" />
      </picture>
      <picture>
        <img src="/coPiloto.svg" alt="" />
      </picture>
      <picture>
        <img src="/kaufman.svg" alt="" />
      </picture>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          height: 200px;
          width: 100%;
          background-color: #cacaca;
        }
        header picture {
          padding: 0 40px;
          margin: 0;
        }
      `}</style>
    </header>
  );
};

export default index;
