/*global self: true, caches: true, Response: true */
'use strict';

const expectedCaches = ['static-v1'];

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => {
                if (event.request.mode == 'navigate') {
                    return caches.match('/offline.html')
                }
            })
    )
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.addAll([
                '/scripts/main.js',
                '/css/screen.css',
                '/offline.html'
            ]))
    )
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
