const sections = ['contact', 'shipping'];

function displayShipping(sections) {
    return sections.indexOf('shipping') > -1;
}
// console.log('displayShipping : ', displayShipping);
// console.log('sections : ', sections);
console.log('sections.indexOf : ', sections.indexOf('shipping'));
console.log('sections.indexOf : ', (sections.indexOf('shipping') > -1));
