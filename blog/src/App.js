import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SimpleMap from './CustomGoogleMap';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'


const images = [
  {
    original: "/02.jpg",
    thumbnail: "/02.jpg",
  },
  {
    original: "/03.jpg",
    thumbnail: "/03.jpg",
  },
  {
    original: "/05.jpg",
    thumbnail: "/05.jpg",
  },
  {
    original: "/06.jpg",
    thumbnail: "/06.jpg",
  },
  {
    original: "/w01.jpg",
    thumbnail: "/w01.jpg",
  },
  {
    original: "/w02.jpg",
    thumbnail: "/w02.jpg",
  },
  {
    original: "/w03.jpg",
    thumbnail: "/w03.jpg",
  },
  {
    original: "/w04.jpg",
    thumbnail: "/w04.jpg",
  },
  {
    original: "/w05.jpg",
    thumbnail: "/w05.jpg",
  },
  {
    original: "/01.jpg",
    thumbnail: "/01.jpg",
  },
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='some-space'></div>
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

      <Gallery>
        <Item
          original="/02.jpg"
          thumbnail="/02.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src="/02.jpg" />
          )}
        </Item>
        <Item
          original="/03.jpg"
          thumbnail="/03.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src="/03.jpg" />
          )}
        </Item>
      </Gallery>


        <SimpleMap
          lat={37.4683796}
          lng={127.0390439}
        />

    </div>
  );
}

export default App;
