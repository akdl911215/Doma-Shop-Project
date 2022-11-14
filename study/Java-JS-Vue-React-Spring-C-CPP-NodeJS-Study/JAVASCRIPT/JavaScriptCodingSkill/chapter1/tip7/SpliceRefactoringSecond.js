function removeItem(items, removable) {
    const index = items.indexOf(removable);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const items = ['practical vim', 'moby dick', 'the dark tower', '아버지', '부의본능'];
console.log('items : ', items);
// items :  [ 'practical vim', 'moby dick', 'the dark tower', '아버지', '부의본능' ]
console.log('removeItem : ', removeItem(items, 'the dark tower'));
// removeItem :  [ 'practical vim', 'moby dick', '아버지', '부의본능' ]
