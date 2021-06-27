import Link from "next/link";
import styles from "./styles";

export default function MenuOption({ name, color, to }) {
  return (
    <div className="menu_container">
      <Link href={`/${to}`}>
        <a>
          <img src={`/home_menu/e${color}.png`} />
        </a>
      </Link>
      <span>{name}</span>
      <style jsx>{styles}</style>
    </div>
  );
}
