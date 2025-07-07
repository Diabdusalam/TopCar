import { motion } from "framer-motion";

type FloatingCardProps = {
  className?: string;
  title: string;
  source: string;
};

const FloatingCard = ({ className, title, source }: FloatingCardProps) => {
  return (
    <motion.div
      className={`absolute bg-white p-4 rounded-xl shadow-xl w-[250px] ${className}`}
      animate={{
        y: [0, -10, 0], // naik turun
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
        <span>{source}</span>
      </p>
      <p className="text-sm font-semibold">{title}</p>
    </motion.div>
  );
};

export default FloatingCard;
