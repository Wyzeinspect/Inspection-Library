
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('home-inspection-lib').then(function(cache) {
      return cache.addAll([
        'Home_Inspection_Library_PWA.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
