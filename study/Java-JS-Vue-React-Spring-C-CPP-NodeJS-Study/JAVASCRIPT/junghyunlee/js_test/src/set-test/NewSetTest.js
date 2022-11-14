const NewSetTest = () => {

    let setData = new Set()
    console.log(setData)
    // 출력 : Set(0) { }
    //        아무런 데이터 값이 없기 때문에 안뜬다.

    let setData2 = new Set()
    setData2.add(1)
    setData2.add("betazon")
    console.log(setData2)
    // 출력 : Set(2) {1, "betazon"}


    return (
        <div className="NewSetTest">
            <p>NewSetTest</p>
        </div>
    )
}

export default NewSetTest