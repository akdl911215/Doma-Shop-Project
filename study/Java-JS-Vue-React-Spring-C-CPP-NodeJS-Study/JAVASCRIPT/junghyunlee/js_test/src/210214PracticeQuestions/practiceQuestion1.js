var say = 'Hello';

function print() {
    console.log(say)
    var say = 'World'
    console.log(say)

    function inner_print() {
        console.log(say)
        var say = 'Good'
        console.log(say)
        say = 'Bye'
        console.log(say)
    }

    inner_print()
}

print()

// 1.log = x
// 2.log = Good
// 3.log = Bye
// 4.log = x
// 5.log = World

// 결과는 모르네;..;;