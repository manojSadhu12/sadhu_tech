!function(){"use strict";const e=["client/Icon.680bd4d0.js","client/Footer.739ad20b.js","client/courses.57a71d7d.js","client/index.d3c317bb.js","client/Card.2aae1ef5.js","client/Button.44f5306d.js","client/Image.c8019b1e.js","client/stores.2b7dbef2.js","client/_layout.29a7d3c4.js","client/Course.51783792.js","client/basicsOfJavaScript.55e3effa.js","client/client.9c259cf4.js","client/_layout.afc37703.js","client/intro.2bee158b.js","client/sfse.5b5a4cb3.js","client/test.62af7988.js","client/_layout.e9b27c16.js","client/reactWithWebpack.52220f98.js","client/reactWithCDN.9fbdc284.js","client/_layout.df5ad919.js","client/reactAppFileStructure.f0e12e54.js","client/reactComponentLifecycle.11191998.js","client/reactPureComponents.ed9341aa.js","client/reactComponents.faacd11c.js","client/reactStateBasics.7842488a.js","client/reactHigherOrderComponents.618c553c.js","client/reactRenderProps.217bbb02.js","client/reactProps.fc1c2efb.js","client/reactVirtualDOM.c44d72eb.js","client/reactContextAPI.0c248574.js","client/reactMemo.29e0842a.js","client/introductionToReactHooks.c66a29cd.js","client/useCallbackHook.8991c462.js","client/useContextHook.baf85dbd.js","client/useReducerHook.fbdedd08.js","client/index.7beba4f9.js","client/useEffectHook.223326c9.js","client/useMemoHook.646eb052.js","client/useRefHook.86ffc26e.js","client/useStateHook.2741d52e.js","client/returnMultipleJSXElements.dbed1799.js","client/jSXAttributesOrProps.3a3b0652.js","client/handlingEventsInJSX.50df5dbd.js","client/jSXListAndKeys.3b4938c6.js","client/inlineCSSInJSX.ff71e125.js","client/whatIsJSX.a63dfc9a.js","client/basicsOfJSX.caeadff5.js","client/whyJSX.431e4306.js","client/client.ec7f8c83.js","client/reactIntro.ce7eb200.js","client/manojSadhu.ea48b43e.js"].concat(["service-worker-index.html",".DS_Store","copy.svg","data.json","favicon.png","feedback/average.svg","feedback/excellent.svg","feedback/good.svg","feedback/poor.svg","feedback/worst.svg","founder/.DS_Store","founder/full.jpg","founder/thumbnail.jpg","global.css","icons/.DS_Store","icons/javaScript.svg","icons/k.png","icons/reactJs.svg","icons/typeScript.svg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___01e396e0-71a0-11ea-97c6-61ac10c437eb.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___08d535b0-2a12-11ea-9a2a-050917cd1181.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___189de2d0-0e7e-11ea-8c6f-19598ca3b9f0.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___252b23e0-0e9d-11ea-8c6f-19598ca3b9f0.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___2b1b6080-2a31-11ea-9a2a-050917cd1181.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___5a59ce00-7580-11ea-9257-075f2989ad62.jpeg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___71713f60-f7d6-11e9-a9e7-53aaac32fbd9.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___91027840-6cb5-11ea-be7d-4d9e3d4dc015.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___9597dbc0-2c73-11ea-b47c-254220e6644c.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___95a85bf0-246f-11ea-8988-81bac9bb2a1f.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___a47f2da0-6cb5-11ea-be7d-4d9e3d4dc015.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___ad7ac5a0-73e9-11ea-be82-abf696c28696.jpeg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___d07d2a70-1985-11ea-8832-2b96578e9245.jpg","logo-192.png","logo-512.png","logo.png","manifest.json","my_styles.css","prism.css","prismLineHighlight.js"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1585919743518").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1585919743518"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585919743518").then(async a=>{try{const t=await fetch(e.request);return a.put(e.request,t.clone()),t}catch(t){const c=await a.match(e.request);if(c)return c;throw t}}))))})}();
