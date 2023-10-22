import Header from './components/reusable/parts/Header';
import SideNav from './components/reusable/parts/SideNav';
import Footer from 'components/reusable/parts/Footer';
import About from 'pages/about';
import User from 'pages/user';
import Banner from 'pages/banner'
import Portfolio from 'pages/portfolio';
import Services from 'pages/services'
import Contact from 'pages/contact';
import Login from 'pages/login';
import Register from 'pages/register';
import Dashboard from 'pages/dashboard';
import Page404 from 'pages/page404';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// import Footer from './parts/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <SideNav />
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/Register' element={<Register/>}/>
          <Route exact path='*' element={<Page404/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          {/* <Route path='/namapage' element={<page yang dituju/>}/> */}
      
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <User/> */}
    </>
  );
}

export default App;
