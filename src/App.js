import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="App" about="Malav Shah"/>
    <div className="container">
    <TextForm heading ="Enter text below :" />
    {/* <About/> */}
    </div>
    </>
  ); 
}
 
export default App;
