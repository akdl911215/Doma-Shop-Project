const items = ['a', 'b', 'c', 'd', 'e']
console.log('items : ', items)

function removeItem(items, removable) {
    const updated = [];
    for (let i = 0; i < items.length; i++){
        console.log('items[i] !== removable : ', items[i] !== removable)
        console.log('items[i] :  ', items[i])
        console.log('removable : ', removable)
        if(items[i] !== removable){
        updated.push(items[i])
        
    }


}
console.log('updated : ', updated)
    return updated;
}
console.log('removeItem : ', removeItem(items, 3))