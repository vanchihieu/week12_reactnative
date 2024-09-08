function whereAmI(lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
     return data?.alt?.loc.map(item => {
          console.log(`Address: ${item.staddress}, City: ${item.city}, Postal Code: ${item.postal}`);
      })
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Example usage
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
