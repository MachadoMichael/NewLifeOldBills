import './App.css';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componentes/header/Header'
import Bills from './componentes/bills/Bills'
import Month from './componentes/months/Month';
import Homepage from './componentes/homepage/Homepage';
import About from './componentes/about/About';

import billsReducer from './reducers/billsReducer'
import salaryReducer from './reducers/salaryReducer';
import monthsReducer from './reducers/monthsReducer';
import dataMonthReducer from './reducers/dataMonthReducer';

const allReducers = combineReducers({
  bill: billsReducer,
  salary: salaryReducer,
  month: monthsReducer,
  data: dataMonthReducer
})
const store = createStore(allReducers)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header
          logo='NewLifeOldBills'
          menu={[
            'Contas',
            'Periodo',
            'Sobre'
          ]}
        ></Header>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/Contas' element={<Bills />}></Route>
          <Route path='/Periodo' element={<Month />}></Route>
          <Route path='/Sobre' element={<About />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
