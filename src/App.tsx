import Content from "./pages/content";
import FooterSection from "./pages/footer";
import Jumbotron from "./pages/jumbotron";
import Navbar from "./pages/navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bg-gradient-to-b from-[#daf1ff] to-[#ffffff] ">
        {" "}
        <Jumbotron />
        <Content />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
