import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { QuestionFor } from './pages/QuestionFor/QuestionFor';
import { QuestionOne } from './pages/QuestionOne/QuestionOne';
import { Questionthree } from './pages/Questionthree/Questionthree';
import { QuestionTwo } from './pages/QuestionTwo/QuestionTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionOne' element={<QuestionOne />} />
        <Route path='/questionTwo' element={<QuestionTwo />} />
        <Route path='/questionThree' element={<Questionthree />} />
        <Route path='/questionFor' element={<QuestionFor />} />
      </Routes>
    </div>
  );
}

export default App;
