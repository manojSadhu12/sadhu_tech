!function(){"use strict";const e=["client/Icon.b3087117.js","client/Footer.de30a3b6.js","client/courses.57a71d7d.js","client/index.01478220.js","client/Card.e2d052c6.js","client/Button.46d81a0e.js","client/Image.a80d16de.js","client/stores.ec09ff7a.js","client/_layout.d2b96669.js","client/Course.1ebd535a.js","client/basicsOfJavaScript.b0751307.js","client/client.f707559f.js","client/_layout.291b81d9.js","client/intro.2612d0ed.js","client/sfse.b5dd62c4.js","client/test.72bc5633.js","client/_layout.00c4ec27.js","client/reactWithWebpack.111799c4.js","client/reactWithCDN.fe39efaf.js","client/_layout.00b8b845.js","client/reactAppFileStructure.08358119.js","client/reactPureComponents.95a6624c.js","client/reactComponentLifecycle.7bb854eb.js","client/reactStateBasics.cb563083.js","client/reactComponents.141e98e2.js","client/reactHigherOrderComponents.97ccc4be.js","client/reactProps.1e6a17df.js","client/reactRenderProps.b5fb8e77.js","client/reactVirtualDOM.f2382c86.js","client/reactContextAPI.b2586984.js","client/introductionToReactHooks.71f1b09d.js","client/reactMemo.aa0ce938.js","client/useCallbackHook.727f32bb.js","client/useContextHook.97b6851a.js","client/useReducerHook.b9a9db43.js","client/useEffectHook.a1bf9ebf.js","client/useMemoHook.3509da3c.js","client/useStateHook.f1e3c5ae.js","client/index.b8f1b6e6.js","client/useRefHook.0da97050.js","client/jSXAttributesOrProps.d6b3766e.js","client/returnMultipleJSXElements.9f00375c.js","client/inlineCSSInJSX.dca9d834.js","client/handlingEventsInJSX.5a878f93.js","client/jSXListAndKeys.9ab205d5.js","client/whatIsJSX.89960c0b.js","client/whyJSX.7f833d27.js","client/basicsOfJSX.8e69dbee.js","client/client.4040e255.js","client/reactIntro.ff593272.js","client/manojSadhu.56aa4a6a.js"].concat(["service-worker-index.html",".DS_Store","copy.svg","data.json","favicon.png","feedback/average.svg","feedback/excellent.svg","feedback/good.svg","feedback/poor.svg","feedback/worst.svg","founder/.DS_Store","founder/full.jpg","founder/thumbnail.jpg","global.css","icons/.DS_Store","icons/javaScript.svg","icons/k.png","icons/reactJs.svg","icons/typeScript.svg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___01e396e0-71a0-11ea-97c6-61ac10c437eb.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___08d535b0-2a12-11ea-9a2a-050917cd1181.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___189de2d0-0e7e-11ea-8c6f-19598ca3b9f0.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___252b23e0-0e9d-11ea-8c6f-19598ca3b9f0.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___2b1b6080-2a31-11ea-9a2a-050917cd1181.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___5a59ce00-7580-11ea-9257-075f2989ad62.jpeg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___6cd5b850-7648-11ea-bf1d-2b9523073973.gif","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___71713f60-f7d6-11e9-a9e7-53aaac32fbd9.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___91027840-6cb5-11ea-be7d-4d9e3d4dc015.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___9597dbc0-2c73-11ea-b47c-254220e6644c.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___95a85bf0-246f-11ea-8988-81bac9bb2a1f.jpg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___a47f2da0-6cb5-11ea-be7d-4d9e3d4dc015.png","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___ad7ac5a0-73e9-11ea-be82-abf696c28696.jpeg","images/da86ed50-f336-11e9-b4ff-ad48fafeab92___d07d2a70-1985-11ea-8832-2b96578e9245.jpg","logo-192.png","logo-512.png","logo.png","manifest.json","my_styles.css","prism.css","prismLineHighlight.js"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1585998236615").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1585998236615"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585998236615").then(async a=>{try{const t=await fetch(e.request);return a.put(e.request,t.clone()),t}catch(t){const c=await a.match(e.request);if(c)return c;throw t}}))))})}();
