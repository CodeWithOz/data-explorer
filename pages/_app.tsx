import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

interface AppProps {
    Component: React.ComponentType,
    pageProps: any,
}