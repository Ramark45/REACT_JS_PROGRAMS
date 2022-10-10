import OddEvenNumber from "./OddEvenNumber";
const FindPalindrome=(number)=>{
    let reverse=0;let temp=number;
    let remainder;
    while(number!=0){
      remainder=number%10;
      number=parseInt(number/10);
      reverse=reverse*10+remainder;
      
    }
    if(temp==reverse)
    return temp+" is a Palindrome";
    else
    return temp+" is not a Palindrome";
  }

  function Palindrome() {
    const number1=2002;
    const number2=12345;
    return (
      <>
      <div className="App">
        {/* <h2><OddEvenNumber/></h2> */}
        <h2>{FindPalindrome(number1)}</h2>
      <h2>{FindPalindrome(number2)}</h2>
      </div></>
    );
  }
  
  export default Palindrome;
