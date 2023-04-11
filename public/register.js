const register = document.querySelector('.register');

register.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.querySelector('.register>#username').value
  const password = document.querySelector('.register>#password').value
  const data = { username, password }

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.text();
  console.log(result);
});

