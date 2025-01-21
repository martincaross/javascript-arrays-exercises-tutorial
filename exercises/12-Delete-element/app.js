let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
function deletePerson(person){

    let newPeople = people.filter((element) => element !== person);

    return newPeople

}
//let deletePerson = people.filter((element) => element === 'daniela' || element === 'juan' || element === 'emilio');

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
