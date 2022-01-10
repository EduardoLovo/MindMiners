import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { QuestionOne } from './pages/QuestionOne/QuestionOne';
import { QuestionTwo } from './pages/QuestionTwo/QuestionTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionOne' element={<QuestionOne />} />
        <Route path='/questionTwo' element={<QuestionTwo />} />
      </Routes>
    </div>
  );
}

export default App;
