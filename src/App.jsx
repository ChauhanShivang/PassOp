import './App.css'
import NavBar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <div className='min-h-[85vh]'>
          <Manager />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
