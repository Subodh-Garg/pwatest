self.addEventListener('fetch', function(event){
if('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('sworker.js')
  .then(function() {
    console.log("Service Worker registered successfully");
  })
  .catch(function() {
    console.log("Service worker registration failed")
  });
}
});
