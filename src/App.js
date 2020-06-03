import React from 'react';
import './App.css';

function Helloworld (){
  return (
    <div id="hello"> Hello World </div>
  );
}

// const App = () => <div>This is my component: <Helloworld/> </div>

class App extends React.Component {
  render(){
    return <div>This is my component  <Helloworld/> </div>
  }
}

// function App() {
//   return (
//     <div>Este es mi componente: <Helloworld/></div>
//   );
// }

export default App;
