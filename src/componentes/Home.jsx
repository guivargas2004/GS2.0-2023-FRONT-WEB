import '../styles/app.scss'
import Banner from './Banner'
import Benefit from './Beneft'
import Header from './Header'
import Info from './Info'

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Banner />
                <Info />
                <Benefit />
            </main>
        </>
    )
}