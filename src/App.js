import './App.css';
import Banner from './components/Banner';
import BanTitle from './components/BanTitle';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div >
      <div className='bg-white flex justify-around '>
        <div>
          <img src={require("../src/img/leaf.png")} className="max-h-10 max-w-10 absolute bg-gray-400" alt="" />
        </div>
        <div>
          <img src={require("../src/img/leaf1.png")} className="max-h-10 max-w-10 absolute bg-gray-400" alt="" />
        </div>
        <div>
          <img src={require("../src/img/leaf2.png")} className="max-h-10 max-w-10 absolute bg-gray-400" alt="" />
        </div>
        <div>
          <img src={require("../src/img/leaf3.png")} className="max-h-10 max-w-10 absolute bg-gray-400" alt="" />
        </div>
        <div>
          <img src={require("../src/img/leaf.png")} className="max-h-10 max-w-10 absolute bg-gray-400" alt="" />
        </div>

      </div>
      <Banner></Banner>
      <BanTitle></BanTitle>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
