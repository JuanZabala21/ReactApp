import React from 'react';
import './App.css';


// function Helloworld (props){
//   console.log(props)
//   return (
//     <div id="hello"> 
//     <h3>{props.subtitle}</h3>
//     {props.mytest} 
//     </div>
//   );
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

toggleShow = () => {
this.setState({show: !this.state.show})
}

  render(){
    if(this.state.show){
    return(
      <div id="hello"> 
      <h3>{this.props.subtitle}</h3>
      {this.props.mytest} 
      <button onClick={this.toggleShow}>Toggle Show</button>
      </div>
    )   
   }else{
    return <h1> There are not elements 
      <button onClick={this.toggleShow}>Toggle Show</button>
    </h1>
   }
  }
 }

// const App = () => <div>This is my component: <Helloworld/> </div>

class App extends React.Component {
  render(){
    return <div>
      This is my component 
       <Helloworld mytest="hello fast" subtitle="Lorem ipsum"/>
       <Helloworld mytest="Hola Mundo" subtitle="Componente 2"/>  
       <Helloworld mytest="Epale" subtitle="Practicando"/> 
       </div>
  }
}

// function App() {
//   return (
//     <div>Este es mi componente: <Helloworld/></div>
//   );
// }

export default App;
