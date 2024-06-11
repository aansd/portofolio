
import './App.css';
import {NavBar} from './component/Navbar';
import {Banner} from './component/Banner';
import {Skill} from './component/Skill';
import { Project } from './component/Project';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skill/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;
