/* Permite instalar o site como aplicativo. Sempre busca a versão nova na rede;
   o cache só é usado quando a rede falha. Não toca nas chamadas à planilha (outro domínio). */
const CACHE = 's2i-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(resp => {
    if (resp.ok) { const c = resp.clone(); caches.open(CACHE).then(k => k.put(r, c)); }
    return resp;
  }).catch(() => caches.match(r).then(m => m || Response.error())));
});
