export default function Navbar() {
  return (
    <div className="fixed top-0 z-10  w-full py-4 md:px-32">
      <div className="rounded-xl flex justify-between items-center px-8 py-4 backdrop-blur-lg ">
        <div className="text-2xl font-bold">
          Top <span className="text-orange-400">Car</span>
        </div>
        <div className="space-x-4">
          <button className="text-white font-medium">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
