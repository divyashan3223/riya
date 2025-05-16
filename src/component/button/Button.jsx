export const Button = () => {
  return <button>submit</button>;
};

const Heading = () => {
  return (
    <h1>
      <Button/>
      i'm a heading
      <Button />
    </h1>
  );
};

export default Heading;
