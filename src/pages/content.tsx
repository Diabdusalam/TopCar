import drive from "../assets/picture/drive.png";
import airbag from "../assets/picture/airbag.jpg";

export default function Content() {
  return (
    <div className="p-12">
      <div className="relative flex justify-center items-center flex-col gap-8 ">
        <div className="flex max-md:flex-col  gap-4">
          <div className="max-w-xl  bg-white  rounded-2xl overflow-hidden shadow-lg flex">
            <img
              src={drive}
              className="w-1/2 h-full object cover rounded-l-lg"
            ></img>

            <div className="w-1/2 p-6 flex items-center justify-center text-center bg-white">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug hover:text-indigo-600 transition-colors duration-300">
                Ready to Stand Out, Starting from the Driver’s Seat
              </h2>
            </div>
          </div>
          <div className="max-w-xl  bg-white  rounded-2xl overflow-hidden shadow-lg flex">
            <img
              src={airbag}
              className="w-1/2 h-full object cover rounded-l-lg"
            ></img>

            <div className="w-1/2 p-6 flex items-center justify-center text-center bg-white">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug hover:text-indigo-600 transition-colors duration-300">
                Invisible Innovation, Real Protection
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl  bg-white shadow-xl rounded-lg">
          <img
            src={airbag}
            className="w-full h-full object-cover rounded-lg"
          ></img>
        </div>
        <div className="flex max-md:flex-col  gap-4">
          <div className="max-w-xl  bg-white  rounded-2xl overflow-hidden shadow-lg flex">
            <img
              src={drive}
              className="w-1/2 h-full object cover rounded-l-lg"
            ></img>

            <div className="w-1/2 p-6 flex items-center justify-center text-center bg-white">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug hover:text-indigo-600 transition-colors duration-300">
                Ready to Stand Out, Starting from the Driver’s Seat
              </h2>
            </div>
          </div>
          <div className="max-w-xl  bg-white  rounded-2xl overflow-hidden shadow-lg flex">
            <img
              src={airbag}
              className="w-1/2 h-full object cover rounded-l-lg"
            ></img>

            <div className="w-1/2 p-6 flex items-center justify-center text-center bg-white">
              <h2 className="text-lg font-semibold text-gray-800 leading-snug hover:text-indigo-600 transition-colors duration-300">
                Invisible Innovation, Real Protection
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
