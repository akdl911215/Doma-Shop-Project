const CustomMathTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    function myFindArrMax(arr) {
        // 어떤 배열이 오드라도 배열의 길이값을 알아야 한다.
        let len = arr.length
        let max = -Infinity;

        // len -- 될때까
        while(len--) {
            if(arr[len] > max) {
                max = arr[len]
            }
        }

        return max
    }

    function myFindArrMin(arr) {
        let len = arr.length
        let min = Infinity

        while(len--) {
            if(arr[len] < min) {
                min = arr[len]
            }
        }

        return min
    }

    return(
        <div className="CustomMathTest">
            <p>
                 Custom Math Test
            </p>
        </div>
    )
}

export default CustomMathTest