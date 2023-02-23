// Api.js

function sendInputValueToApi(inputValue) {
  fetch('http://localhost:8080/api/input', {
    method: 'POST',
    body: JSON.stringify({ inputValue }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export default sendInputValueToApi;
