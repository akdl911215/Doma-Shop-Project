// 연습 문제 : 팀 로또?!
// 참가자는 총 1000명이다.
// 참가자들은 이 로또 배틀에 참여하기 위해 각자 1000만원을 지불한다.
// 참가자들은 1 ~ 10000 사이의 숫자를 할당 받는다.
// 팀원은 랜덤하게 4명씩 짝을 짓는다(총 250개의 팀)
// 로또 당첨은 1013의 배수를 뽑은 사람이 이긴것으로 간주한다.

// 배당금은 아래 원칙에 따라 지급한다.
// 모든 팀원이 로또에 당첨된 경우: 승리 수당 배수가 2^4 으로 16배가 뛴다.
// 팀원중 3명이 당첨된 경우: 승리 수당 배수가 2^3 으로 8배가 뛴다.
// 팀원중 2명이 당첨된 경우: 승리 수당 배수가 2^2 으로 4배 뒨다.
// 팀원중 1명이 당첨된 경우: 원래 수당 그대로 받는다.

// 주최측은 무조건적으로 전체 비용의 33%를 가져간다.
// 승리팀의 상태를 출력하고 승리 수당을 분배하여 표시하도록 한다.

// 총 금액 100억
// 주최측 33억 플레이어 67억
// 플레이어들은 1 ~ 10000 까지의 랜덤숫자를 받는다.
// n % 1013 == 0 일때 당첨
// 팀원이 1명 당첨수가 증가할 수록 2^n ( 2^1 ~ 2^4 )

const DarkWeb = () => {
    // totalNum = 10000000 * 1000
    class Money {
        constructor(inputNum, playerNum) {
            this.inputNum = inputNum
            this.playerNum = playerNum
            this.totalNum = this.inputNum * this.playerNum
            this.organizerNum =  (this.totalNum / 33) + (this.totalNum % 33)
        }
    }

    let money = new Money()

    console.log("totalNum" + money.totalNum)
    console.log("organizerNum" + money.organizerNum)
    console.log("this.totalNum" + money.totalNum)

    function playerRandNum(){
        let player = [money.playerNum]
        console.log("[money.playerNum] = " + player)
        let totalLen = player
        console.log("totalLen = " + totalLen)

        for(var i = 0; i < totalLen; i++) {
            let totalNum = Math.floor((Math.random() * 1000) + 1)

        }
    }

    return(
        <div className="DarkWeb">
            <p>
                Dark Web
            </p>
        </div>
    )
}

export default DarkWeb