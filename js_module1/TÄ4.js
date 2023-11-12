let name, names, namelista;
name = prompt('Enter your name');
names = Math.floor(Math.random() * 3);
namelista = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
console.log(name + ', you are ' + namelista[names]);