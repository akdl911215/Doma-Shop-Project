const Homework1 = () => {
    const START = 1;
    const END = 20;

    for(var i = START; i <= END; i++) {
        console.info("Homework: " + i)
    }

    return (
        <div className="Homework1">
            <p>
                Homework 1
            </p>
        </div>
    )
}

export default Homework1