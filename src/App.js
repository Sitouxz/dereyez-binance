import './App.css';
import Cta from './components/Cta';
import Code from './components/Code';
import 'flowbite';
import 'flowbite-react';
import bg from './assets/img/boxbg.svg';
import eth from './assets/img/eth.png';

function App() {
  return (
    <div className="container mx-auto px-4">
      <img
        src={bg}
        alt=""
        width="1300"
        className="absolute right-0 bottom-0 -z-50"
      />
      <img
        src={eth}
        alt=""
        className="absolute left-0 bottom-0 -z-10 hidden xl:block"
      />
      <div className="my-auto flex flex-col xl:flex-row items-center xl:items-start justify-between mt-10 xl:mt-40">
        <Cta />
        <Code />
      </div>
    </div>
  );
}

export default App;
