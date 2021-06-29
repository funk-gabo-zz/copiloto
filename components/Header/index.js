import styles from "./styles";
import Image from 'next/image'

const index = () => {
  return (
    <header>
        <img className='foton' src="/Foton.svg" alt="" layout='responsive' />
        <img className='coPiloto' src="/coPiloto.svg" alt="" layout='responsive'  />
        <img className='kaufman' src="/kaufman.svg" alt="" layout='responsive' />
      <style jsx>{styles}</style>
    </header>
  );
};

export default index;
