import drive from "../assets/picture/drive.png";
import airbag from "../assets/picture/airbag.jpg";
import car from "../assets/picture/offrod.png";
import car2 from "../assets/picture/offrod1.png";
import travelling from "../assets/picture/travelling.jpg";
export default function Content() {
  return (
    <div className="p-12">
      <div className="relative flex justify-center items-center flex-col gap-10 ">
        <h1 className="ar-one-sans text-4xl font-bold text-[#001151] text-center">
          FEATURE
        </h1>
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
        <h1 className="ar-one-sans text-4xl font-bold text-[#001151] text-center">
          WHEREVER THE ROAD TAKES YOU <br /> WE'RE READY
        </h1>
        <div className="w-full max-w-6xl  bg-white shadow-xl rounded-3xl overflow-hidden">
          <img
            src={travelling}
            className="w-full h-full object-cover rounded-lg"
          ></img>
        </div>
        <h1 className="ar-one-sans text-4xl font-bold text-[#001151] text-center">
          SEE WHICH CAR IS PERFECTLY <br />
          RIGHT FOR YOU
        </h1>
        <div className="flex max-md:flex-col  gap-4">
          <div className="max-w-xl  overflow-hidden  flex">
            <img
              src={car}
              className="w-1/2 h-full object cover rounded-l-lg hover:scale-105 transition-transform duration-300"
            ></img>

            <div className="w-1/2 p-6   flex flex-col gap-2 ">
              <h2 className="text-lg ar-one-sans font-semibold text-[#001151] leading-snug">
                BOX JUNGLE GREEN
              </h2>
              <h2 className="text-lg ar-one-sans font-medium text-[#001151] leading-snug hover:text-blue-700 transition-colors duration-300">
                $ 34.990
              </h2>
            </div>
          </div>
          <div className="max-w-xl  overflow-hidden flex ">
            <img
              src={car2}
              className="w-1/2 h-full object cover rounded-l-lg hover:scale-105 transition-transform duration-300"
            ></img>

            <div className="w-1/2 p-6   flex flex-col gap-2 ">
              <h2 className="text-lg ar-one-sans font-semibold text-[#001151] leading-snug">
                JUNGLE GREEN
              </h2>
              <h2 className="text-lg ar-one-sans font-medium text-[#001151] leading-snug hover:text-blue-700 transition-colors duration-300">
                $ 36.550
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
