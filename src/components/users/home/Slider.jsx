import RSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-purple-600 p-2  shadow-md hover:bg-purple-600 hover:text-white transition"
            onClick={onClick}>
            ❯
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-purple-600 p-2  shadow-md hover:bg-purple-600 hover:text-white transition z-10"
            onClick={onClick}>
            ❮
        </button>
    );
}

const Slider = () => {

    const settings = {
        className: "",
        dots: true,
        // lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        appendDots: dots => (
            <div
                style={{
                    padding: "2px",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="slider-container" >
            <RSlider {...settings}>
                {['./images/home/proxy.jpg', './images/logo-full.png', './images/home/proxy.jpg'].map((src, index) => (
                    <div
                        key={index}
                        className="w-full h-auto md:h-96"
                    >
                        <img width="100%" src={src} alt="" />
                    </div>
                ))}
            </RSlider>
        </div>
    )
}

export default Slider