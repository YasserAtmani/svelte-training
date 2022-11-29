<script>
  import { goto } from '$app/navigation';
  
  /**
     * @param {string | URL} link
     */
  function handleRedirect(link) {
    goto(link);
  }
  
</script>
  <main>
	<div class="row noMargin">
		<div class="cell">
      <a href="/user"><button class="cell-button">Mes alertes</button></a>
		</div>
		<div class="cell">
      <a href="https://www.decathlon.fr"><button class="cell-button">Nouveautés</button></a>
		</div>
	  </div>
	  <div class="row noMargin">
		<div class="cell">
      <a href="https://www.decathlon.fr/browse/c0-promotions/_/N-z6t76i"><button class="cell-button">Promotions</button></a>
		</div>
		<div class="cell">
      <a href="https://www.decathlon.fr/"><button class="cell-button">Boutique</button></a>
		</div>
	  </div>
  </main>

  <style>

	.row {
        display: flex;
        max-width: 100%;
        height: 500px;
	}

	.row div {
	    width: 50%;
        margin: 50px;
	}

	.noMargin {
	    margin: 100px;
	}

	.cell {
	    background-color: #0C83C3;
        width: 100%;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        line-height: 500px;
        font-size: 25px;
        color: white;
        font-family: "Roboto Condensed", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
	}

  .cell-button {
        width: 100%;
        height: 100%;
        background-color: #0C83C3;
        color: white;
        font-family: "Roboto Condensed", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 20px;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 600px) {

        .row {
            display: flex;
            max-width: 100%;
            height: 300px;
        }

        .row div {
            width: 50%;
            margin: 12px;
        }

        .noMargin {
            margin: 25px;
        }

        .cell {
            width: 100%;
            text-align: center;
            vertical-align: middle;
            font-size: 20px;
            line-height: 300px;
            color: white;
            font-family: "Roboto Condensed", sans-serif;
            text-transform: uppercase;
            font-weight: 500;
        }
    }

  </style>