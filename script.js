const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// function to strip the articles with reg ex
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort( (a, b) => strip(a) > strip(b) ? 1 : -1);
   /* if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    } */

// build html with the list of bands
// map returns array, innerHTML requires a string
// convert to string with join('')
document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');

// console.log(sortedBands);