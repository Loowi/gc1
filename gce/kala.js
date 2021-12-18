const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

// Add a handler for the 'click' event by providing a callback function.
// When the element is clicked, the output "Element clicked through function!"
// will appear in the p tag with the id of "funcOut".
buttonElement.addEventListener('click', function (event) {
  funcOutput.textContent = 'Element clicked through function!';
});

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
// The output "Element clicked through handleEvent property!" will appear
// simultaneously in the p tag with the id of "handleEvtOutput".
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
    console.log('3123')
  }
});