// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name) {
    const allCats = [name, ...cats];
    return allCats;
}

function removeLastCat() {
    const removeLastCat = cats.slice(0, 2); 
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1); 
    return removeFirstCat;
}