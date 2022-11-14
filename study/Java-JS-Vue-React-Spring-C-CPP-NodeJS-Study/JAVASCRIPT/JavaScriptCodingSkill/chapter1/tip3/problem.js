function addClick(items) {
    for (var i = 0; i < items.legnth; i++) {
        items[i].onClick = function () {
            return i;
        };
    }
    return items;
}
const example = [{}, {}];
const clickSet = addClick(example);
clickSet[0].onClick();
console.log('clickSet : ', clickSet);
console.log('clickSet[0].onClick : ', clickSet[0].onClick);
