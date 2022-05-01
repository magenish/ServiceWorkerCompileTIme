var cacheName = "magenishCacheV1";
self.addEventListener('install', (event) => {
  async function buildCache() {
    const cache = await caches.open(cacheName);
    return cache.addAll([
      '/mySlowCompileScript.js',
    ]);
  }
  console.log('V1 insssstallssssing…');
  console.log('V1 insssstallsssssssssing…');
  event.waitUntil(buildCache());
});


self.addEventListener('fetch', (event) => {
  async function cachedFetch(event) {
    const cache = await caches.open(cacheName);
    let response = await cache.match(event.request);
    if (response) return response;
    response = await fetch(event.request);
    cache.put(event.request, response.clone());
    return response;
  }
  event.respondWith(cachedFetch(event));
});