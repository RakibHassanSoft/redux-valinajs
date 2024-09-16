// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const resetAction = () => ({ type: RESET });

// Reducer
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
}

// Create the Redux store
const { createStore } = Redux;
console.log(Redux)
const store = createStore(counterReducer);

// Reference to the DOM element where the counter will be displayed
const counterElement = document.getElementById('counter');

// Function to update the DOM based on the current state
const render = () => {
    counterElement.innerText = store.getState().count;
};

// Subscribe to the store to automatically update the UI when the state changes
store.subscribe(render);

// Initial render
render();

// Event listeners for buttons
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment());
});
document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrement());
});
document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(resetAction());
});
