import Carousel from "./components/Carousel";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import MeetTheCouple from "./components/MeetTheCouple";


function App() {
  return (
    <div className="App">
      <Header />
      <Countdown />
      <MeetTheCouple />
      <Map />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
