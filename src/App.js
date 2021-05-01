// import logo from './logo.svg';
// import './App.css';

import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";

function App() {

  function getPage() {
    const route = window.location.pathname;

  if (route === "/about") return <AboutPage/>
  return <HomePage/>
  }
  return(
    <div className="container-fluid">
      <Header/>
      {getPage()}
    </div>
  )
}

export default App;
