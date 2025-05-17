let person = {
  name: "riya",
  age: 50,
  image:
    "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300",
};

const Heading = () => {
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    border: "10px solid black",
  };
  const main = {
    border: "5px dashed green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <div style={style}>
      <main style={main}>
        <h1>name:{person.name}</h1>
        <img
          src={person.image}
          alt=""
          style={{
            height: "person.age",
            width: "person.age",
            borderRadius: "100px",
          }}
        />
        <h2>age:{person.age}</h2>
      </main>
    </div>
  );
};

export default Heading;
