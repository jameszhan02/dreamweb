const defaultStore = {
    testValue = "Hello"
}



export default (state = defaultStore, action) => {
    console.log(action);
    //TODO: logic emit actions goes here
  
    return state;
}