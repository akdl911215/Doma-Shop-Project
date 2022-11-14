function removeItem(items, removable) {
    const updated = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== removable) {
            updated.push(items[i]);
        }
    }
    return updated;
}

// 위의 배열을 리팩토링하면
function removeItem(items, removable) {
    const index = items.indexOf(removable);
    items.splice(index, 1);
    return items;
}
