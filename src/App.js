import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import VideoPlayer from './components/Videoplayer/VideoPlayer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <div className="main-container">
          <Sidebar />           
     
          <Routes>
          <Route path='/video/:videoId' element={<VideoPlayer />}/>

            <Route path='/' element={<Home />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
