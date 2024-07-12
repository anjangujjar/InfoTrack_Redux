export const login = (email, password) => {
  return (dispatch) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No user found! Please signup first.');
      return;
    }

    if (email !== storedUser.email || password !== storedUser.password) {
      alert('Invalid email or password!');
      return;
    }

    dispatch({ type: 'LOGIN_SUCCESS' });
  };
};

export const signup = (formData) => {
  return (dispatch) => {
    localStorage.setItem('user', JSON.stringify(formData));
    dispatch({ type: 'SIGNUP_SUCCESS' });
  };
};
