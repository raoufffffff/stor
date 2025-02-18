import { motion } from "motion/react";
import { IoCloseSharp } from "react-icons/io5";

const Promo = ({ hide }) => {
    return (
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="fixed z-50 flex justify-center items-center w-full h-screen left-0 top-0 bg-black/60 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className="bg-white relative flex flex-col w-10/12 md:w-6/12  overflow-y-auto rounded-xl shadow-lg  py-3 px-5">
                {/* Close Button */}
                <IoCloseSharp
                    onClick={hide}
                    size={30}
                    className="absolute top-1 right-4 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors"
                />
                <p>Appliquer un code promo</p>
                <input
                    type="text"
                    className='w-full md:w-8/12 px-5 py-1  my-3 border border-[#0007] rounded-xl shadow-sm focus:ring-2 focus:ring-[#dd2a5b] focus:outline-none  text-gray-700'
                />
                <div
                    className="w-full flex justify-end"
                >
                    <button
                        onClick={hide}
                        className="mx-1 bg-[#3338] text-white uppercase text-xs p-2 rounded-xl"
                    >fermer</button>
                    <button
                        className="mx-1 bg-[#dd2a5b] text-white uppercase text-xs p-2 rounded-xl"
                    >appliquer</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Promo