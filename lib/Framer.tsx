'use client'
import { motion } from 'framer-motion'

type Props = {
    children: React.ReactNode
}



export default function Framer({children}: Props) {
    const variant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.75
            }
        }
    }
  return (
    <motion.div variants={variant} initial="initial" animate="animate">
        {children}
    </motion.div>
  )
}
