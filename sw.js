const CACHE_NAME = 'unit-converter-v2';
const urlsToCache = [
  '/',
  '/faq.html',
  '/tips.html',
  '/css/style.css',
  '/css/responsive.css',
  '/js/data.js',
  '/js/converter.js',
  '/js/app.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // For network requests, handle redirects properly
        return fetch(event.request, {
          redirect: 'follow'
        }).catch(error => {
          console.log('Fetch failed:', error);
          // Return a fallback response for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          return new Response('Network error', { status: 503 });
        });
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 