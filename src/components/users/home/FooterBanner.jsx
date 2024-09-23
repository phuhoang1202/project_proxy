import { constants } from "../../../constants"

const FooterBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden group">
            {/* Image with zoom effect on hover */}
            <img
                src="./images/home/proxy.jpg"
                alt="Server room"
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-1000 ease-in-out flex items-center justify-center">
                <div className="text-center text-white">
                    {/* Diagonal 'ƯU ĐÃI' Ribbon */}
                    <div className="absolute top-16 left-0 transform -translate-x-16 -translate-y-8 -rotate-45 
                    bg-purple-600 text-white text-lg text-center text-[38px] font-bold px-6 py-1 shadow-lg w-[240px] h-[48px] leading-[1]">
                        ƯU ĐÃI
                    </div>

                    {/* Text and Button */}
                    <h1 className="text-3xl font-bold mb-4">ĐĂNG KÍ DỊCH VỤ PROXY PRIVATE IPV4 NGAY</h1>
                    <button className="border-2 border-white bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition-colors duration-300">
                        <a href={constants.URL_WEB_ADMIN}>Đăng kí</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner