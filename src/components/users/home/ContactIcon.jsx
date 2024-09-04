const ContactIcons = () => {
    return (
        <div className="fixed bottom-24 right-8 flex flex-col space-y-4 z-50">
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="./images/zalo.png" alt="Zalo" className="w-8 h-8" />
            </a>
            <a href="https://www.messenger.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/889/889101.png" alt="Messenger" className="w-8 h-8" />
            </a>
            <a href="tel:+123456789" className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="Phone" className="w-8 h-8" />
            </a>
        </div>
    );
};

export default ContactIcons;
