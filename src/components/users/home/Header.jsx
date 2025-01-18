import { FaFacebook, FaYoutube, FaCaretDown } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { menu } from "./menu";
import { useEffect, useState } from "react";
import { constants } from "../../../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Kiểm soát trạng thái menu chính (hamburger)
  const [openMenu, setOpenMenu] = useState(null); // Kiểm soát menu con nào đang được mở

  // useEffect để thêm hoặc xóa lớp "overflow-hidden" khỏi body khi modal mở/đóng
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden"); // Vô hiệu hóa cuộn cho trang
    } else {
      document.body.classList.remove("overflow-hidden"); // Khôi phục cuộn cho trang
    }

    // Cleanup để xóa lớp khi component bị unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = (id) => {
    if (openMenu === id) {
      setOpenMenu(null); // Nếu nhấn vào mục đã mở thì đóng lại
    } else {
      setOpenMenu(id); // Nếu nhấn vào mục khác thì mở mục đó
    }
  };

  console.log("thong tin", constants.URL_WEB_ADMIN);

  return (
    <>
      {/* Contact */}
      <div className="bg-purple-600 dark:bg-purple-900 text-white py-3">
        <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
          {/* Left Side: Zalo Icon and Text */}
          <div className="flex items-center">
            {/* Zalo Icon */}
            <img src="./images/zalo.png" alt="Zalo" className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">: VPSTTT Group</span>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-gray-300 dark:hover:text-gray-400"
            >
              {/* Facebook Icon */}
              <FaFacebook className="w-6 h-6" />
            </a>

            <a
              href="#"
              className="hover:text-gray-300 dark:hover:text-gray-400"
            >
              {/* YouTube Icon */}
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white dark:bg-purple-900 shadow-sm">
        <div className="container mx-auto max-w-screen-xl flex flex-wrap justify-between items-center py-2 gap-2">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-4 md:order-1 overflow-hidden w-[100px] cursor-pointer">
            <a href="#">
              <img
                src="./images/LogoBgCaro.png"
                alt="VPSTTT Logo"
                style={{ height: 80 }}
              />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden space-x-4 md:order-2 justify-between md:w-auto l-home-header-menu-flex-1">
            <button className="bg-purple-600 text-white hover:bg-purple-700 py-2 px-4 rounded-md w-max">
              ĐĂNG NHẬP
            </button>
            <button
              className="text-purple-600"
              onClick={() => {
                setIsMenuOpen(true);
                setOpenMenu(null);
              }}
            >
              <HiOutlineMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center w-full md:w-auto space-x-6 mt-4 md:mt-0 md:order-3 lg:order-2">
            {menu.map((item, index) => (
              <div
                key={item.id}
                className="relative group h-10 flex items-center justify-center hover:text-white hover:bg-purple-500 rounded-md px-3 cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  <i className="">{item.icon}</i>
                  <span className="font-bold">{item.option}</span>
                  <FaCaretDown className="w-3" />
                </span>
                {item.submenu && (
                  <>
                    {/* Vùng kết nối giữa parent và submenu */}
                    <div className="absolute left-0 right-0 top-full h-2"></div>

                    <div
                      className={`absolute top-full mt-1 w-max bg-white dark:bg-purple-900 rounded-md shadow-lg hidden group-hover:flex transition-all duration-300 z-10 
                                            ${
                                              index < 2
                                                ? "left-0"
                                                : index === 2
                                                ? "left-1/2 transform -translate-x-1/2"
                                                : "right-0"
                                            }`}
                    >
                      {item.submenu.map((submenuItem, subIndex) => (
                        <div key={subIndex} className="px-4 py-2">
                          <span className="block font-bold text-gray-700 dark:text-white mb-2">
                            {submenuItem.title}
                          </span>
                          {submenuItem.options.map((option, idx) => (
                            <a
                              key={idx}
                              href={constants.URL_WEB_ADMIN}
                              className="px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700 flex items-center gap-2"
                            >
                              {option.icon && <i className="">{option.icon}</i>}
                              <span>{option.content}</span>
                              {option.image && (
                                <img
                                  src={option.image}
                                  alt="image"
                                  className={`${option?.width} ${option?.height} ml-2`}
                                />
                              )}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Modal Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center md:hidden">
              {/* Menu Modal */}
              <div className="relative bg-white dark:bg-purple-900 p-6 w-full max-w-lg shadow-lg h-full overflow-y-auto pt-16">
                {/* Nút Đóng */}
                <button
                  className="absolute top-4 right-4 text-2xl text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>

                {/* Menu chính */}
                <nav className="space-y-4">
                  {menu.map((item) => (
                    <div key={item.id}>
                      <button
                        className={`w-full flex justify-between items-center font-bold py-2 px-4 ${
                          openMenu === item.id
                            ? "bg-purple-500 text-white"
                            : "bg-white dark:bg-purple-900 text-black"
                        }`}
                        onClick={() => toggleMenu(item.id)}
                      >
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <span>{item.option}</span>
                        </div>
                        <FaCaretDown
                          className={`transform ${
                            openMenu === item.id ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      {/* Hiển thị submenu khi click */}
                      {openMenu === item.id && (
                        <div className="pl-8 mt-2 space-y-2">
                          {item.submenu.map((submenuItem, subIndex) => (
                            <div key={subIndex} className="px-4 py-2">
                              <span className="block font-bold text-gray-700 dark:text-white mb-2">
                                {submenuItem.title}
                              </span>
                              {submenuItem.options.map((option, idx) => (
                                <a
                                  key={idx}
                                  href={constants.URL_WEB_ADMIN}
                                  className="px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-700 flex items-center gap-2"
                                >
                                  {option.icon && (
                                    <i className="">{option.icon}</i>
                                  )}
                                  <span>{option.content}</span>
                                  {option.image && (
                                    <img
                                      src={option.image}
                                      alt="image"
                                      className={`${option?.width} ${option?.height} ml-2`}
                                    />
                                  )}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Right Side: Buttons */}
          <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0 md:order-2 lg:order-3">
            <button className="border-none border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 py-2 px-4 rounded-md">
              <a href={constants.URL_WEB_ADMIN}>ĐĂNG KÝ</a>
            </button>
            <button className="bg-purple-600 text-white hover:bg-purple-700 py-2 px-4 rounded-md">
              <a href={constants.URL_WEB_ADMIN}>ĐĂNG NHẬP</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
