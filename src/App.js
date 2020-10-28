import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import TaskList from './components/taskList';
import { Provider } from 'react-redux';
import ReduxStore from '../src/redux/store';

function App() {
  return (
    // <Provider store={ReduxStore}>
    <TaskList />
    // </Provider>
  );
}

export default App;
