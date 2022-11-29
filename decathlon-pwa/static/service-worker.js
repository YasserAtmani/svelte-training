self.addEventListener('push', function(event) {
  const data = event.data.json();
  const alerts = [
    {
      name: "SURPANTALON PLUIE VELO VILLE 100 NOIR",
      link: "https://www.decathlon.fr/p/surpantalon-pluie-velo-ville-100-noir/_/R-p-169380?mc=8402040&c=NOIR"
    },
    {
      name: "SOUS-VÊTEMENT DE SKI HOMME - BL 100 HAUT - NOIR",
      link: "https://www.decathlon.fr/p/sous-vetement-de-ski-homme-bl-100-haut/_/R-p-302821?mc=8510029&c=NOIR"
    },
    {
      name: "SAC À DOS DE TREKKING ET VOYAGE 40 L CABINE - TRAVEL 100",
      link: "https://www.decathlon.fr/p/sac-a-dos-de-trekking-et-voyage-40-l-cabine-travel-100/_/R-p-303040?mc=8554561&c=BORDEAUX"
    },
  ];
  
  console.log("data", data);
  console.log('Push received...');
  const random = Math.floor(Math.random() * alerts.length);
  console.log('Push had this data: ', data]);
  self.registration.showNotification(data.title, {
    body: alerts[random].name,
    data: alerts[random].link,
    badge: 'https://www.decathlon.fr/render/favicon-96x96.1d72df8f08484c5c2852.png',
    icon: 'https://www.decathlon.fr/render/favicon-96x96.1d72df8f08484c5c2852.png'
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});
