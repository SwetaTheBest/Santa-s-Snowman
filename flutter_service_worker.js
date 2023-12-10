'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "52cf558a8f8eb37a75059238634d8026",
"assets/AssetManifest.bin.json": "4c056bbc0f795b5cc887bf0ae9b29e75",
"assets/AssetManifest.json": "c11dfc0459b6d203174ffe04dad2458e",
"assets/assets/audio/assets_audio_bounce.wav": "63621de02044af415adcb0cdbc7afe87",
"assets/assets/audio/assets_audio_collect_fruit.wav": "81efa093638b482b3593b1022837169d",
"assets/assets/audio/assets_audio_disappear.wav": "1d328b82b7707e42002f42927346e923",
"assets/assets/audio/assets_audio_hit.wav": "3c90d1d642f2409a1ccede4189b8618f",
"assets/assets/audio/assets_audio_jump.wav": "0955bb8692212a59ffbf265053d0f09a",
"assets/assets/audio/bg_music.ogg": "e0ee19692c51bd7e07713a82d570c099",
"assets/assets/images/Items/Checkpoints/End/End%2520(Idle).png": "484d2c6f5012652a2be0366af353f8ec",
"assets/assets/images/Items/Checkpoints/End/End%2520(Pressed)%2520(64x64).png": "7c8ee365eba44c461016d4f757705f55",
"assets/assets/images/Items/ChristmasObjects/ChristmasHat.png": "d85531680b4005616c68c0172262d1ac",
"assets/assets/images/Items/ChristmasObjects/Gift1.png": "7b9fdd9727cb2195e5eb84bed92f40de",
"assets/assets/images/Items/ChristmasObjects/Mistletoe.png": "822442cf4d4c47375a205304d129d879",
"assets/assets/images/Items/ChristmasObjects/Snowflake.png": "850f8bf000bb2935151e80932e94e875",
"assets/assets/images/Items/ChristmasObjects/snowman1.png": "5fee5c38653af5ee7c3e7598d717c2a9",
"assets/assets/images/Items/ChristmasObjects/snowman2.png": "959f9b5dbd58db30e0e92bee4dc00c78",
"assets/assets/images/Items/ChristmasObjects/snowman3.png": "a8f1ebf8a07e70f0301bd551ed10de56",
"assets/assets/images/Items/ChristmasObjects/snowman4.png": "73d3acc91bbbad819a067a779c295706",
"assets/assets/images/Items/ChristmasObjects/snowman5.png": "cefdc0c2482e5a3c6fdfb73e6ccd491a",
"assets/assets/images/Items/ChristmasObjects/snowman6.png": "303b36ab6c5c8efcd3d0a79b022239ce",
"assets/assets/images/Items/ChristmasObjects/snowman7.png": "c65447aaaebf5a079d9031511c807dd0",
"assets/assets/images/Items/ChristmasObjects/snowman8.png": "be016b915f1d4bdd370a873fd565d222",
"assets/assets/images/Items/ChristmasObjects/Star.png": "3d94bc32981d4c8593f13f16dbccac22",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Main%2520Characters/Desappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Main%2520Characters/santa_dead_spritesheet.png": "2940b59d6b789869b54868b630e00b42",
"assets/assets/images/Main%2520Characters/santa_idle_spritesheet.png": "f3a0c1df8c069109d5963b6883cb9448",
"assets/assets/images/Main%2520Characters/santa_jump_spritesheet.png": "9eae923a83ed83ae10ea8e385aa06738",
"assets/assets/images/Main%2520Characters/santa_run_spritesheet.png": "a0ff184fa82cfda9a3490b451962eabb",
"assets/assets/images/Main%2520Characters/sparkle.png": "d257f4dfb0b90f48c0a11e89599c69f1",
"assets/assets/images/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Menu/Buttons/heart_1.png": "ee89a47c6c0583f19a35220f50c49382",
"assets/assets/images/Menu/Buttons/heart_2.png": "79702db61c9007babaa4c599f86e2bfa",
"assets/assets/images/Menu/Buttons/heart_3.png": "0ef56160f74754f74465e90f834bd3ff",
"assets/assets/images/Menu/Buttons/heart_4.png": "ba5ddb920ae2922171dfced4f476dfad",
"assets/assets/images/Menu/Buttons/heart_5.png": "f236bd539a84e586386fc21d6d929492",
"assets/assets/images/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Menu/Buttons/Next.png": "2f75777c57c36c83c6140bbd7b97a5e1",
"assets/assets/images/Menu/Buttons/pause.png": "6d930f95dc8b67ba5e9718c741b215a8",
"assets/assets/images/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/tileset/ken_tilesheet.png": "827dd7c99363ece3f00fe8b860e5c908",
"assets/assets/images/tileset/lava.png": "b37ec272a7eca01feb8749367d26f019",
"assets/assets/images/tileset/winter_bg_tile.png": "8ac85838f9d977273d797c309df8ed44",
"assets/assets/images/tileset/winter_terrain_image.png": "7820168ddda49d647a7df88f351836d9",
"assets/assets/images/Traps/Fire/Hit%2520(16x32).png": "b161b5e6801126c9e999d09bf69ccb97",
"assets/assets/images/Traps/Fire/Off.png": "2984d7e69a4f68c94d6ead997e68e3d3",
"assets/assets/images/Traps/Fire/On%2520(16x32).png": "eaf35fcb43611e2d738a475b2a66beae",
"assets/assets/tiles/blocks_tileset.tsx": "f61eebb3abdf982ae996bea455776427",
"assets/assets/tiles/christmas_background.tsx": "380c081f4b6813a13632f30b6812f208",
"assets/assets/tiles/cool_tileset.tsx": "1fd34377c3a254abe79dbe928f10f4ad",
"assets/assets/tiles/kenny_tileset.tsx": "9e9a075678a943799cb09dc9cf1e6e7e",
"assets/assets/tiles/lava_tile.tsx": "e998e4079956fe8e2e25279ae8005c9a",
"assets/assets/tiles/Level-01.tmx": "ca879ae92aaa76335883ebd80f7b054f",
"assets/assets/tiles/Level-02.tmx": "f2a111d52b3e37246fcefd0134d4ae5a",
"assets/assets/tiles/Santaz%2520Snowman.tiled-project": "f569bfd3353c5a0faa26a765cae42f0d",
"assets/assets/tiles/Santaz%2520Snowman.tiled-session": "9f7676cce9d32f66d377b155893e9923",
"assets/FontManifest.json": "cf067bd47b79db2902360d1ffe210994",
"assets/fonts/MaterialIcons-Regular.otf": "b8a665e01ad920f07ebae0b64240aaca",
"assets/fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/NOTICES": "913c28950ebf68b058b2d01af87ef684",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6bea5e9d5b8cfafd38fe297ab32ac211",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "99c246f5c8bd0e0da196e46cc377f662",
"icons/Icon-512.png": "28c19f03836d2577b0537b636dadb7c2",
"icons/Icon-maskable-192.png": "99c246f5c8bd0e0da196e46cc377f662",
"icons/Icon-maskable-512.png": "28c19f03836d2577b0537b636dadb7c2",
"index.html": "f459bbf8225349ed385ca8ca27f00c7b",
"/": "f459bbf8225349ed385ca8ca27f00c7b",
"main.dart.js": "97e1bba595484853010ed5157e5528ae",
"manifest.json": "0d9bd383009725990580faf0651d8e6d",
"version.json": "56777cc001188d52c2d8254845ca5a47"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
