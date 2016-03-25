import {SAVE_DEPUTADOS, SAVE_DEPUTADO, FILTER_COMISSAO_PARLAMENTAR, SHOW_TODOS_PARLAMENTARES, ORDER_PARLAMENTARES} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  data: [],
  selectedParlamentar: [],
  filteredParlamentar: [],
  filterComissao: true
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function fuelSavingsAppState(state = initialState, action) {
  switch (action.type) {
    case SAVE_DEPUTADOS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, { data: action.data });
    case SAVE_DEPUTADO:

      return objectAssign({}, state, { selectedParlamentar: action.data });
    case FILTER_COMISSAO_PARLAMENTAR:

      return objectAssign({}, state, { filteredParlamentar: action.data });
    case ORDER_PARLAMENTARES:
    {
      let badDeputados = action.data.filter((data) => {
        return (data['politico_impeachment'] === 'FAVOR' ? data : null);
      });
      let sosoDeputados = action.data.filter((data) => {
        return (data['politico_impeachment'] === 'INDECISO' ? data : null);
      });
      let goodDeputados = action.data.filter((data) => {
        return (data['politico_impeachment'] === 'CONTRA' ? data : null);
      });
      let data = [].concat(badDeputados, sosoDeputados, goodDeputados);
      return objectAssign({}, state, { data: data, filteredParlamentar: data });
    }
    case SHOW_TODOS_PARLAMENTARES:
    default:
      return state;
  }
}
