import logo from './logo.svg';
import './App.css';
// import Eachcompo from './eachcomp';
import RecordList from './eachcomp';
import RecordHeader from './hfdr';

function App() {
  return (
    <div className="App">
      <RecordHeader />
      <RecordList />
    </div>
  );
}

export default App;
// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome