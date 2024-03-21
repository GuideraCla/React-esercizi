export function UncontrolledLogin() {
    function onLogin(event) {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const username = formData.get('username');
      const password = formData.get('password');
      const remember = formData.get('remember');
  
      console.log({ username, password, remember });
    }
  
    return (
      <form onSubmit={onLogin}>
        <input data-testid="username" name="username" />
        <input data-testid="password" name="password" />
        <input data-testid="remember" name="remember" type="checkbox" />
  
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  }