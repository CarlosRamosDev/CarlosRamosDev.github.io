import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Copyright from "../components/footer/Copyright";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <footer>
                <Copyright/>
            </footer>
        </>
    )
}

export default MyApp
