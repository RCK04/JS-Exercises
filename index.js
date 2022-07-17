/* First */

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const NumbersLessThan501 = crazyNumbers.reduce((accumulator, crazyNumbers) => {
  if (crazyNumbers < 501)
  {
    return accumulator + 1
  }

  return accumulator
}, 0)

console.log(NumbersLessThan501) 

//----------------------------------- 

/* Second */
const numbers = [5, 7, 3]

const numbersQuadrado = numbers.map(number => number ** 2)

console.log(numbersQuadrado) 

//---------------------------------------

/* Third */
const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const MoviesBefore2000 = tarantinoMovies.filter(tarantinoMovies => tarantinoMovies.release < 2000)

console.log(MoviesBefore2000) 

//--------------------------------------------------

/* Fourth */

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const NameTvShows = tvShows.map(tvShows => tvShows.name)

console.log(NameTvShows) 

//-----------------------------------------------

/* Fifth */
const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const ProductList = cart.reduce((accumulator, product) => {
  return `${accumulator}- ${product.name}\n`
}, '')

console.log(ProductList)

//---------------------------------------------

/* Sixth */

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const imparesNumbers = randomNumbers.filter(randomNumber => randomNumber % 2 === 1)

console.log(imparesNumbers)

//---------------------------------------------
/* Seventh  */

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
 if (product.price >= 30)
 {
  return {
    name: product.name,
    price: product.price / 2
    }
  }  

  return product
})

console.log(products, saleProducts)

//---------------------------------------------------
  