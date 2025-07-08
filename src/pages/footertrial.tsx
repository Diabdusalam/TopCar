export default function FooterSection() {
  return (
    <div className="p-4">
      <div className="relative bg-gray-300 shadow-2xl text-white px-10 py-20 overflow-hidden rounded-3xl">
        <h1 className="absolute bottom-0 left-0 text-[300px] font-extrabold text-white opacity-3 leading-none select-none z-0">
          Top Car
        </h1>

        <div className="relative z-10 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">About Us</h2>
            <p className="text-sm text-black font-semibold">
              We are the biggest hyperstore in the universe.
              <br />
              We got you all cover with our exclusive collections and latest
              drops.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">
              Categories
            </h2>
            <ul className="text-sm text-black space-y-1 font-semibold">
              <li>SUV</li>
              <li>MPV</li>
              <li>Sport</li>
              <li>Outdoor</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">Company</h2>
            <ul className="text-sm text-black space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-orange-400 mb-2">
              Follow Us
            </h2>
            <div className="flex gap-3 text-white text-xl">
              <i className="fab fa-facebook" />
              <i className="fab fa-instagram" />
              <i className="fab fa-twitter" />
              <i className="fab fa-tiktok" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
