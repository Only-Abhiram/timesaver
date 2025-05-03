export default function Hero() {
    return <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
                    Save time using <span className="whitespace-nowrap">time<span className="text-[#5D5FEF]">SAVER</span> tools</span>

                </h1>

                <p className="text-gray-600 mb-4">No need to bookmark the tools you like separately.</p>

                <p className="text-gray-700 mb-8">
                    timeSAVER is a <span className="font-medium">"free all-in-one toolbox"</span> solution created to ease your
                    life by preventing bookmark mess.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-8">

                    <a href="#collections" className="ease-in-out">
                        <button  className=" cursor-pointer bg-yellow-400 shadow-lg shadow-yellow-500/50 text-white rounded-full px-6 py-3 font-medium flex items-center w-full sm:w-auto justify-center">
                            Explore Tools
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </a>

                </div>




            </div>

            <div  className="md:w-2/5 mt-10 md:mt-0">
                <div className="relative">
                    <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                        <div className="flex items-center mb-3">
                            <div className="flex space-x-1">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="bg-[#5D5FEF]/10 rounded-md p-4 mb-3">
                            <div className="h-4 w-8 bg-[#5D5FEF] rounded mb-3"></div>
                            <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                            <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                        <div id='collections' className="space-y-2">
                            <div className="h-3 w-full bg-gray-100 rounded"></div>
                            <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                            <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}