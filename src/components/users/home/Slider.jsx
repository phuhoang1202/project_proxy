const Slider = () => {
    return (
        <div className="relative w-full h-auto md:h-96 mx-auto overflow-hidden">
            
            {/* Slide Container */}
            <div className="flex transition-transform duration-1000">
                <div className="w-full flex-shrink-0">
                    <img
                        src="./images/home/proxy.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full flex-shrink-0">
                    <img
                        src="https://via.placeholder.com/800x400?text=Slide+2"
                        alt="Slide 2"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-purple-600 p-2  shadow-md hover:bg-purple-600 hover:text-white transition">
                ❮
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-purple-600 p-2  shadow-md hover:bg-purple-600 hover:text-white transition">
                ❯
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-600 hover:ring-2 hover:ring-purple-600 hover:cursor-pointer transition duration-300" />
                <div className="w-3 h-3 rounded-full bg-white hover:ring-2 hover:ring-purple-600 hover:cursor-pointer transition duration-300" />
                <div className="w-3 h-3 rounded-full bg-white hover:ring-2 hover:ring-purple-600 hover:cursor-pointer transition duration-300" />
            </div>
        </div>
    )
}

export default Slider