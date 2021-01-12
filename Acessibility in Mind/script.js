document.addeventlistener('domcontentloaded', () => {
  document.querySelector('#tracking').addEventListener('change', function(e) {
    // Save in database or in a local storage, etc..
    alert('Saved: ' + e.target.checked)
  })
})