function whereAmI(lat, lng) {
    // Build the API URL with provided coordinates
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  
    // Fetch data using the Fetch API and promises
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
      })
      .catch(err => {
        console.error('Error:', err.message);
  
        // Check for rate limit error and handle it gracefully
        if (err.message.includes('403')) {
          console.error('Exceeded API rate limit. Please wait a second and try again.');
        }
      });
  }
  
  // Example usage (replace with your actual coordinates)
  whereAmI(52.508, 13.381); // Example coordinates for Berlin, Germany