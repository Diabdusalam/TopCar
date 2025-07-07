import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#daf1ff] to-[#ffffff] relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">
          pod <span className="text-blue-400">pod</span>
        </div>
        <div className="space-x-4">
          <button className="text-gray-700">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">A Podcast Made for You</h1>
        <p className="text-gray-600 mt-2">
          AI hosts chat through the things you don’t have time to read
        </p>

        {/* Phone Image Placeholder */}
        <div className="mt-12 relative flex justify-center">
          <div className="w-64 h-[400px] bg-blue-200  shadow-xl" />
        </div>
      </div>

      {/* Floating Cards */}
      <FloatingCard
        className="left-10 top-[40%]"
        title="An Analysis of DeepSeek’s R1-Zero and R1"
        source="Arc Prize"
      />
      <FloatingCard
        className="right-10 top-[30%]"
        title="Why is it so difficult to make a new antibiotic?"
        source="The Conversation"
      />
      <FloatingCard
        className="right-[30%] bottom-[10%]"
        title="In an AI-enabled world what is education for?"
        source="UN"
      />
    </div>
  );
}

type FloatingCardProps = {
  className?: string;
  title: string;
  source: string;
};

// Komponen untuk Bubble yang bergerak
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
      <p className="text-xs text-gray-500 mb-1">{source}</p>
      <p className="text-sm font-semibold">{title}</p>
    </motion.div>
  );
};
