//STEP 1
// let favMovie = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji'];
// console.log(favMovie[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'La La Land';
// movies[1] = 'The Greatest Showman';
// movies[2] = 'The Notebook';
// movies[3] = 'Godzilla Minus One';
// movies[4] = 'Jumanji';
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'La La Land';
// movies[1] = 'The Greatest Showman';
// movies[2] = 'The Notebook';
// movies[3] = 'Godzilla Minus One';
// movies[4] = 'Jumanji'';
// movies.splice(2, 0, 'The Proposal');
// console.log(movies.length);

//STEP 4
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// for (let movie in movies){
//     console.log(movies[movie]);
// }

//STEP 6
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// for (let movie of movies){
//     console.log(movie);
// }

//STEP 7
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// for (let movie of movies.sort()){
//     console.log(movie);
// }
// --- ANOTHER WAY ---
// let sortMovies = [...movies].sort();
// for (let movie of sortMovies) {
//   console.log(movie);
// }

//STEP 8
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// let leastFavMovies = ['Ringu', 'Parasite', 'Dancer In The Dark'];
// console.log(`\nMovies I like:\n\n`);
// for (let movie of movies){
//     console.log (movie);
// }

// console.log('\nMovie I regret watching:\n\n');
// for (let leastFavMovie of leastFavMovies){
//     console.log(leastFavMovie);
// }

//STEP 9
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// let leastFavMovies = ['Ringu', 'Parasite', 'Dancer In The Dark'];
// movies = movies.concat(leastFavMovies);
// movies= movies.sort().reverse();
// console.log(movies);

//STEP 10
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// let leastFavMovies = ['Ringu', 'Parasite', 'Dancer In The Dark'];
// movies = movies.concat(leastFavMovies);
// movies= movies.sort().reverse();
// console.log(movies.slice(-1)[0]);
// // --- ANOTHER WAY ---
// console.log(movies.pop());

//STEP 11
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// let leastFavMovies = ['Ringu', 'Parasite', 'Dancer In The Dark'];
// movies = movies.concat(leastFavMovies);
// movies= movies.sort().reverse();
// console.log(movies[0]);
// // --- ANOTHER WAY ---
// console.log(movies.shift());

//STEP 12
// let movies = ['La La Land', 'The Greatest Showman', 'The Notebook', 'Godzilla Minus One', 'Jumanji', 'The Proposal', 'Black Swan'];
// let leastFavMovies = ['Ringu', 'Parasite', 'Dancer In The Dark'];
// movies = movies.concat(leastFavMovies);
// let indices = [];
// for (let i = 0; i < movies.length; i++){
//     if (leastFavMovies.includes(movies[i])){
//         indices.push(i);
//     }
// }
// let favMovies = ['Spider Man: No Way Home', 'Aladdin', 'Castle in the Sky'];
// console.log(indices);
// console.log(favMovies);
// for (let j = 0; j <indices.length; j++){
//     movies[indices[j]] = favMovies[j];
// }
// movies= movies.sort().reverse();
// console.log(movies);

//STEP 13
// let movies = [['The Greatest Showman', 1], ['La La Land', 2], ['The Notebook', 3], ['Godzilla Minus One', 4], ['Jumanji', 5]];
// for (let movie of movies){
//     let ranking = movie.filter((movieName) => {
//         return typeof movieName === 'string';
//     })
//     console.log(ranking[0]);
// }

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
// const showEmployee = function(empArray){
//     console.log('Employees:\n\n');
//     for (let employee of empArray){
//         console.log(employee);
//     }
// };
// showEmployee(employees);

//STEP 15
// const filterValues = valueArray => valueArray.filter(value => value);
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// const randomNum = numArray =>{
//     return numArray[Math.floor(Math.random() * numArray.length )]
// }

//STEP 17
// const largestNum = numArray => numArray.sort((a, b) => b - a)[0];