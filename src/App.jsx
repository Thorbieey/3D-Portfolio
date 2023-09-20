import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero className='h-48'/>
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            <Feedbacks/>
            <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
