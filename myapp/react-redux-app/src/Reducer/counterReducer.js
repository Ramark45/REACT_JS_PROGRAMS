var count = prompt("Please enter your initial count", "");
count=Number(count);
const counterReducer=(state=count,action)=>
{
    const incr=4;
    switch(action.type){
        case "INCREMENT":
            return state+incr;
        case "DECREMENT":
            return state-incr;
        default:
            return state;
    }
}
export default counterReducer;