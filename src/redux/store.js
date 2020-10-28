import { createStore } from 'redux';

const initState = {
  tasks: [],
  cancelledTasks: [],
};
function tasksReducer(state = initState, action) {
  switch (action.type) {
    case 'Add_task':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'cancelTask':
      return {
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
        cancelledTasks: [...state.cancelledTasks, action.payload],
      };
    case 'UpdateTask':
      return {
        tasks: state.tasks.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}

const ReduxStore = createStore(tasksReducer);
export default ReduxStore;
