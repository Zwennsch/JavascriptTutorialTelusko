let values = ['Hans', 'Tom', 'Timo']

console.log(values);

values.push('Sven')

console.log(values);

// you can mix datatypes as well
values.push(6, {tech: 'JS'}, function(){console.log('Hello World');})

console.log(values);

// call the function
values[6]();