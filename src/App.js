import './App.css';
import Banner from './components/Banner';
import BanTitle from './components/BanTitle';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='mb-96'>
      <Banner></Banner>
      <BanTitle></BanTitle>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
