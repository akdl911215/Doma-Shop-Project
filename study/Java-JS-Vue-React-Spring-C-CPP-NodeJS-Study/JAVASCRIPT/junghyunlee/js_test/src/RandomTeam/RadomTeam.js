const RandomTeam = () => {
    //
    let teamA = [
        "최현정", "오진욱", "류슬기", "장해솔", "조진형",
        "이정현", "고동영", "박재민", "한다은"
    ]
    let teamB = [
        "최임식", "탁성진", "하진주", "이범진",
        "이승윤", "박기범", "박소현", "노찬욱"
    ]

    let lenA = teamA.length
    let lenB = teamB.length

    // 각 조의 1,2 팀을 나누기 위해서
    let res1 = []
    let res2 = []


    const ERROR = -1

    let randArrIdx
    let randArrIdxA
    let randArrIdxB


    let i

    // A팀의 배열길이 확인
    console.log("A팀의 배열의 길이 값 = %d", lenA)

    let aTeam = teamDistinguish(teamA)
    let bTeam = teamDistinguish(teamB)
    // 팀요소 = 이름(식별), 숫자,
    // 예를들어  A조 , 9
    // 중복검사
    function teamDistinguish(team) {
        let res = []
        let totalLen = team.length

        for(i = 0; i < totalLen; ) {
            randArrIdx = Math.floor(Math.random() * totalLen)

            if(res.indexOf(teamA[randArrIdx]) == ERROR) {
                res.push(teamA[randArrIdxA])
                console.log("res1: %d - %s", i, team[i++])
            }
        }

        return team
    }



    function printTeamDistinguish() {
        console.log("aTeam 출력 : " + aTeam)
        console.log("bTeam 출력 : " + bTeam)
    }

    printTeamDistinguish()

    return (
        <div className="RandomTeam">
            <p>
                Random Test
            </p>
        </div>
    )
}

export default RandomTeam