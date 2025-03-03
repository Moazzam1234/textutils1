// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextUtils from './components/TextUtils';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [tttt, settttt] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showcolor1 = () =>{
    document.body.style.backgroundColor = 'bisque'
  }
  const showcolor2 = () =>{
    document.body.style.backgroundColor = 'aquamarine'
  }
  const showcolor3 = () =>{
    document.body.style.backgroundColor = 'violet'
  }

  const showAlert =(message,type) =>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const ssmode = () => {
    if (mode === "light") {
      setMode("dark");
      settttt("Light Mode")
      showAlert("Dark Mode Activated","success")
      document.body.style.backgroundColor = "rgba(16, 53, 107, 0.91)"
      document.title="Dark Mode"
    } else {
      setMode("light");
      settttt("Dark Mode")
      showAlert("Light Mode Activated","success")
      document.body.style.backgroundColor = "rgba(32, 87, 170, 0.45)"
      document.title="Light Mode"
      setInterval(() => {
        document.title="Light Mode is active"
      }, 2000);
      setInterval(() => {
        document.title="Light Mode is fantastic"
      }, 1500);
    }
  }


  return (
    <>

      <Navbar mode = {mode} ssmode = {ssmode} tttt={tttt}  showcolor1 ={showcolor1} showcolor2 ={showcolor2} showcolor3 ={showcolor3}/>
      <Alert alert = {alert} />
      <TextUtils mode={mode} />
    </>
  );
}

export default App;
