'use-strict';

(function() {
    var staticCacheName = 'static',
        version = 'v1::';

    function updateStaticCache() {
        return caches.open(version + staticCacheName)
            .then(function(cache) {
                return cache.addAll([
                    '/scripts/main.js',
                    '/css/screen.css',
                    '/offline.html'
                ]);
            })
    }

    self.addEventListener('install', function(event) {
        event.waitUntil(updateStaticCache());
    });

    self.addEventListener('activate', function(event) {
        event.waitUntil(
            caches.keys()
                .then(function(keys) {
                    return Promise.all(keys
                        .filter(function(key) {
                            return key.indexOf(version) !== 0;
                        })
                        .map(function(key) {
                            return caches.delete(key);
                        })
                    );
                })
        );
    });

    self.addEventListener('fetch', function(event) {
        var request = event.request;

        if (request.method !== 'GET') {
            event.respondWith(
                fetch(request, {credentials: 'include'})
                    .catch(function() {
                        // Return an offline page on error
                        // This still needs creating
                        return caches.match('/offline.html');
                    })
            );
            return;
        }

        if (request.headers.get('Accept').indexOf('text/html') !== -1) {
            event.respondWith(
                fetch(request, {credentials: 'include'})
                    .then(function(response) {
                        var copy = response.clone();

                        caches.open(version + staticCacheName)
                            .then(function(cache) {
                                cache.put(request, copy); 
                            });

                        return response;
                    })
                    .catch(function() {
                        // If we can't get it
                        // look for it in the cache
                        return caches.match(request)
                            .then(function(response) {
                                // return the response
                                // or the offline page
                                return response || caches.match('/offline.html');
                            })
                    })
            )
            return;
        }

        event.respondWith(
            caches.match(request)
                .then(function(response) {
                    return response || fetch(request)
                        .catch(function() {
                            if(request.headers.get('Accept').indexOf('image') !== -1) {
                                return new Response('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><path fill="#EEE" d="M0 0h400v300H0z"/><g fill="#FFF"><circle cx="200" cy="198.9" r="15.1"/><path d="M263.9 96.3l-10.7-10.7-53.5 53.5-53.5-53.5-10.7 10.7 53.5 53.5-53.5 53.5 10.7 10.7 53.5-53.5 53.5 53.5 10.7-10.7-53.5-53.5"/><path d="M200 108.1c7.9 0 15.5 1 22.8 2.9l12.1-12.1C224 95.1 212.2 93 200 93c-12.4 0-24.3 2.1-35.3 6.1l12.1 12.1c7.4-2 15.1-3.1 23.2-3.1zm56.2 1l-11 11c10.9 6.3 20.5 14.8 27.9 24.9l12.2-8.9c-7.9-10.7-17.8-19.9-29.1-27zm-101.7 11.2l-11-11c-11.2 7.1-20.9 16.2-28.7 26.8L127 145c7.3-10 16.7-18.4 27.5-24.7zm35.1 3.7l10.1 10.1 10.2-10.2c-3.2-.4-6.5-.7-9.9-.7-3.6 0-7 .3-10.4.8zm59 38.8l12.2-8.9c-7-9.5-16.2-17.3-26.9-22.6l-11.4 11.4c10.5 4.2 19.5 11.2 26.1 20.1zm-97.2 0c6.5-8.8 15.4-15.7 25.6-19.9l-11.4-11.4c-10.5 5.3-19.5 13-26.5 22.4l12.3 8.9zm51.5 6l-3.2-3.2-3.3 3.3c1.2-.1 2.3-.2 3.5-.2 1.1-.1 2 0 3 .1z"/></g></svg>', { headers: { 'Content-Type': 'image/svg+xml' }});

                                return new Response('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 660"><path d="M201 247C175 247 154 226 154 200 154 187 159.3 175.3 167.8 166.8 176.3 158.3 188 153 201 153 227 153 248 174 248 200 248 210.6 244.5 220.3 238.6 228.2 291.7 237.3 338.2 265.5 371 305.4L371 305.4C390 274.8 401 238.7 401 200 401 89.5 311.5 0 201 0 90.5 0 1 89.5 1 200 1 219.3 3.7 238 8.9 255.7L8.9 255.7C32.9 338.8 109.3 399.6 200 400 226 400 247 421 247 447 247 460 241.7 471.7 233.2 480.2 224.7 488.7 213 494 200 494 174 494 153 473 153 447 153 436.4 156.5 426.7 162.4 418.8 109.3 409.7 62.8 381.5 30 341.6L30 341.6C11 372.2 0 408.3 0 447 0 557.5 89.5 647 200 647 310.5 647 400 557.5 400 447 400 427.7 397.3 409 392.1 391.3L392.1 391.3C368.1 308.2 291.7 247.4 201 247L201 247Z" /></svg>', { headers: { 'Content Type': 'image/svg+xml' }});
                            }
                        });
                })
        );
    });
})();
