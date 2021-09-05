import React, { useState } from 'react'
// import About from './About';
import Header from './Header'
import TextForm from './TextForm';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <React.Fragment>
      {/* <Header/> */}
      <Header mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextForm />
        {/* <About/> */}
      </div>
    </React.Fragment>
  );
}
export default App;
