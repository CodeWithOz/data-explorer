import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  const reports: string[] = [
    'fertility-income-life-expectancy.html',
  ]
  const title = 'Data Explorer'
  const subtitle = 'Learning the ropes of data analysis, one dataset at a time'

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${title}: ${subtitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>
          {subtitle}
        </p>

        <h2 className={styles.reports__title}>Reports</h2>
        <ul className={styles.reports__list}>
          {reports.map((report: string, ind: number) => (
            <li key={ind}>
              <a href={report} target='_blank'>{report}</a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        {/* TODO: add github repo here */}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}