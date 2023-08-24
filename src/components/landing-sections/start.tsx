import { motion } from "framer-motion";

export default function Statistic() {

    return (
        <section>
            <div className="container">
                <motion.h1 variants={{hidden: { opacity: 0,y: 20},visible: {  y: 0, opacity: 1 }}}  initial="hidden" animate="visible" className="text-big">
                    Что мы представляем
                </motion.h1>
                </div>

                <div>
            </div>
        </section>
    )
}