const redux = require("redux");

const initstate = {
  num: 10,
};

function rootReducer(state = initstate, action) {
  if (action.type == "INC_NUM") {
    return {
      ...state,
      num: state.num + 1,
    };
  }
  if (action.type == "ADD_NUM") {
    return {
      ...state,
      num: state.num + action.value,
    };
  }

  return state;
}

const store = redux.createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INC_NUM",
});

store.dispatch({
  type: "ADD_NUM",
  value: 100,
});
