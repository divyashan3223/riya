

const Signup = () => {
  return (
    <form action="">
      <table>
        <caption>Signup form</caption>
        <tr>
          <td>
            <label htmlFor="">name:</label>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="">email:</label>
            <input type="email" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="">password:</label>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <button>submit</button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Signup;
