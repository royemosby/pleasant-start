import templateHero from './assets/images/pleasant-start.svg';
import './App.css';

function App() {
  return (
    <>
      <main>
        <img
          src={templateHero}
          className="logo"
          alt="Pleasant Start hero image"
        />
      </main>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
