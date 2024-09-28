import { FlagIcon } from "react-flag-kit";
import { FaCloud, FaUser, FaGlobe, FaBook, FaShieldAlt } from 'react-icons/fa';


export const menu = [
    {
        id: 1,
        option: "Cloud VPS",
        icon: <FaCloud />,
        submenu: [
            {
                title: "Hosting",
                options: [
                    { icon: <FlagIcon code="VN" size={24} />, content: "Cloud VPS NVMe Việt Nam" },
                    { icon: <FlagIcon code="VN" size={24} />, content: "Cloud High Performance" },
                    { icon: <img src="https://cdn-icons-png.flaticon.com/128/6303/6303430.png" alt="" className="w-6" />, content: "GPU VPS" },
                    { icon: <img src="https://cdn-icons-png.flaticon.com/128/4319/4319147.png" alt="" className="w-6" />, content: "Cloud Storage" },
                    { image: "https://vpsttt.com/wp-content/uploads/2024/04/H1-4-300x215.jpg", width: "w-40", height: "h-40" }
                ]
            },
            {
                title: "Máy chủ Server",
                options: [
                    { icon: <FlagIcon code="US" size={24} />, content: "VPS USA" },
                    { icon: <FlagIcon code="DE" size={24} />, content: "VPS Đức" },
                    { icon: <FlagIcon code="GB" size={24} />, content: "VPS Anh - UK" },
                    { icon: <FlagIcon code="CA" size={24} />, content: "VPS Canada" },
                    { icon: <FlagIcon code="FR" size={24} />, content: "VPS Pháp" },
                    { icon: <FlagIcon code="TR" size={24} />, content: "VPS Thổ Nhĩ Kì" },
                    { icon: <FlagIcon code="BR" size={24} />, content: "VPS Brazil" },
                    { icon: <FlagIcon code="ES" size={24} />, content: "VPS Tây Ban Nha" },
                    { icon: <FlagIcon code="CL" size={24} />, content: "VPS Chile" },
                ]
            },
            {
                title: "Khác",
                options: [
                    { icon: <FlagIcon code="SG" size={24} />, content: "VPS Singapore" },
                    { icon: <FlagIcon code="HK" size={24} />, content: "VPS HongKong" },
                    { icon: <FlagIcon code="PH" size={24} />, content: "VPS Philippine" },
                    { icon: <FlagIcon code="AU" size={24} />, content: "VPS Australia" },
                    { icon: <FlagIcon code="TH" size={24} />, content: "VPS Thái Lan" },
                    { icon: <FlagIcon code="ID" size={24} />, content: "VPS Indonesia" },
                    { icon: <FlagIcon code="JP" size={24} />, content: "VPS Nhật Bản" },
                    { image: "https://vpsttt.com/wp-content/uploads/2024/04/T1-300x229.png", width: "w-40", height: "h-40" }
                ]
            },
        ],
    },
    {
        id: 2,
        option: "Đối Tác",
        icon: <FaUser />,
        submenu: [
            {
                title: "",
                options: [
                    { icon: <img src="https://cdn-icons-png.flaticon.com/128/4023/4023826.png" alt="" className="w-6" />, content: "Đại Lý VPSTTT" },
                ]
            },
            {
                title: "",
                options: [
                    { icon: <FlagIcon code="VN" size={24} />, content: "Reseller NVME" },
                    { icon: <FlagIcon code="VN" size={24} />, content: "Reseller High Performance" },
                ]
            },
            {
                title: "",
                options: [
                    { icon: <img src="https://cdn-icons-png.flaticon.com/128/4319/4319147.png" alt="" className="w-6" />, content: "Reseller Cloud Storage" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/cPanel-35x35.png" alt="" className="w-6" />, content: "Reseller cPanel Hosting" },
                ]
            },
        ],
    },
    {
        id: 3,
        option: "Dịch Vụ Khác",
        icon: <FaGlobe />,
        submenu: [
            {
                title: "Hosting",
                options: [
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/cPanel-35x35.png" alt="" className="w-6" />, content: "cPanel Hosting" },
                    { icon: <img src="https://cdn-icons-png.flaticon.com/128/4358/4358294.png" alt="" className="w-6" />, content: "Tên Miền" },
                ]
            },
            {
                title: "Máy chủ Server",         
                options: [
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/SERVER-RIENG-40x40.png" alt="" className="w-6" />, content: "Máy chủ riêng" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/Cua-hang-SERVER-40x40.png" alt="" className="w-6" />, content: "Cửa Hàng Server" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/USA-40x40.png" alt="" className="w-6" />, content: "Dedicated Servers USA" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/dat-server-40x40.png" alt="" className="w-6" />, content: "Chỗ đặt máy chủ" },
                ]
            },
            {
                title: "Khác",
                options: [
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/v4-40x40.png" alt="" className="w-6" />, content: "Proxy Private IPv4" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/v4-40x40.png" alt="" className="w-6" />, content: "Proxy Private IPv6" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/08/httpsvpsttt.comwp-contentuploads202408v6.png-3-40x40.png" alt="" className="w-6" />, content: "Proxy IPv6 Xoay" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/06/Thiet-ke-chua-co-ten-4.svg" alt="" className="w-6" />, content: "Thiết kế Website" },
                ]
            },
        ],
    },
    {
        id: 4,
        option: "Tin Tức",
        icon: <FaBook />,
        submenu: [
            {
                title: "",
                options: [
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/sael-40x40.png" alt="" className="w-6" />, content: "Khuyến mãi" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/TB-40x40.png" alt="" className="w-6" />, content: "Thông báo" },
                ]
            },
            {
                title: "",
                options: [
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/hd-40x40.png" alt="" className="w-6" />, content: "Hướng dẫn" },
                    { icon: <img src="https://vpsttt.com/wp-content/uploads/2024/04/kien-thuc-40x40.png" alt="" className="w-6" />, content: "Kiến thức" },
                ]
            },
        ],
    },
    {
        id: 5,
        option: "Firewall Anti-DDoS",
        icon: <FaShieldAlt />,
        submenu: [
            {
                title: "",
                options: [
                    { image: "https://vpsttt.com/wp-content/uploads/2024/04/CO-BAN.png", width: "w-40", height: "h-40" }
                ]
            },
            {
                title: "",
                options: [
                    { image: "https://vpsttt.com/wp-content/uploads/2024/04/Cao-cap.png", width: "w-40", height: "h-40" }
                ]
            },
        ],
    },
];
