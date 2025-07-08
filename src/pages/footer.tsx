export default function FooterSection() {
  return (
    <div className="p-4 ">
      <div className="relative h-[120px]  bg-white shadow-2xl  text-white overflow-hidden rounded-3xl">
        <div className="absolute top-5 left-5">
          <div className="text-lg font-bold text-black">
            Top <span className="text-orange-400">Car</span>
          </div>
        </div>
        <div className="absolute bottom-5 left-5">
          <p className="asian-sans italic text-xs text-gray-500">
            copyright @ 2025
          </p>
        </div>
        <div className="absolute top-5 right-20 space-y-2">
          <p className="asian-sans text-xs text-gray-500 font-semibold">
            Categories
          </p>
          <ul className="text-xs asian-sans text-gray-500 ml-1  space-y-1">
            <li>MPV</li>
            <li>Sport</li>
            <li>Outdoor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
