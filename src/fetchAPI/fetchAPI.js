async function request({ url, method }) {
  const URL = `${process.env.REACT_APP_ROOT_API}/${url}`;
  const options = {
    method,
  };

  const response = await fetch(URL, options);

  return response.json();
}

const API = {
  getMessage: url => request({ url, method: 'GET' }),
};

export default API;
