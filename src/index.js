import {createStore} from 'redux';


const reducer = (state = 0, action) => {
    switch (action.type){
      case 'INC': 
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RES':
        return state = 0;
      default:
        return state;
    }
   
}

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const res = (value) => ({type: 'RES', value});



document.getElementById('inc').addEventListener('click', (e) => {
    store.dispatch(inc())
});

document.getElementById('dec').addEventListener('click', (e) => {
  store.dispatch(dec())
});

document.getElementById('res').addEventListener('click', (e) => {
  const value = 0;
  store.dispatch(res(value));
});


const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
   