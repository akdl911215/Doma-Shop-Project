function TypeOf(){

    return (
        <div className="IfTest">
            <p>

                IfTest Works Fine!

            </p>
            <p>
                {typeof " "}, {typeof "test"}, {typeof 0}, {typeof 3.14}, <br/> // 숫자가 들어간다면 number로
                {typeof true}, {typeof undef}, {typeof undefined}, {typeof null} //값이 없으면 null(object로 보임), <br/>
                {typeof {name: 'test', major: 'EE'}}, {typeof [1,2,3,4]},
                {typeof function test(){}}<br/>

            </p>

        </div>
    )
}

export default TypeOf