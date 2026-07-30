self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(data.title || 'ARCAHfit', {
      body: data.body || '',
      icon: '/icon-192.png',
      badge: '/badge-72.png',
      data: data.url || 'https://app.arcahfit.com.br'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data || 'https://app.arcahfit.com.br')
  );
});
