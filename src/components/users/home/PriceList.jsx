import { FaCheck } from "react-icons/fa";

const packages = [
    {
        title: "GÓI 20 PROXY",
        ipv4: "20 IPv4 Datacenter",
        speed: "10 Gbps",
        location: "Vương quốc Anh, Mỹ, Singapore, Úc",
        options: "HTTP(S)/SOCKS5",
        security: "Có User & Pass",
        price: "200,000 VNĐ/ tháng",
    },
    {
        title: "GÓI 50 PROXY",
        ipv4: "50 IPv4 Datacenter",
        speed: "10 Gbps",
        location: "Vương quốc Anh, Mỹ, Singapore, Úc",
        options: "HTTP(S)/SOCKS5",
        security: "Có User & Pass",
        price: "475,000 VNĐ/ tháng",
        bestSeller: true,
    },
    {
        title: "GÓI 100 PROXY",
        ipv4: "100 IPv4 Datacenter",
        speed: "10 Gbps",
        location: "Việt Nam",
        options: "HTTP(S)/SOCKS5",
        security: "Có User & Pass",
        price: "900,000 VNĐ/ tháng",
    },
    {
        title: "GÓI 200 PROXY",
        ipv4: "200 IPv4 Datacenter",
        speed: "10 Gbps",
        location: "Việt Nam",
        options: "HTTP(S)/SOCKS5",
        security: "Có User & Pass",
        price: "1,700,000 VNĐ/ tháng",
    },
    {
        title: "GÓI 500 PROXY",
        ipv4: "500 IPv4 Datacenter",
        speed: "10 Gbps",
        location: "Việt Nam",
        options: "HTTP(S)/SOCKS5",
        security: "Có User & Pass",
        price: "4,000,000 VNĐ/ tháng",
    },
];

const PriceList = () => {

    return (
        <div className="bg-[#efecf3] py-8">
            <div className="container mx-auto max-w-screen-xl text-center mb-8">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">BẢNG GIÁ PROXY PRIVATE IPV4 TẠI VPSTTT</h2>
                <p className="text-xl text-purple-500">Tất cả gói Proxy Private IPv4 đều</p>
                <div className="flex flex-wrap flex-col  sm:flex-row justify-center items-center space-x-2 mt-2">
                    <p className="text-purple-500 flex items-center gap-1"> <FaCheck />{" "}Gói Proxy Private IPv4 chỉ có Việt Nam</p>
                    <p className="text-purple-500 flex items-center gap-1"><FaCheck /> Chuẩn Http(s)/socks5</p>
                    <p className="text-purple-500 flex items-center gap-1"><FaCheck /> Gia hạn theo tháng</p>
                </div>
            </div>

            <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg border-t-4 border-purple-600 rounded-lg text-center p-6 w-full transform transition-transform hover:-translate-y-4 relative"
                    >
                        {pkg.bestSeller && (
                            <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                                Best Seller
                            </span>
                        )}
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">{pkg.title}</h3>

                        <ul className="text-left mb-6 space-y-2">
                            <li><i className="fas fa-map-marker-alt text-purple-600"></i> <strong>IPv4:</strong> {pkg.ipv4}</li>
                            <li><i className="fas fa-tachometer-alt text-purple-600"></i> <strong>TỐC ĐỘ MẠNG:</strong> {pkg.speed}</li>
                            <li><i className="fas fa-map-marker-alt text-purple-600"></i> <strong>VỊ TRÍ:</strong> {pkg.location}</li>
                            <li><i className="fas fa-cog text-purple-600"></i> <strong>TÙY CHỌN:</strong> {pkg.options}</li>
                            <li><i className="fas fa-lock text-purple-600"></i> <strong>BẢO MẬT:</strong> {pkg.security}</li>
                        </ul>

                        <div className="text-2xl font-bold text-purple-700 mb-4">{pkg.price}</div>
                        
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                            Đăng kí
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceList