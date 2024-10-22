function stringing(string) {
    let splitstring = string.split('');
    let revstring = splitstring.reverse();
    let joinstring = revstring.join('');
    
    if (string == joinstring) {
        console.log('yes');
    } else {
        console.log('no');
    }
}  let string = prompt("enter:")
stringing(string);