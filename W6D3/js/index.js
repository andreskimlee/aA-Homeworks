console.log("Hello from the JavaScript console!");
$.ajax({
    type: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather' +
        '?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b',
    success(data) {
      console.log("We have your weather!")
      console.log(data);
    },
    error() {
      console.error("An error occurred.");
    },
  });
  
  console.log("THE AJAX has been dispatched.")
  


// Your AJAX request here

// Add another console log here, outside your AJAX request
