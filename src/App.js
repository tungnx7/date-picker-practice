

import './App.css';
import DateInput from './components/Date/DateInput';
import Header from './components/Header/Header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className='date-container'>
        <DateInput />
      </div>
    </div>
  );
}

export default App;
