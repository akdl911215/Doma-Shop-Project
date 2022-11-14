package Eighth;

class GameStart{
    public void GamePlayerFirst(){
        System.out.printf("컴퓨터와 가위 바위 보 게임을 시작합니다.\n");
        System.out.printf("1.가위 2.바위 3.보\n");

        int ComputerPlayer = 0, Gameplayer = 0;
        Gameplayer = (int) (Math.random() * 3) + 1;
        ComputerPlayer = (int) (Math.random() * 3) + 1;
        System.out.printf("게임플레이어가 선택하셨습니다 = %d\n", Gameplayer);
        System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);

        while (Gameplayer == 1) {
            if (ComputerPlayer == 1) {
                System.out.println("무승부 입니다.");
            } else if (ComputerPlayer == 2) {
                System.out.println("컴퓨터의 승리입니다.");
            } else if (ComputerPlayer == 3) {
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            }
            break;
        }

        while (Gameplayer == 2) {
            if (ComputerPlayer == 1) {
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            } else if (ComputerPlayer == 2) {
                System.out.println("무승부 입니다.");
            } else if (ComputerPlayer == 3) {
                System.out.println("컴퓨터의 승리입니다.");
            }
            break;
        }

        while (Gameplayer == 3) {
            if (ComputerPlayer == 1) {
                System.out.println("컴퓨터의 승리입니다.");
            } else if (ComputerPlayer == 2) {
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            } else if (ComputerPlayer == 3) {
                System.out.println("무승부 입니다.");
            }
            break;
        }
    }



    public void GamePlayerSecond(){
        System.out.printf("컴퓨터와 가위 바위 보 게임을 시작합니다.\n");
        System.out.printf("1.가위 2.바위 3.보\n");

        int ComputerPlayer = 0, Gameplayer = 0, Result = 0;
        Gameplayer = (int) (Math.random() * 3) + 1;

        while (Gameplayer == 1) {
            Result = Gameplayer;
            System.out.printf("게임참가자가 선택하셨습니다 = %d\n", Result);
            Result = (int) (Math.random() * 3) + 1;

            ComputerPlayer = (int) (Math.random() * 3) + 1;
            if (ComputerPlayer == 1) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("무승부입니다. 다시 선택하세요");
                continue;
            } else if (ComputerPlayer == 2) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("컴퓨터의 승리입니다.");
            } else if (ComputerPlayer == 3) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            }
            break;
        }

        while (Gameplayer == 2) {
            Result = Gameplayer;
            System.out.printf("게임참가자가 선택하셨습니다 = %d\n", Result);
            Result = (int) (Math.random() * 3) + 1;

            ComputerPlayer = (int) (Math.random() * 3) + 1;
            if (ComputerPlayer == 1) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            } else if (ComputerPlayer == 2) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("무승부입니다. 다시 선택하세요");
                continue;
            } else if (ComputerPlayer == 3) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("컴퓨터의 승리입니다.");
            }
            break;
        }

        while (Gameplayer == 3) {
            Result = Gameplayer;
            System.out.printf("게임참가자가 선택하셨습니다 = %d\n", Result);
            Result = (int) (Math.random() * 3) + 1;

            ComputerPlayer = (int) (Math.random() * 3) + 1;
            if (ComputerPlayer == 1) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("컴퓨터의 승리입니다.");
            } else if (ComputerPlayer == 2) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("[축!!]게임참가자가 승리하셨습니다! 승리를 자축하세요! 빠바밤!![축]");
            } else if (ComputerPlayer == 3) {
                System.out.printf("컴퓨터도 선택하셨습니다 = %d\n", ComputerPlayer);
                System.out.println("무승부입니다. 다시 선택하세요");
                continue;
            }
            break;
        }
    }
}

public class EightHomeWork5 {
    public static void main(String[] args) {
        // 컴퓨터와 가위 바위 보 게임을 할 수 있도록 프로그램을 만들어보자!
        GameStart gs = new GameStart();
        gs.GamePlayerFirst();

    }
}
