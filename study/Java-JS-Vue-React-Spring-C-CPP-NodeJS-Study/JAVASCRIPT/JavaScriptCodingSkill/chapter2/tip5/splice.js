const updateds = ['a', 'b', 'c', 'd', 'e']
console.log('updateds : ', updateds)

function removeItem(items, removable) {
    const index = items.indexOf(removable)
    items.splice(index, 1)
    console.log('items : ', items)
    return items
}

console.log('removeItem : ', removeItem(updateds, 3))