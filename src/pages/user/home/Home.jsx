import Header from "../../../components/users/home/Header"
import Slider from "../../../components/users/home/Slider"
import PriceList from "../../../components/users/home/PriceList"
import Characteristic from "../../../components/users/home/Characteristic"
import FooterBanner from "../../../components/users/home/FooterBanner"
import ScrollToTop from "../../../components/users/home/ScrollToTopConfigProps"
import Footer from "../../../components/users/home/Footer"
import ContactIcons from "../../../components/users/home/ContactIcon"
import "./home.css"

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <PriceList />
            <Characteristic />
            <FooterBanner />
            <ScrollToTop />
            <ContactIcons />
            <Footer />
        </>
    )
}

export default Home