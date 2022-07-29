import TodosContainer from './Container/TodosContainer';
import Detail from './Components/Detail';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<TodosContainer />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
