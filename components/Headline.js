import styles from '../styles/Home.module.css'
import Image from 'next/image'

export function Headline(props) {
  return (
    <div>
        <h1 className={styles.title}>
          index <a href="https://nextjs.org">{props.title}</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        </div>
  );
}
