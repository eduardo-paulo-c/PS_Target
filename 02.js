function count(str) {
    const matches = str.match(/a/gi);
    
    if (matches) {
        console.log(`A letra 'a' aparece ${matches.length} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

let str = "Texte para o PS da Target.";
count(str);
