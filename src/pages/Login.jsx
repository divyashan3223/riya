const Login = () => {
  return (
    <form action="">
      <table>
        <caption>Login form</caption>
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
        <td>
          <button>submit</button>
        </td>
      </table>
    </form>
  );
};

export default Login;
