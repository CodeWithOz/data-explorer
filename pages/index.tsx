import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  const reports: string[] = [
    'fertility-income-life-expectancy.html',
    'wrangle_report.html',
    'act_report.html',
    'gobike-slide-deck.slides.html',
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
        Source code available on <a
          href="https://github.com/CodeWithOz/data-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}