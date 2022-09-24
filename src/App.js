import './App.css';
import Header from './Components/Header/Header';
import InfoCard from './Components/InfoCard/InfoCard';
import Menu from './Components/Menu/Menu'
import Slider from './Components/Slider/Slider'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Slider></Slider>
      <InfoCard></InfoCard>
    </div>
  );
}

export default App;
