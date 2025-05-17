self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Instalado');
});

self.addEventListener('fetch', function (event) {
  // Pode ser usado para cache futuro
});
