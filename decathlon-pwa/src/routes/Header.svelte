<script>
	import { page } from '$app/stores';

	function myFunction() {
		var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}

</script>


<div class="topnav">
	<a href="#home" class="active">Logo</a>
	<div id="myLinks">
	  <a href="#news">News</a>
	  <a href="#contact">Contact</a>
	  <a href="#about">About</a>
	</div>
	<a href="javascript:void(0);" class="icon" onclick="myFunction()">
	  <i class="fa fa-bars"></i>
	</a>
  </div>

<header class="nav-bar">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Decathlon_Logo.svg/2560px-Decathlon_Logo.svg.png" alt="Decathlon" class="logo" />
	<div class="nav-bar__right">
		<a href="/user" class="nav-bar__link">User</a>
	</div>
</header>
<style>
	/*.nav-bar {
		background-color: #0082C3;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 100%;
	}

	.logo {
		display: inline-block;
		width: 200px;
		height: auto;
	}*/

.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #04AA6D;
  color: white;
}
</style>

