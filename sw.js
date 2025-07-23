// Service Worker - 캐시 기능 비활성화
// 모든 요청을 네트워크에서 직접 가져옴

// Install event - 캐시 설치 안함
self.addEventListener('install', event => {
  console.log('Service Worker 설치됨 - 캐시 없음');
  self.skipWaiting();
});

// Fetch event - 네트워크에서 직접 가져오기
self.addEventListener('fetch', event => {
  // Skip cross-origin requests and non-GET requests
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .catch(error => {
        console.log('Fetch failed:', error);
        return new Response('Network error', { status: 503 });
      })
  );
});

// Activate event - 기존 캐시 모두 삭제
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('All caches deleted');
      return self.clients.claim();
    })
  );
}); 