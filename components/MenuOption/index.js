import styles from '../../styles/HomeMenu.module.css'
import Link from 'next/link'

export default function MenuOption({name, color, to}) {
  return (
    <div className={styles.menu_container}>
    <Link href={`/${to}`}>
    <a>
      <img src={`/home_menu/e${color}.png`} />
      </a>
    </Link>
      <span>{name}</span>
    </div>
  );
}
