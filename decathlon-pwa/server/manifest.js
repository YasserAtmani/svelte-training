const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/icons/icon-128x128.png","images/icons/icon-144x144.png","images/icons/icon-152x152.png","images/icons/icon-192x192.png","images/icons/icon-256x256.png","images/icons/icon-32x32.png","images/icons/icon-512x512.png","images/icons/maskable_icon.png","manifest.json","offline.html","robots.txt","service-worker.js","styles.css"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".html":"text/html",".txt":"text/plain",".js":"application/javascript",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-681a5e57.js","imports":["_app/immutable/start-681a5e57.js","_app/immutable/chunks/index-58463707.js","_app/immutable/chunks/singletons-5a7638aa.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-bfd5635a.js'),
			() => import('./chunks/1-c1210fd1.js'),
			() => import('./chunks/3-8a810f12.js')
		],
		routes: [
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
