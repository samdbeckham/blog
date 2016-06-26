/*global self: true, caches: true */
'use strict';

const expectedCaches = ['static-v1'];

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if(url.pathname.endsWith('html') &&
        url.pathname.startsWith('/wrote')) {
        caches.open('static-v1')
            .then(cache => cache.add(url));
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('/offline.html');
                }
            })
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.addAll([
                '/scripts/vendor/modernizr.js',
                '/scripts/main.js',
                '/css/screen.css',
                '/wrote',
                '/offline.html'
            ]))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!expectedCaches.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
