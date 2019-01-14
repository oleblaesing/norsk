// version 10

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open('norsk').then(cache => cache.addAll([
    '/norsk/index.html',
    '/norsk/manifest.json',
    '/norsk/style.css',
    '/norsk/update.js',
    '/norsk/vocables.js',
    '/norsk/main.js',
  ])))
})

self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)))
})
