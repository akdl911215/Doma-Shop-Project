const sections = ['shipping'];

function displayShipping(sections) {
    if (sections.indexOf('shipping')) {
        console.log('여기 안들어오지?');
        return true;
    }
    return false;
}
console.log('sections.indexOf : ', sections.indexOf('shipping'));
// console.log('sections : ', sections);
