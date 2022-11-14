const SpreadTest2 = () => {
    let arrNum = [2, 3, 4]
    let newArrNum = [1, ...arrNum, 5]
    // 1이 먼저고 뒤쪽에 arrNum 이오고맨뒤가온
   console.log("SpreadTest2: " + arrNum)
    console.log("SpreadTest2: " + newArrNum)

    return (
        <div className="SpreadTest2">
            <p>
                SpreadTest2
            </p>
        </div>
    )
}

export default SpreadTest2