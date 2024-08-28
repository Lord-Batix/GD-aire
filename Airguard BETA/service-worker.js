// service-worker.js

// Cachear los archivos al instalar el Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/bienvenida.html',
                '/informacion.html',
                '/principal.html',
                '/registros.html',
                '/estilo1.css',
                '/estilo3.css',
                '/estilo2.css',
                '/estilo3.css',
                '/estilo4-2.css',
                '/estilobien.css',
    
                '/script.js',
                '/efectos.js',
                '/firebaseConect.js',

                '/images/icono.png',
            ]);
        })
    );
});

// Interceptar las solicitudes de red y devolver las versiones en caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
