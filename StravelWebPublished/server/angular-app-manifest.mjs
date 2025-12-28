
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 721, hash: '1a35424d0bf4659d2f75a5f36c82d7dc3944c7334b8b4bd243bc1fa2d4185720', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 954, hash: 'ca6b4d6026c4ac29d623592df852935e49b512447ae4123d51d92901068a6ff6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12362, hash: '1982bd0a0f187751a8bfc44052d08f1721f62cfe12547aef07978e0825969bd6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 21161, hash: '148ac1249c54843f33e557b26f417253fe45b99babdc0f067a83c107b08d63d7', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 13101, hash: '0215cad512e0dea8cfc9858baba7b0889067e61d0b986985ea67348be05ba588', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-X6H3TGBN.css': {size: 910, hash: 'QNfYiREg3tU', text: () => import('./assets-chunks/styles-X6H3TGBN_css.mjs').then(m => m.default)}
  },
};
