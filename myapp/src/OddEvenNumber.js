const OddEven=(num)=>{
    if(num%2==0)
    return "Number "+num+" is even";
    else
    return "Number "+num+" is odd";
  
  }

  function OddEvenNumber() {
    const num1=100;
    const num2=10347;
    return (
      
      <>
      <div className="App">
        <h2>{OddEven(num1)}</h2>
      <h2>{OddEven(num2)}</h2>
      </div></>
    );
  }
  
  export default OddEvenNumber;
