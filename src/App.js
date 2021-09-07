import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './About';
import Header from './components/Header'
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has benn Endal", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has benn Endal", "primary")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    showAlert(null)
  }, 2000);
  return (
    <React.Fragment>
      {/* <Header/> */}
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </React.Fragment>
  );
}
export default App;
