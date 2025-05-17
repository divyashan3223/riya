// import "./button.css"

// const Button = () => {
//   const handleClick=()=>{
//     alert("hello world")
//   }
//   return (
//     <div>
//       <h1>click the button show new sms</h1>
//       {/* <button onClick={()=>{handleClick()}}>click me</button> */}
//       <button onClick={handleClick}>click me</button>
//     </div>
//   );
// };

// export default Button;

const datas = [
  { title: "apple", isFruit: true, quantity: 10, id: 1 },
  { title: "mango", isFruit: true, quantity: 3, id: 2 },
  { title: "potato", isFruit: false, quantity: 10, id: 3 },
  { title: "apple", isFruit: false, quantity: 2, id: 4 },
];

const Button = () => {
  return (
    <div>
      <ul>
        {datas.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Button;
