import { writable } from 'svelte/store';

export const count = writable(0);
//export const api_search = "https://api.themoviedb.org/3/search/movie?api_key=a535455b5f0157b1298fce29df4a5b3c&query="
export const api_search = "http://localhost:8080/films/"
export const api_img="https://image.tmdb.org/t/p/w200/"
export const favMovies = writable([]);
export const fetchedMovies = writable([]);