const CACHE_NAME = "RDRIVE";

self.addEventListener('activate', (event) => {
  // Claim clients immediately to take control of all active clients.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll([
          '/favicon.ico',
          '/no-signal.png',
          '/404.png',
          '/no-img.png',
          '/icons/512.png',
          '/hold-on-baby.png',
          '/offline.html',
          '/Hello.json',
          '/Searh-Item.json',
          '/NoSearch.json',
          '/Loader.json',
          '/Upload.json',
          '/NotFound.json'
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  // For navigation requests (HTML pages), use the cache-first strategy.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // First, try to fetch from the network.
          const networkResponse = await fetch(request);

          // If successful, update the cache with the network response.
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());

          return networkResponse;
        } catch (error) {
          // If fetching from the network fails, try to respond with the cached version.
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match('/offline.html');

          return cachedResponse;
        }
      })()
    );
  } else {
    // For non-navigation requests (e.g., images, JSON data), use the cache-first strategy.
    event.respondWith(
      (async () => {
        // First, try to find the request in the cache.
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
          // If the request is found in the cache, return the cached response.
          return cachedResponse;
        }

        try {
          // If the request is not in the cache, fetch from the network.
          const networkResponse = await fetch(request);

          // Cache the fetched response for future use.
          cache.put(request, networkResponse.clone());

          return networkResponse;
        } catch (error) {
          // If fetching from the network fails, handle the error accordingly.
          console.log("Fetch failed; returning offline asset instead.", error);

          if (/\.png$/.test(request.url)) {
            return cache.match('/no-img.png');
          }

          // Return a fallback response for other types of assets.
          return new Response('', { status: 404, statusText: 'Not Found' });
        }
      })()
    );
  }
});
