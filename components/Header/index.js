import styles from "./styles";
import Image from 'next/image'

const index = () => {
  return (
    <header>
      <picture className='foton'>
        <Image src="/Foton.svg" alt="" width={480} height={80} layout='responsive' />
      </picture>
      <picture className='copiloto'>
        <Image src="/coPiloto.svg" alt="" width={500} height={100} layout='responsive'  />
      </picture>
      <picture className='kaufman'>
        <Image src="/kaufman.svg" alt="" width={400} height={100} layout='responsive' />
      </picture>
      <style jsx>{styles}</style>
    </header>
  );
};

export default index;
