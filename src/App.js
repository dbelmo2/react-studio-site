import './App.css';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Cinema from './components/pages/CinemaPage/Cinema';
import About from './components/pages/AboutPage/About';
import Contact from './components/pages/ContactPage/Contact';
import Photography from './components/pages/PhotographyPage/Photography';
import KrezzyyFest from './components/pages/FestivalPage/KrezzyyFest';
import Videography from './components/pages/VideographyPage/Videography';
import Sfxvfx from './components/pages/SfxvfxPage/Sfxvfx'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Cinema' component={Cinema}/>
        <Route path='/About' component={About}/>
        <Route path='/Photography' component={Photography}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/KrezzyyFest' component={KrezzyyFest}/>
        <Route path='/Videography' component={Videography}/>
        <Route path='/Sfxvfx' component={Sfxvfx}/>
      </Switch>
    </Router>

  );
}

export default App;
