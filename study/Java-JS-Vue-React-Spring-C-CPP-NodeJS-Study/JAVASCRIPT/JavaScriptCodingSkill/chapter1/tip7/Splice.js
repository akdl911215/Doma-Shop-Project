function removeItem(items, removable) {
    const index = items.indexOf(removable);
    items.splice(index, 1);
    return items;
}

const books = ['practical vim', 'moby dick', 'the dark tower'];
console.log('book : ', books);

const recent = removeItem(books, 'moby dick');
console.log('recent : ', recent);

const novles = removeItem(books, 'practical vim');
console.log('novles : ', novles);
