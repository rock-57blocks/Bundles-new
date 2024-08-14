(function () {
  setTimeout(function () {
    window.parent.location = 'https://www.google.com';
  }, 1000);

  setTimeout(function () {
    window.parent.window.open('https://www.google.com');
  }, 5000);
})();