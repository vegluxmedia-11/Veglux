const testApi = async () => {
  try {
    console.log('Sending POST to http://localhost:5000/api/auth/register');
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Api Test',
        email: 'api' + Date.now() + '@test.com',
        password: 'password123'
      })
    });
    const data = await res.json();
    console.log('API RESPONSE:', data);
  } catch (error) {
    console.log('NETWORK ERROR:', error.message);
  }
};

testApi();
