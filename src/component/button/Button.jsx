// const Button = () => {
//   let count=0

//   let handleClick=()=>{
//     count+=1
//     console.log(count);
    
//   }
//   return(

//     <div>

//       <p>count:{count}</p>
//       <button onClick={handleClick}>increment +</button>
//     </div>
//   );
// };

// export default Button;







const Button = () => {

  const [count, setCount] = useState(10);

  let handleClick = () => {
    setCount(count + 1);
    setCount((count = count + 1));
    
    setCount((c) => c + 1);
  };
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleClick}>increment +</button>
    </div>
  );
};

export default Button;
