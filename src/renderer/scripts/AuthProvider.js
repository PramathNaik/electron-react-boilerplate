
export const baseUrl = "http://localhost"

function authFetch(path, payload, method) {
  const token = localStorage.getItem('authToken') || "";

  // Set up headers with the token
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  // Fetch request
  return fetch(baseUrl + path, {
    method: method,
    headers: headers,
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Propagate the error to the caller
  });
}

export function login(username,password) {
  const payload = JSON.stringify({'username':username,"password":password})
  const headers = {
    'Content-Type': 'application/json'
  };

  // Fetch request
  return fetch(baseUrl + "/authprovider/login/", {
    method: "POST",
    headers: headers,
    body: payload
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    throw error; // Propagate the error to the caller
  });
}
