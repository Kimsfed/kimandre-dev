import { Inter, Open_Sans } from "next/font/google"
import styles from "./styles/variables.module.scss"


const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <header>
      <h1 className={`${inter.className} ${styles.PrimaryDarkTextColor}`} > Kim Andre Dev</h1>
      <ul className={`${styles.openSans}`} >
        <li ><a href="/test">About me</a></li>
        <li><a href="/test">Contact</a></li>
      </ul>
        <div className={styles['checkbox-wrapper-34']}>
          <input className={`${styles.tgl} ${styles['tgl-ios']}`} id='toggle-34' type='checkbox'></input>
          <label className={styles['tgl-btn']} htmlFor='toggle-34'></label>
        </div>
    </header>
  )}