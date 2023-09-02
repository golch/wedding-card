import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import GoogleMapReact from 'google-map-react';
import SimpleMap from './CustomGoogleMap';

const images = [
  {
    original: "/benches.jpg",
    thumbnail: "/benches.jpg",
  },
  {
    original: "/bridge.jpg",
    thumbnail: "/bridge.jpg",
  },
  {
    original: "/coast.jpg",
    thumbnail: "/coast.jpg",
  },
];

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          이다은과 이형주 결혼
        </p>
        <p>
          2023-11-04 17:00
          <br/>
          AT포레 웨딩홀
        </p>
      </header>

      <div className='image-gallery'>
        <ImageGallery items={images}/>
      </div>

        <SimpleMap
          lat={37.4683796}
          lng={127.0390439}
        />

    </div>
  );
}

export default App;
