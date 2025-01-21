let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
par = par.toLowerCase()

for(let i = 0; i < par.length; i++){
    if (par[i] === ' ') {
        continue; // Ignorar espacios
    }
    // Verifica si la letra ya está en counts
    if (counts[par[i]] === undefined) {
        counts[par[i]] = 1; // Inicializa a 1 si no existe
    } else {
        counts[par[i]] += 1; // Incrementa el conteo si ya existe
    }

}
console.log(counts);
