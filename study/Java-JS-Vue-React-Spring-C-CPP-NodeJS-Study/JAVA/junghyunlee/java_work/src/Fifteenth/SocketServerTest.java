package Fifteenth;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

public class SocketServerTest {
    public static void main(String[] args) {
        // 문자열을 숫자로 바꾸는 기법
        // "33333"은 문자열로 인식 되기 때문에 밑에 Integer.parseInt 가 문자열을
        // 정수 33333 으로 변경해서 int port 값으로 할당한다.
        int port = Integer.parseInt("33333");

        try {
            // 소켓이란 ? 네트워킹을 할 수 있는 클래스 객체
            // 서버 소켓 생성시 서비스 번호를 부여해야 하는데
            // 이 서비스 번호로 port(3333)을 설정했다.
            // 네트워크 포트가 16비트를 사용하므로 제한은 0 ~ 65535
            // (단, 고정된 포트를 사용하면 안됨)

            // 프로그래밍을 실행하게 되면 포트를 할당하게 된다. 그리고
            // 위의 int port는 33333으로 할당해주었기 때문에
            // 지금 만들려는 서버의 포트 넘버는 33333번이 된다.
            ServerSocket servSock = new ServerSocket(port);

            System.out.println("Server: Listening - " + port);

            // while이 없어도 돌아가는데 존재의 이유가 무엇이지??
            // while은 clinet가 1명이 아닌 다수일 수 있기때문에 항상
            // 정보를 받을 수 있도록 존재한다.
            while(true) {
                // accept()의 경우 클라이언트가 접속을 요청했는지 체크
                // (accept()는 블로킹 연산이다)

                // 결국 sock은 클라이언트 소켓을 의미하게 된다.
                // 그래서 좀 더 가독성이 좋은 코드는 Socket clntSock으로 작성하면 좋을듯
                // (전화왔을때 통화하기 슬라이드가 accept()라 보면됨)
                Socket sock = servSock.accept();

                // 접속한 클라이언트의 IP를 확인하는 코드
                System.out.println(
                        "[" + sock.getInetAddress() +
                                "] client connected"
                );

                // 출력을 위한 객체를 만듭니다.
                // 클라이언트에게 출력할 객체를 만든다.
                // accept로 수신이 활성화된 데이터가 sock 으로 할당되고
                // sock 이 OutputStream out 으로 할당하기 때문에 클라이언트에
                // 데이터를 출력할수 있게 됩니다.
                OutputStream out = sock.getOutputStream();

                // println의 결과를 out으로 전송한다라는 뜻
                // 내가 서버에 용청하는것: 출력이 아닌 입력이다.
                // 서버가 처리해서 도려주는 것: 이것이 출력이다.
                PrintWriter writer = new PrintWriter(out, true);
                // 즉 여기서 println의 출력은 클라이언트에게 간다.
                // Date()는 시간을 가져온다.
                // toString()은 문자열로 만듬.

                // 접속 상대에게 보내고 싶은 데이터를 이곳에 기로간다.
                writer.println(new Date().toString());

                // 입력: 클라이언트
                // 클라이언트가 서버에게 보낸것
                // 클라이언트의 OutputStream out 값이 할당하게 된다.
                InputStream in = sock.getInputStream();

                // 소켓을 통해 데이터를 읽은땐 무조건 아래 형식으로 진행합니다.
                // 바뀌지 않으니 항상 고정해서 사용하면 됩니다.
                // 이 버퍼에 클라이언트가 보낸 내용이 들어있다.
                BufferedReader reader =
                        new BufferedReader(new InputStreamReader(in));

                // 그러므로 rader.redLine()을 통해서
                // 내용을 읽으면 클라이언트가 보낸 내용을 출력할 수 있게 된다.

                // 클라이언트의 InputStream > reader > .readLine으로 통해서
                // 바이트 단위의 문자열을 읽어서 출력하게 된다.
                System.out.println("msg: " + reader.readLine());
            }

            // catch(어떤 예외?) - Exception은 모든 예외
        } catch (IOException e) {
            // Exception은 예외 처리로
            // I/O 예외가 발생하면 무엇인가 잘못되었음을 감지하고
            // 어디가 잘못되었는지 출력하도록 구성된다.
            // ex) 통신중에 갑자기 네트워크 불안정으로 통신이 끊기면
            //     catch가 I/O 예외를 감지하고 아래 코드가 동작하게 된다.
            // 아래 코드는 에러 메시지를 출력하는 코드로 언제나 동이랗게 작성하면 됨
            System.out.println("Server Exception: " + e.getMessage());

            // 콜 스택(매서드 호출)이 어떤식으로 이뤄졌는지 상태를 보여줌
            // 디버깅을 위해서 많이 사용하는 편
            e.printStackTrace();
        }
    }
}