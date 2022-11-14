function JsonDataType() {

    var person = {
        name: "Jaemin",
        major: "Social Welfare",
        minor: "Counseling psychology",
        numOfRepo: 200
    } // 이중 작성 가능(Json타입)

    console.log("JsonDataType:" + person)


    return (
        <div className="JsonDataType">
            <p>

                {person.name}, {person.major}<br/>
                {person.minor},{person.numOfRepo}<br/>

            </p>

        </div>
    )
}

export default JsonDataType