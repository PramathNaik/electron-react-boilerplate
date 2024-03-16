
export const baseUrl = "http://localhost"

export async function authFetch(path, payload, method) {
  let accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');

  const options = {
    method: method,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json'
    },
    body: payload ? JSON.stringify(payload) : undefined
  };

  // Fetch request
  const response = await fetch(baseUrl + path, options);

  if (response.status === 401) {
    // If the response is 401 (Unauthorized), attempt to refresh the access token
    const refreshOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + refreshToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refresh: refreshToken }) // Sending refresh token in the body with key "refresh"
    };

    const refreshResponse = await fetch(baseUrl + '/authprovider/token/refresh/', refreshOptions);
    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      accessToken = data.access;
      localStorage.setItem('access', accessToken); // Update the access token in localStorage
      options.headers['Authorization'] = 'Bearer ' + accessToken; // Update headers with new access token
      // Retry original request with the new access token
      return fetch(baseUrl + path, options)
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
    } else {
      throw new Error('Failed to refresh access token');
    }
  } else if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
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
