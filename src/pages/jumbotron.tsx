import car from "../assets/picture/offrod.png";
import FloatingCard from "../components/floatingcard";
export default function Jumbotron() {
  return (
    <div className="p-4 ">
      {" "}
      <div className="rounded-3xl min-h-screen  w-full bg-cover bg-[url('/wasteland.jpg')] relative overflow-hidden lazy">
        <div className="text-center mt-20 ">
          <h1 className="ar-one-sans text-4xl font-bold text-white">
            A Mobile Made for You
          </h1>
          <p className="abeezee-regular text-[#e8e7e6] font-semibold mt-2">
            Survival starts with the right machine
          </p>
          <div className="mt-32 relative flex justify-center ">
            <img src={car} alt="phone" className="w-[400px]" />
          </div>
        </div>
        <FloatingCard
          className="left-40 top-[40%]"
          title="Ability to Complete Challenges"
          source="Desing"
        />
        <FloatingCard
          className="right-60 top-[30%]"
          title="Embrace The Thrill To Carve Your Legendary Path"
          source="Fitur"
        />
        <FloatingCard
          className="right-[30%] bottom-[10%]"
          title="Upgrades That Will Make You Stand Out"
          source="Accesories"
        />
      </div>
    </div>
  );
}
