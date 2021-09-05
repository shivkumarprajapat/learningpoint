import React from 'react'
import Header from './Header'
import TextForm from './TextForm';
function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="container my-5">
      <TextForm/>
    </div>
    </React.Fragment>
  );
}
export default App;
