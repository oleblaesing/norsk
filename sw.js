// version 2

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('myonsenuipwa').then(cache => cache.addAll([
    '/norsk/index.html',
    '/norsk/manifest.json',
  ])))
})

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
})
