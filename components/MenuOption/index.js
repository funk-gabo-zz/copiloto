import Link from "next/link";

export default function MenuOption({ name, color, to }) {
  return (
    <div className="menu_container">
      <Link href={`/${to}`}>
        <a>
          <img src={`/home_menu/e${color}.png`} />
          <div className="cop"></div>
        </a>
      </Link>
      <span>{name}</span>
      <style jsx>
        {`
          .cop {
            content:'';
            width: 100px;
            height:100px;
            background-color:red;
          }
          .menu_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: aliceblue;
            margin: 0 100px;
          }

          .menu_container img {
            opacity: 0.8;
            transition: opacity 0.2s ease;
          }
          .menu_container img:hover {
            opacity: 1;
          }

          .menu_container:hover > span {
            opacity: 1;
            margin-top: 0;
          }

          .menu_container span {
            font-size: 3rem;
            margin-top: 5px;
            transition: margin-top 0.2s;
          }

          .menu_container img:hover > .option_name {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
}
