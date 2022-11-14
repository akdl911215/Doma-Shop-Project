const GetDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2) //error, resolt
        } else {
            callback('Number must be provided')
        }
    }, 2000)

    return (
        <div className="GetDataCallback">
            <p>GetDataCallback</p>
        </div>
    )
}
export default GetDataCallback