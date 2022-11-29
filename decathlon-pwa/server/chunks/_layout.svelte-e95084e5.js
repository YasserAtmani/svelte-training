import { c as create_ssr_component, e as escape, b as each, d as null_to_empty, f as add_attribute } from './index-b4f4e693.js';

const css = {
  code: '.user-icon.svelte-1xgs4s6.svelte-1xgs4s6{width:30px;height:30px;fill:#fff}.user-icon-container.svelte-1xgs4s6.svelte-1xgs4s6{flex-direction:column;align-self:center;position:absolute;right:0;padding-right:20px;font-size:12px;font-weight:400;text-align:center}.logo.svelte-1xgs4s6.svelte-1xgs4s6{width:200px;height:auto}nav.svelte-1xgs4s6.svelte-1xgs4s6{background-color:#0C83C3;font-family:"Roboto Condensed", sans-serif;height:80px;text-transform:uppercase;font-weight:800}.inner.svelte-1xgs4s6.svelte-1xgs4s6{padding-left:25px;padding-right:25px;margin:auto;box-sizing:border-box;display:flex;align-items:center;height:100%}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6{width:25px;height:14px;position:relative;cursor:pointer;margin-right:20px}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:after,.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:before,.middle-line.svelte-1xgs4s6.svelte-1xgs4s6{content:"";position:absolute;width:100%;height:2px;background-color:#fff;transition:all 0.4s;transform-origin:center}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:before,.middle-line.svelte-1xgs4s6.svelte-1xgs4s6{top:0}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:after,.middle-line.svelte-1xgs4s6.svelte-1xgs4s6{bottom:0}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:before{width:66%}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:after{width:33%}.middle-line.svelte-1xgs4s6.svelte-1xgs4s6{margin:auto}.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:hover:before,.mobile-icon.svelte-1xgs4s6.svelte-1xgs4s6:hover:after,.mobile-icon.active.svelte-1xgs4s6.svelte-1xgs4s6:before,.mobile-icon.active.svelte-1xgs4s6.svelte-1xgs4s6:after,.mobile-icon.active.svelte-1xgs4s6 .middle-line.svelte-1xgs4s6{width:100%}.mobile-icon.active.svelte-1xgs4s6.svelte-1xgs4s6:before,.mobile-icon.active.svelte-1xgs4s6.svelte-1xgs4s6:after{top:50%;transform:rotate(-45deg)}.mobile-icon.active.svelte-1xgs4s6 .middle-line.svelte-1xgs4s6{transform:rotate(45deg)}.navbar-list.svelte-1xgs4s6.svelte-1xgs4s6{display:none;width:100%;justify-content:space-between;margin:0;padding:0 40px}.navbar-list.mobile.svelte-1xgs4s6.svelte-1xgs4s6{background-color:#EFF1F3;position:fixed;display:block;height:calc(100% - 80px);bottom:0;left:0}.navbar-list.svelte-1xgs4s6 li.svelte-1xgs4s6{list-style-type:none;position:relative}.navbar-list.svelte-1xgs4s6 li.svelte-1xgs4s6:before{content:"";position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:rgba(0, 0, 0, 0.1)}.navbar-list.svelte-1xgs4s6 a.svelte-1xgs4s6{color:#1a2a34;text-decoration:none;display:flex;height:45px;align-items:center;padding:0 10px;font-size:15px}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navItems = [{ label: "Accueil", href: "/" }, { label: "Profil", href: "/" }];
  $$result.css.add(css);
  return `<nav class="${"svelte-1xgs4s6"}"><div class="${"inner svelte-1xgs4s6"}"><div class="${escape(null_to_empty(`mobile-icon${""}`), true) + " svelte-1xgs4s6"}"><div class="${"middle-line svelte-1xgs4s6"}"></div></div>
		<a href="${"/"}"><img src="${"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png"}" alt="${"Decathlon"}" class="${"logo svelte-1xgs4s6"}"></a>
		<div class="${"user-icon-container svelte-1xgs4s6"}"><a href="${"/user"}"><svg aria-hidden="${"true"}" class="${"user-icon svelte-1xgs4s6"}" viewBox="${"0 0 32 32"}"><path d="${"M7.164 29.986a1 1 0 01-1.148-1.165l2-11A1 1 0 019 17h14a1 1 0 01.97.757l2 8a1 1 0 01-.806 1.23l-18 3zm1.074-2.206l15.53-2.588L22.218 19H9.835l-1.597 8.78zM16 15c-3.314 0-6-2.91-6-6.5S12.686 2 16 2s6 2.91 6 6.5-2.686 6.5-6 6.5zm0-2c2.172 0 4-1.98 4-4.5S18.172 4 16 4c-2.172 0-4 1.98-4 4.5s1.828 4.5 4 4.5z"}"></path></svg></a>
			<div style="${"margin-top: 5px;"}">Mon compte
			</div></div>
	  <ul class="${escape(null_to_empty(`navbar-list${""}`), true) + " svelte-1xgs4s6"}">${each(navItems, (item) => {
    return `<li class="${"svelte-1xgs4s6"}"><a${add_attribute("href", item.href, 0)} class="${"svelte-1xgs4s6"}">${escape(item.label)}</a>
			</li>`;
  })}</ul></div></nav>
  
  

  ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-e95084e5.js.map
