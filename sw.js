const CACHE_NAME = 'unit-converter-v3';
const urlsToCache = [
  '/',
  '/faq',
  '/tips',
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
  // Skip cross-origin requests and non-GET requests
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Fetch from network
        return fetch(event.request).catch(error => {
          console.log('Fetch failed:', error);
          
          // Return a fallback response for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/').then(fallback => {
              return fallback || new Response('페이지를 찾을 수 없습니다.', {
                status: 404,
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
              });
            });
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