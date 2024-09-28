const features = [
    {
        title: "Tốc độ và hiệu suất cao",
        description: "Nhận phản hồi từ các địa chỉ IP hợp pháp được kết nối với nền tảng trao đổi proxy có độ tin cậy cao.",
        image: "./images/home/characteristic-ai.png",
    },
    {
        title: "IPS hợp pháp",
        description: "Chỉ sử dụng các IP hợp pháp, có trong danh sách cho phép do ISP cung cấp từ khắp nơi trên thế giới.",
        image: "./images/home/characteristic-tech.png",
    },
    {
        title: "Proxies thời gian thực",
        description: "Proxyv4 cung cấp các kết nối proxy thời gian thực và đảm bảo tỷ lệ thành công tốt nhất.",
        image: "./images/home/characteristic-photo.png",
    },
];

const Characteristic = () => {
    return (
        <div className="bg-blue-100 py-12">
            <div className="container mx-auto max-w-screen-xl text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-6">ĐẶC ĐIỂM CỦA PROXY PRIVATE IPV4</h2>
            </div>
            
            <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:border transition-shadow duration-300"
                        style={{}}
                    >
                        <img src={feature.image} alt={feature.title} className="w-full h-48 object-contain mb-4" />
                        <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characteristic