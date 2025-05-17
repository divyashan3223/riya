import Login from "./Login";
import Signup from "./Signup";

// !using ternary operator

// const Home = () => {
//   let isLogin = false;
//   return (
//     <div>
//       <h1>Home</h1>
//       {isLogin ? (
//         <div>
//           <h2>Welcome back</h2>
//           <Login />
//         </div>
//       ) : (
//         <div>
//           <h2>Please login</h2>
//           <Signup />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

// !using if else statement

// const Home = () => {
//   let isLogin = true;
//   let content;
//   if (isLogin) {
//     content = <Login />;
//   } else {
//     content = <Signup />;
//   }
//   return <div>{content}</div>;
// };

// export default Home;

// !&&
const Home = () => {
  let isLogin = true;
  return (
    <div>
      <h1>Home</h1>
      {isLogin && <Login />}
  
    </div>
  );
};
export  default Home;
