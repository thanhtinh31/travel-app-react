import '../App.css';
import PageContent from './PageContent';
import PageSide from './PageSide';
// import QLDanhMucTour from './QLDanhMucTour';
// import QLTaiKhoan from './QLTaiKhoan';
// import QLThue from './QLThue';
// import ThongKe from './ThongKe';
import { BrowserRouter } from 'react-router-dom';
// import Footer from './Footer';
// import Nav from './Nav';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <PageSide />
          <PageContent />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
