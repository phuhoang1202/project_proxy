import { FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white pt-10">
            <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Information */}
                <div>
                    <img style={{height: 64}} src="./images/logo-full.jpg" alt="VPSTTT Logo" className="mb-4" />
                    <p className="font-bold text-[#7743c9]">Công ty TNHH Công Nghệ VPSTTT</p>
                    <p><span className="font-bold">GPKD:</span> 4401093337</p>
                    <p><span className="font-bold">Cấp ngày:</span> 27/10/2021</p>
                    <p><span className="font-bold">Địa chỉ:</span> Số 15 Đường B3, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa</p>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="font-bold mb-4 text-[#7743c9] pl-2 border-l-[3px] border-[#7743c9]">Liên Hệ</h3>

                    <p className="flex items-center mb-2">
                        <img src="./images/home/logo-email.png" alt="Email" className="w-6 h-6 mr-2 rounded-full" />
                        <span>lienhe@vpsttt.com</span>
                    </p>
                    <p className="flex items-center mb-2">
                        <img src="./images/home/logo-phone.png" alt="Zalo" className="w-6 h-6 mr-2 rounded-full" />
                        <span>Zalo OA VPSTTT Group</span>
                    </p>
                    <p className="flex items-center mb-2">
                        <img src="./images/zalo.png" alt="Phone" className="w-6 h-6 mr-2 rounded-full" />
                        <span>0328 812 674</span>
                    </p>

                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://www.facebook.com"
                            className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <FaFacebook className='w-4 h-4 text-white' />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            className="bg-[#c23030] w-8 h-8 flex items-center justify-center rounded-full overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <FaYoutube className='w-4 h-4 text-white' />
                        </a>
                    </div>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="font-bold mb-4 pl-2 text-[#7743c9] border-l-[3px] border-[#7743c9]">Chính Sách & Điều Khoản</h3>
                    <ul>
                        <li className="py-1 border-y border-[#e9e9e9]">
                            <a href="#" className="text-purple-600">Điều khoản sử dụng dịch vụ</a>
                        </li>
                        <li className="py-1 border-b border-[#e9e9e9]">
                            <a href="#" className="text-purple-600">Chính sách thanh toán</a>
                        </li>
                        <li className="py-1 border-b border-[#e9e9e9]">
                            <a href="#" className="text-purple-600">Chính sách bảo mật thông tin khách hàng</a>
                        </li>
                        <li className="py-1 border-b border-[#e9e9e9]">
                            <a href="#" className="text-purple-600">Cloud Server High Performance</a>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-center md:justify-end overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6549296067287!2d105.78526531532328!3d21.046917392550417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb8e8b19b47%3A0x843f678f78d674af!2zMTUgxJAuIELDoCBQaeG7h3QgQjMsIFRoYW5oIFbEg24sIE7hurVuZyDEkOG7i2NoIMSQw7RuZyBUaGFuaCwgQ2jDrSBOaOG6r2kgTmjDoCBUaMSQIEjDoCwgVGjGsOG7nW5nIFZpZXRuYW0!5e0!3m2!1svi!2s!4v1667304098382!5m2!1svi!2s"
                        width="400"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                        className="w-full h-64 md:w-auto md:h-auto"
                    ></iframe>
                </div>
            </div>

            <div className=" mx-auto text-center bg-[#c4a5e1] mt-8 py-4">
                <p className="text-black text-sm">Copyright 2024 - VPSTTT</p>
            </div>
        </footer>
    )
}

export default Footer