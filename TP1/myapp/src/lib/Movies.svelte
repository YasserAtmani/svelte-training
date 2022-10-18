<script>
    import { api_search, api_img, favMovies, fetchedMovies } from '../stores'
  
    let title = 'avengers';
    let results = 0;

    function search(query) {
        fetch(api_search+query)
       .then((response) => response.json())
       .then((data) => {
            fetchedMovies.set(data.results);
            results = data.results.length
        }).catch(error => {
            console.log(error);
            return [];
  });
        
        
    }

    const addFav = (title) => {
		$favMovies = [...$favMovies, {
			movie: title
		}];
	};

    const removeFav = (title) => {
        $favMovies = $favMovies.filter((movie) => movie.movie !== title);
    }
    
    //initial search
    search(title);

</script>

<div style="text-align:left">
  
    <div style="text-align:center">
        <input style="text-align:center" bind:value={title} on:change={search(title)}/>
    </div>  
    <br>
    <br>
    <h2>Vos films préférés</h2>
    <div>
        {#if $favMovies.length <= 0}
            <p>Vous n'avez pas encore de films préférés</p>
        {:else}
            <ul>
                {#each $favMovies as movie}
                    <span on:click={removeFav(movie.movie)}>x</span> {movie.movie} <br>
                {/each}
            </ul>
        {/if}
    </div>
    <br>
    Résultats : {results}
    <br>
    <br>
    <!--Premier film : <strong>{premier_film}</strong>-->
    <!--<img src={premier_film_poster} alt="poster"/>-->
    <div>
        {#each $fetchedMovies as movie}
            <span on:click={addFav(movie.original_title)}>+</span> {movie.original_title} <br>
        {/each}
    </div>

</div>