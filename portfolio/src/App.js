import Navigation from './components/navigation';
import Hero from './components/hero';
import Skills from './components/skills';
import './css/styles.css';
import MyWork from './components/mywork';
import Contact from './components/contact';
import Footer from './components/foooter';
import Testiomonials from './components/testimonials';
import Interested from './components/interested';
import About from './components/about';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
       <Skills></Skills>
      <MyWork></MyWork> 
      <Testiomonials></Testiomonials> 
      <Interested></Interested>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
