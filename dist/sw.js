/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-a51b997a'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "android-chrome-192x192.png",
    "revision": "bcef0439bac4e8a634266168c1dfa433"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "84e4b3f5c99345f5dd2c823ba8c3471b"
  }, {
    "url": "apple-touch-icon-1.png",
    "revision": "5b30dddc23f09a5185ca7d173b8d15df"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "54405c1cb0fc80b293affdec456246d3"
  }, {
    "url": "favicon-16x16.png",
    "revision": "6748318b9f861580b12b47ff65e42ae5"
  }, {
    "url": "favicon-32x32.png",
    "revision": "fe498e3953b6f3f78879e58d2ac49607"
  }, {
    "url": "favicon.png",
    "revision": "c57e215fcf93c74c37b849dae1143564"
  }, {
    "url": "icon-128x128.png",
    "revision": "ce3847919ada8d0f9d5768a588d722a0"
  }, {
    "url": "icon-144x144.png",
    "revision": "47d8f14093bc8e7901268b0b21110fdc"
  }, {
    "url": "icon-152x152.png",
    "revision": "6b9d424f0bced1a09a8726d128b06815"
  }, {
    "url": "icon-192.png",
    "revision": "5d944c5ebe78734c79cb223db22ec029"
  }, {
    "url": "icon-192x192.png",
    "revision": "bcef0439bac4e8a634266168c1dfa433"
  }, {
    "url": "icon-384x384.png",
    "revision": "0423d5f4eb96034d3feca7f242afae2a"
  }, {
    "url": "icon-48x48.png",
    "revision": "26ac6c8e5059570a292682493a3f9400"
  }, {
    "url": "icon-512.png",
    "revision": "1da33ceab9bdce13c3225425daf56a77"
  }, {
    "url": "icon-512x512.png",
    "revision": "84e4b3f5c99345f5dd2c823ba8c3471b"
  }, {
    "url": "icon-72x72.png",
    "revision": "fa24de007cdc3a42c4a394b843d67259"
  }, {
    "url": "icon-96x96.png",
    "revision": "953050d6b7d7d9668c3f2c48f81c0902"
  }, {
    "url": "index.html",
    "revision": "4f48cd0450aeb42424536fdc9c4a1a86"
  }, {
    "url": "mstile-150x150.png",
    "revision": "3cb6fbc9a47fc04c92f56601a61964a8"
  }, {
    "url": "screenshot-visible.png",
    "revision": "a98996db0ae23f372fdc85fca18ce490"
  }, {
    "url": "screenshot.png",
    "revision": "a98996db0ae23f372fdc85fca18ce490"
  }, {
    "url": "assets/index.4bfb67e5.js",
    "revision": null
  }, {
    "url": "assets/index.9c891a7e.css",
    "revision": null
  }, {
    "url": "assets/vendor.f6be57cb.js",
    "revision": null
  }, {
    "url": "favicon.ico",
    "revision": "3dc95f2e7e5fe97bff84d53c33e92f06"
  }, {
    "url": "robots.txt",
    "revision": "07ad80e7916274dc4835e292a46a941c"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "54405c1cb0fc80b293affdec456246d3"
  }, {
    "url": "icon-192.png",
    "revision": "5d944c5ebe78734c79cb223db22ec029"
  }, {
    "url": "icon-512.png",
    "revision": "1da33ceab9bdce13c3225425daf56a77"
  }, {
    "url": "manifest.webmanifest",
    "revision": "24274ceed8d970ca3918152e24248314"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
