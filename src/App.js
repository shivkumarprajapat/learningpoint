import React from 'react'
import About from './About';
import Header from './Header'
import TextForm from './TextForm';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="container my-5">
      <TextForm/>
      {/* <About/> */}
    </div>
    </React.Fragment>
  );
}
export default App;
