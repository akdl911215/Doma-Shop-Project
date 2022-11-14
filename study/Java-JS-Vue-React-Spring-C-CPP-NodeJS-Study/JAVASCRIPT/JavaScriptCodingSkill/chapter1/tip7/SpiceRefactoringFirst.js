function removeItem(items, removable) {
    const index = items.indexOf(removable);
    return items.slice(0, index).concat(items.slice(index + 1));
}

const items = ['practical vim', 'moby dick', 'the dark tower', '아버지', '부의본능'];
console.log('items : ', items);
// items :  [ 'practical vim', 'moby dick', 'the dark tower', '아버지', '부의본능' ]
console.log('removeItem : ', removeItem(items, 'the dark tower'));
// removeItem :  [ 'practical vim', 'moby dick', '아버지', '부의본능' ]

// const books = ['practical vim', 'moby dick', 'the dark tower'];
// console.log('book : ', books);

// const recent = removeItem(books, 'moby dick');
// console.log('recent : ', recent);

// const novles = removeItem(books, 'practical vim');
// console.log('novles : ', novles);
