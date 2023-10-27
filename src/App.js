import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () =>{
    if(mode === 'dark'){ 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
    else{ 
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
