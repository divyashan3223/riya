// import { renderHook } from "@testing-library/react";
// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   console.log(ref);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert(`you clicked button  ${ref.current}  times`);
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
