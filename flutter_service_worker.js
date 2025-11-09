'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5c9b5d50dcba1d9fd27b17624f31ff0b",
"assets/AssetManifest.bin.json": "933e96919e3c16d4e1895585da10f08c",
"assets/AssetManifest.json": "d8bd367c5893c69173bc5cad0c2b8a52",
"assets/assets/icons/path_sets/mountain_pass.png": "a651654198b469028a93ed448121d2fe",
"assets/assets/images/card_backs/challenge.png": "7c3537c860ca78d923e349bd5a06d306",
"assets/assets/images/card_backs/path.png": "315f2344b5807e57ec11b79216b4d487",
"assets/assets/images/challenge/card1.png": "72b4d75ad97ccd44e2dc8638e8cc9275",
"assets/assets/images/challenge/card10.png": "4a10130ee33c0c32750732217a957948",
"assets/assets/images/challenge/card11.png": "5a7c8604780c201330f4ec821fd339f4",
"assets/assets/images/challenge/card12.png": "c37038b96662b0af3d2ec7ce825410b7",
"assets/assets/images/challenge/card13.png": "96440ce5f23558d96fca7435e0e1e75e",
"assets/assets/images/challenge/card14.png": "e568692575bf56dd0395a8374e2ff38a",
"assets/assets/images/challenge/card15.png": "dabfb2c4cdc86c19ecffb31f09223947",
"assets/assets/images/challenge/card16.png": "25e872f0dbeae98d04462811e4026fbe",
"assets/assets/images/challenge/card17.png": "391afae31345ee06d1664611e61eacd8",
"assets/assets/images/challenge/card18.png": "647463052256a0fa6fd3fe2a8aebd946",
"assets/assets/images/challenge/card19.png": "9bfbf7fb26f19803e48604b7677ba0c1",
"assets/assets/images/challenge/card2.png": "12209f7750dea1a35f3f850d5fe14c95",
"assets/assets/images/challenge/card20.png": "c1538d58985b8115d348c15d3851077c",
"assets/assets/images/challenge/card21.png": "69a8714a6cf4a50e037f522c5b900f05",
"assets/assets/images/challenge/card22.png": "f5571498fa63e9cde7689d3a5ba55637",
"assets/assets/images/challenge/card23.png": "a2e0e771d8dad705f531fa1115eed98d",
"assets/assets/images/challenge/card24.png": "2acb956f2f210c954053552ccd84afe6",
"assets/assets/images/challenge/card3.png": "bf5aacef710b5c7af95f5f5c753dccfe",
"assets/assets/images/challenge/card4.png": "415b81580d4986653ee73c980dc2617c",
"assets/assets/images/challenge/card5.png": "0e80387a65d58ce444b728016b5fc337",
"assets/assets/images/challenge/card6.png": "3b76e04e99a2ad484865d19a2a53b13d",
"assets/assets/images/challenge/card7.png": "eda93d5af9cfb1245eb1654c577299b8",
"assets/assets/images/challenge/card8.png": "9c74f721d2dc64e15875b3a30dc97fda",
"assets/assets/images/challenge/card9.png": "b843f346f7dd7461d06fa559e56e1738",
"assets/assets/images/lakeshore/card1.png": "4da4d635a4ab0ff542de97a99148c8db",
"assets/assets/images/lakeshore/card10.png": "e2c428a995c3872a674a6242e306168c",
"assets/assets/images/lakeshore/card11.png": "f8d2d8e2404b9d40ab2509aea2ad6878",
"assets/assets/images/lakeshore/card12.png": "a90ec29ce3a6a5a6e511dfb2be554c28",
"assets/assets/images/lakeshore/card2.png": "f8b2ebadd965212c94e480f440f25db8",
"assets/assets/images/lakeshore/card3.png": "0c515d333770db9dcad443fa1d159a07",
"assets/assets/images/lakeshore/card4.png": "89c6e9b26232997489a64613e08bffc9",
"assets/assets/images/lakeshore/card5.png": "a0465144cdde9b5da8d771a4658f9035",
"assets/assets/images/lakeshore/card6.png": "15b74a496194e32caf4842816cb9f6dd",
"assets/assets/images/lakeshore/card7.png": "f8fcc5bbd08df6c6d1d8b9e0b0b3819d",
"assets/assets/images/lakeshore/card8.png": "f79458f226f77c603b60f81c0de7b7fb",
"assets/assets/images/lakeshore/card9.png": "68c47f01553f0b59184def110478e6ca",
"assets/assets/images/loneTreeStation/card1.png": "93e5d3d047ea797dd8cd95e297e1a3cc",
"assets/assets/images/loneTreeStation/card2.png": "f6ec49d770cfff7aa0e954c8d16abf7f",
"assets/assets/images/loneTreeStation/card3.png": "5f3638f785b22dfa63550c6f5e4abfba",
"assets/assets/images/loneTreeStation/card4.png": "678138f3519cbb27a232bb0dfad3fb8f",
"assets/assets/images/loneTreeStation/card5.png": "9fd7ac91aa179c4d7d3480bdb9c53c19",
"assets/assets/images/mountainPass/card1.png": "10abddb47e54a35a5342caabdd1eec9b",
"assets/assets/images/mountainPass/card10.png": "7118b55ed5948649b503bffab43f578d",
"assets/assets/images/mountainPass/card11.png": "ca1e1b64476551051703beac73a1384b",
"assets/assets/images/mountainPass/card12.png": "e301846ce8a96a39ae6c94d098e3006c",
"assets/assets/images/mountainPass/card2.png": "681f53e0eb982f6d1d6e71616bd551d9",
"assets/assets/images/mountainPass/card3.png": "694661bc158d82a1bfd993bfad9635da",
"assets/assets/images/mountainPass/card4.png": "2cdef5595079f6b010e202caafec4b81",
"assets/assets/images/mountainPass/card5.png": "6fd9500d3c62b24330d1546f74f0f672",
"assets/assets/images/mountainPass/card6.png": "293560148d90dc3de5984f7d9283abaf",
"assets/assets/images/mountainPass/card7.png": "d07d730cb64fa787f69678e245ad8b53",
"assets/assets/images/mountainPass/card8.png": "d4a149c68c6f606b2deef83551dcebdd",
"assets/assets/images/mountainPass/card9.png": "b0f37ed9a8924caf6011edc133caf3f7",
"assets/assets/images/northernOutpost/card1.png": "56390e1a4f70ad2342483e0da2f06a06",
"assets/assets/images/northernOutpost/card2.png": "982aae21faa485ab945ff4ba000e573b",
"assets/assets/images/northernOutpost/card3.png": "24eab8a9733c06b4b245568981e4a364",
"assets/assets/images/oldGrowth/card1.png": "543869b92ad919ebc04953f3063830ba",
"assets/assets/images/oldGrowth/card10.png": "d0e78a05fa7515b504b73d0f50710625",
"assets/assets/images/oldGrowth/card11.png": "092637bb22af4fa73545d46581b76751",
"assets/assets/images/oldGrowth/card12.png": "f2dd115fa8ae1e490b4ef2b90a70530d",
"assets/assets/images/oldGrowth/card2.png": "eb3b7af421013abb4b2a0bb49e4c9b51",
"assets/assets/images/oldGrowth/card3.png": "f456f70303f2f7ffb7a90f079328e9b1",
"assets/assets/images/oldGrowth/card4.png": "343876248df7518fe08c1c854b31a67d",
"assets/assets/images/oldGrowth/card5.png": "aec5f133c6bd954f05a80268cb95c714",
"assets/assets/images/oldGrowth/card6.png": "dcd999579fa894a883adfd055f8ff461",
"assets/assets/images/oldGrowth/card7.png": "c388c2d7b6b762238743c2662157cf3d",
"assets/assets/images/oldGrowth/card8.png": "e80e2d74a6794dfb5e35e95f50235535",
"assets/assets/images/oldGrowth/card9.png": "c1c0730421791dad9b19184ac81ecb7c",
"assets/assets/images/theValley/card11.png": "32678c0d64933012c7eb49bc6c1daf3a",
"assets/assets/images/theValley/card13.png": "ff6291ea1706633c8e6883a688d24c4c",
"assets/assets/images/theValley/card2-original.png": "874c2d230aefe452779577fa4d06a870",
"assets/assets/images/theValley/card2.png": "9410c8c7bf74169d16f8c6dbd04f6b1a",
"assets/assets/images/theValley/card3.png": "539c59f086d6d968ea5423668dd00166",
"assets/assets/images/theValley/card4.png": "cfae5bec0b8a177747588a2b661c7ccd",
"assets/assets/images/theValley/card5.png": "a0544a70d9ba7c23082d54cb66456520",
"assets/assets/images/theValley/card6.png": "487b3f0358751e8080a960a99eb77644",
"assets/assets/images/theValley/card7.png": "a4a7d0ebbc6dccfc5379b0230507f341",
"assets/assets/images/theValley/card9.png": "05ff0fbbcfb5eeac063894c44654056b",
"assets/assets/images/theValley/placeholderCard1.png": "8dccbbc3aa42fa7114e65db1f6894c27",
"assets/assets/images/theValley/placeholderCard10.png": "493155ca8b13c7e868b3982b24fbf9e7",
"assets/assets/images/theValley/placeholderCard12.png": "fd187a82cb6a96f6d2b49c55d79efbba",
"assets/assets/images/theValley/placeholderCard14.png": "9babe064b9c756aada28cca34259f7f2",
"assets/assets/images/theValley/placeholderCard8.png": "5dc583a51e87f15db6b5397904a5afb4",
"assets/assets/images/whiteSky/card1.png": "e723c2403c367a4d3643cf60bf8791ba",
"assets/assets/images/whiteSky/card2.png": "a60cb785b40b920463a654f5de2a31f4",
"assets/assets/images/whiteSky/card3.png": "31710f7a6f02c9d06d0a6a49db5b00ac",
"assets/assets/images/whiteSky/card4.png": "b5eb33fe75516be64179bdfea0b1a39a",
"assets/assets/images/woods/card1.png": "4a724986944bbc01c4f1a3ecce5a7293",
"assets/assets/images/woods/card10.png": "86918be636e53e49bf938e51ace74552",
"assets/assets/images/woods/card11.png": "c27f683bf135c19c13f6c388babee2ea",
"assets/assets/images/woods/card12.png": "f00234560ef236a047e0879db0b96aa8",
"assets/assets/images/woods/card2.png": "5c561352d292260eeb98a01eb990eaec",
"assets/assets/images/woods/card3.png": "431232fb76bf3c540edb54a0a5342bcf",
"assets/assets/images/woods/card4.png": "b694789ae9d5ecc6f635ee85c9a956a6",
"assets/assets/images/woods/card5.png": "0c9f58f794333ed3cce8207bb1bacabc",
"assets/assets/images/woods/card6.png": "24921f93c335224ba5d7c76d485dc8f0",
"assets/assets/images/woods/card7.png": "67c43f050a7cdf56a26587ca13e06ed8",
"assets/assets/images/woods/card8.png": "3d2aab72ee5021d896b58128d850518a",
"assets/assets/images/woods/card9.png": "f96782d77ff787475700f3c9b6272b30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad446aeb9c6803af1bc2efd1449eb9",
"assets/NOTICES": "2124828f9691cd700b9ba26d499cb7ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "379d6fe2aadecefac6237e94f4219687",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bfd84af22c6f8a36fbbc0d601a24c33c",
"/": "bfd84af22c6f8a36fbbc0d601a24c33c",
"main.dart.js": "b675547eb4cab8eaf0b9a84416a251c2",
"manifest.json": "8c7fe0e7c7c88c79157216b994ccf705",
"version.json": "c823c30f55884a92c136ccc8b7106ef7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
