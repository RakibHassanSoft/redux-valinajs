//step 1
// definig action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const REST = 'REST';

//step 2: 
//creating action creators
function increment (){
    return {type:INCREMENT}
}
function decrement (){
    return {type:DECREMENT}
}
function reset (){
    return {type:REST}
}

// step 3: create the reducer
function counterReducer(state = {count : 0},action){
    switch(action.type){
        case INCREMENT:
            return {count:state.count +1};
        case DECREMENT:
            return {count:state.count -1};
        case REST:
            return {count:0};
        default:
            return state;
        
    }
}
// step 4: create the store 
function createStore (reducer){
    let state;
    let listners = [];

    function getState(){
          return state;
    }
    function dispatch(action){
         state = reducer(state,action);
         listners.forEach(listner => listner());
    }
    function subscribe(listner){
        listners.push(listner);
        return()=>{
            listners = listners.filter(lis => lis !==listner)
        }
    }

    dispatch({});

    return {getState,dispatch,subscribe};


}

const store = createStore(counterReducer);

// step 5 : update dom
function render (){
    const state = store.getState();
    document.getElementById('counter').textContent = state.count;
}
store.subscribe(render);
render()

//step 6 : add event listner
document.getElementById('increment').addEventListener('click',()=>{
store.dispatch(increment());
})
document.getElementById('decrement').addEventListener('click',()=>{
store.dispatch(decrement());
})
document.getElementById('reset').addEventListener('click',()=>{
store.dispatch(reset());
})