import React from 'react';
import Register from "./Register";

function App() {
  return (
    <div className="App" 
    style={{background: '#1E90FF',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
      }}>
      <Register />
    </div>
  );
}

export default App;

