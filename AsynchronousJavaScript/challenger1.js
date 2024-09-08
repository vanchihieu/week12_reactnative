function getComments(id) {
  // Build the API URL with provided coordinates
  //   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;

  // Fetch data using the Fetch API and promises
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //    return data.map((item) => {
      //         console.log(`You are in ${item?.name}, ${item?.email}`);
      //     });

      console.log(`You name is ${data?.name} and email: ${data?.email}`);
    })
    .catch((err) => {
      console.error("Error:", err.message);

      // Check for rate limit error and handle it gracefully
      if (err.message.includes("403")) {
        console.error(
          "Exceeded API rate limit. Please wait a second and try again."
        );
      }
    });
}

// Call the function
getComments(3); //
