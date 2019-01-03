const refreshButton = document.getElementById('update')
refreshButton.addEventListener('click', () => location.reload())
const displayRefreshButton = () => {
  refreshButton.hidden = false
}

if('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('sw.js')
    .then((registration) => {
      if(registration.active) {
        registration.addEventListener('updatefound', () => {
          registration.installing.addEventListener('statechange', () => {
            if(registration.active.state === 'activated') {
              displayRefreshButton()
            }
          })
        })
      }
    })
}
