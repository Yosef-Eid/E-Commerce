import Image from 'next/image'
import styles from './page.module.css'
import Home from "@/app/component/home/page.js";

export default function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  )
}
