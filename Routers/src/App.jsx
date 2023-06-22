import Header from './components/Header'
import Main from  './components/Main'
import './App.css'

function App() {


  return (
   
    <div className="app">
        <header className="appHeader">
          <Header />
        </header>

        <main className='appMain'>
          <Main />
        </main>

    </div>

  )
}

export default App
