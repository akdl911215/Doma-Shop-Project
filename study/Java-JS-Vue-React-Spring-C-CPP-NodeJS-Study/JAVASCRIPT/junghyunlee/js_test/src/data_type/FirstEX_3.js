function FirstEX_3() {
    var arr = new Array();
    for(var i = 1; i <= 15; i++){
        arr[i] = (Math.random() * 10) + 1
            console.log("%d번 사원에게 할당된 번호 = %d", i, arr[i])
    }

    return (
        <div className="FirstEX_3">
            <p>
                FirstEX_3
            </p>
        </div>
    )

}

export default FirstEX_3