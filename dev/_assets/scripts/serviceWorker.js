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
            console.log('requesting HTML');
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
                        console.log('I think we\'re offline');
                        return caches.match(request)
                            .then(function(response) {
                                // return the response
                                // or the offline page
                                return response || caches.match('/offline.html');
                            })
                    })
            )
        }

        if (request.headers.get('Accept').indexOf('img') !== -1) {
            // Deal with images
        }
    });
})();
