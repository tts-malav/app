import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="App" about="Malav Shah"/>
    <div className="container">
    <TextForm heading ="Enter text below :" />
    </div>
    </>
  ); 
}
 
export default App;
