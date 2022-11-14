function FirstEX_4() {
    var arr = new Array();
    var arr1 = new Array();
    var chk = true;
    console.log(arr1);

    for(var i = 1; i <= 15; i++){
        arr[i] = (Math.random() * 10) + 1
        console.log(i + "번 사원에게 할당된 번호 = " + arr[i])

        chk = true;

        for(i in arr){
            if(arr[i] == arr1[i]){
                chk = false;
            }
        }

        if(chk)
            arr
    }

    return (
        <div className="FirstEX_4">
            <p>
                FirstEX_2
            </p>
        </div>
    )

}

export default FirstEX_4