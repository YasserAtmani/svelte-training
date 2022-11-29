<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation"
  
	// Show mobile icon and display menu
	let showMobileMenu = false;
  
	// List of navigation items
	const navItems = [
	  { label: "Accueil", href: "/home" },
	  { label: "Profil", href: "/user"},
	  { label: "Vos alertes", href: "#"},
	  { label: "Promotions", href: "#"},
	  { label: "Nouveautés", href: "#"},
	  { label: "Boutique", href: "#"},
	];
  
	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  
	// Media match query handler
	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
	  // Reset mobile state
	  if (!e.matches) {
		showMobileMenu = false;
	  }
	};
  
	// Attach media query listener on mount hook
	onMount(() => {
	  const mediaListener = window.matchMedia("(max-width: 767px)");
  
	  mediaListener.addListener(mediaQueryHandler);
	});
  </script>
  
  <nav>
	<div class="inner">
	  <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
		<div class="middle-line"></div>
	  </div>
		<a href="/home">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png" alt="Decathlon" class="logo" />
		</a>
		<div class="user-icon-container">
			<a href="/user">
				<svg aria-hidden="true" class="user-icon" viewBox="0 0 32 32">
					<path d="M7.164 29.986a1 1 0 01-1.148-1.165l2-11A1 1 0 019 17h14a1 1 0 01.97.757l2 8a1 1 0 01-.806 1.23l-18 3zm1.074-2.206l15.53-2.588L22.218 19H9.835l-1.597 8.78zM16 15c-3.314 0-6-2.91-6-6.5S12.686 2 16 2s6 2.91 6 6.5-2.686 6.5-6 6.5zm0-2c2.172 0 4-1.98 4-4.5S18.172 4 16 4c-2.172 0-4 1.98-4 4.5s1.828 4.5 4 4.5z"></path>
				</svg>
			</a>
			<div style="margin-top: 5px; color: white">
				Mon compte
			</div>
		</div>
	  <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
		{#each navItems as item}
			<li>
				<a on:click={handleMobileIconClick} href={item.href}>{item.label}</a>
			</li>
		{/each}
	  </ul>
	</div>
  </nav>

  <style>

    .user-icon {
	  width: 30px;
	  height: 30px;
	  fill: #fff;
	}

	.user-icon-container {
		flex-direction: column;
		align-self: center;
		position: absolute;
		right: 0;
		padding-right: 20px;
		font-size: 12px;
		font-weight: 400;
		text-align: center;
	}

	.logo {
		width: 200px;
		height: auto;
	}

	nav {
	  background-color: #0C83C3;
	  font-family: "Roboto Condensed", sans-serif;
	  height: 80px;
	  text-transform: uppercase;
	  font-weight: 800;
	}
  
	.inner {
	  padding-left: 25px;
	  padding-right: 25px;
	  margin: auto;
	  box-sizing: border-box;
	  display: flex;
	  align-items: center;
	  height: 100%;
	}
  
	.mobile-icon {
	  width: 25px;
	  height: 14px;
	  position: relative;
	  cursor: pointer;
	  margin-right: 20px;
	}
  
	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
	  content: "";
	  position: absolute;
	  width: 100%;
	  height: 2px;
	  background-color: #fff;
	  transition: all 0.4s;
	  transform-origin: center;
	}
  
	.mobile-icon:before,
	.middle-line {
	  top: 0;
	}
  
	.mobile-icon:after,
	.middle-line {
	  bottom: 0;
	}
  
	.mobile-icon:before {
	  width: 66%;
	}
  
	.mobile-icon:after {
	  width: 33%;
	}
  
	.middle-line {
	  margin: auto;
	}
  
	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
	  width: 100%;
	}
  
	.mobile-icon.active:before,
	.mobile-icon.active:after {
	  top: 50%;
	  transform: rotate(-45deg);
	}
  
	.mobile-icon.active .middle-line {
	  transform: rotate(45deg);
	}
  
	.navbar-list {
	  display: none;
	  width: 100%;
	  justify-content: space-between;
	  margin: 0;
	  padding: 0 40px;
	}
  
	.navbar-list.mobile {
	  background-color: #EFF1F3;
	  position: fixed;
	  display: block;
	  height: calc(100% - 80px);
	  bottom: 0;
	  left: 0;
	}
  
	.navbar-list li {
	  list-style-type: none;
	  position: relative;
	}
  
	.navbar-list li:before {
	  content: "";
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 1px;
	  background-color: rgba(0, 0, 0, 0.1);
	}
  
	.navbar-list a {
	  color: #1a2a34;
	  text-decoration: none;
	  display: flex;
	  height: 45px;
	  align-items: center;
	  padding: 0 10px;
	  font-size: 15px;
	}

  </style>

  <slot/>