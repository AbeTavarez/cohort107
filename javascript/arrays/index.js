

// array literal
const movies = ['Caddyshack', 'Interstellar', 'Scarface'];

// overwrite a value 
movies[1] = 'Batman';

console.log(movies.length);
console.log(movies);

//
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}


let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];

let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// concat
const ourMovies = yourMovies.concat(myMovies, movies);

// make a copy of the array
const copyOfMovies = movies.concat();

// push a new value to the array
copyOfMovies.push('Toy Story');


copyOfMovies.push('Batman 2');
console.log(copyOfMovies);

// removing the last element in the array
const lastEle = copyOfMovies.pop();

console.log(copyOfMovies);

console.log(`The movie ${lastEle} was removed.`);

const moviesNames = copyOfMovies.join(', ');

console.log(moviesNames);

movies.push('Trading Places', 'Antitrust');

// adds element to the front of the array
movies.unshift('Star Wars');

console.log(movies);