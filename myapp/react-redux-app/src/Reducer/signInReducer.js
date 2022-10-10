const signInReducer=(state="Hi",action)=>

{
    switch(action.type){
        case 'LOG_IN':
            return state="Hello";
            default:
            return state;
    }
}

export default signInReducer;