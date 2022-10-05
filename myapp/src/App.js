import './App.css';
// function myName(){
//   return user.firstname+" "+user.lastname;
// }
// const user={
//   firstname:"RAMAR",
//   lastname:"KALANGIAM K",
//   degree:"B.tech",
//   college:"VIT,Vellore"
// }

const Student=(props)=>{
  return(
  <div className="App">
  <h1>Name :{props.firstname+" "+props.lastname}</h1>
  <h2>Degree :{props.degree}</h2>
  <h2>College :{props.college}</h2>
  </div>
)}
// class Student1 extends React.Component {
//   render() {return(
//     <h1>{this.props.name}</h1>;
//     <div className="App">
//   <h1>Name :{this.props.firstname+" "+this.props.lastname}</h1>
//   <h2>Degree :{this.props.degree}</h2>
//   <h2>College :{this.props.college}</h2>
//   </div>
//   }
// }
function App() {
  return (
    <>
    <div className="App">
    <Student firstname="Ramar" lastname="Kalangiam" degree="B.Tech" college="VIT,Vellore"/>  
    <Student firstname="Rajesh" lastname="Kannan" degree="B.Tech" college="VIT,Vellore"/>
    <Student firstname="Arun" lastname="Kumar" degree="B.Tech" college="VIT,Vellore"/>
    {/* <Student1 firstname="Arun" lastname="Kumar" degree="B.Tech" college="VIT,Vellore"/> */}
    </div></>
  );
}
export default App;