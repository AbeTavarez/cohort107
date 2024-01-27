import {learnerData} from './data/learnerData';
import {useState} from 'react';

import './App.css';

function App() {
  // State
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="App">
      <h1>Learner App</h1>

     
    </div>
  );
}

export default App;
