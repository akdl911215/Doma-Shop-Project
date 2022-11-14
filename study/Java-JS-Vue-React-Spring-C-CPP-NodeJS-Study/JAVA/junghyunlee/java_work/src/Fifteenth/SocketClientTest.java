package Fifteenth;

import java.io.*;
import java.net.Socket;
import java.net.UnknownHostException;

public class SocketClientTest {
    public static void main(String[] args) {
        // 내가 접속할 서버의 IP 주소를 적습니다.
        String hostname = "192.168.0.35";
        String hostname2 = "192.168.0.9";
        // 서버에 여러 서비스가 있을 수 있는데
        // 그 중에서 내가 사용하고자 하는 서비스의 포트 번호를 적습니다.

        // 33333을 입력한 이유는 SocketServerTest의 포트번호에 접속한듯 하다.
       int port = 33333;

        for(int i = 0; i < 10; i++) {
            try {
                // Socket 객체를 할당해서
                // 서버의 IP, 포트 번호를 가지고 접속을 요청합니다.
                // 서버에 대한 소켓을 획득하게 됩니다.
                // 이 요청이 들어갈때 서버의 accept()가 동작하게 됩니다.
                // 예를 들자면 이 행위는 전화를 거는것과 같다.
                // (서버쪽 주석을 살펴보면 감이 더 잘 올 것이다.)
                Socket sock = new Socket(hostname, port);

                // 서버의 출력을 획득 > 서버쪽에서 밑에 코드랑 동일한
                // 코드로 출력을 하기때문에 클라이언트요청하기 때문에
                // 동일한 코드로 수신할 준비를 설정하는 것으로 생각 한다.
                // 그렇기때문에 강사님이 밑에 주석같이 말씀하신듯 하다.
                // 즉 서버가 수신하게 만들도록 설정을 해주는 것
                OutputStream out = sock.getOutputStream();

                // 서버의 포트 33333에 연결해서 요청과 출력을 가능하게 만든 후
                // "Hello Network Programming" 을 String 으로 전송한다.
                String str = "Hello Network Programming";

                // 위의 문자열을 바이트 단위로 쪼개서 서버로 전송한다.

                // getBytes은 유니코드 문자열(String)을 바이트코드로 인코딩 해주는 메소드
                // 만약 getBytes()의 인자로 캐릭터셋을 넘기지 않으면 사용자 플랫폼의 기본
                // charset으로 인코딩 된다.

                // 바이트코드로 인코딩 해주는 메소드를 사용하는 이유는 스트링자체를 넘겨서
                // 바이트가 손상이 나면은 복원을 할 수 없기 때문이다.
                // 예를 들어서 1.234f 라는 실수가 int 형으로 변환이 되면 1이 될것이고
                // 이것이 다시 flaot형으로 변환된다면 1.0f가 되는것과 같은 이치라고 생각된다.
                out.write(str.getBytes());

                // 서버의 입력을 생성(수신)
                InputStream in = sock.getInputStream();
                BufferedReader reader = new BufferedReader(new InputStreamReader(in));

                // 서버가 보낸 내용을 time에 저장하고 출력한다.
                String time = reader.readLine();
                System.out.println(time);

                // UnknownHostException: 내가 접속하려는 IP를 찾지 못할 때때
            } catch (UnknownHostException e) {
                System.out.println("Server Not Found : " + e.getMessage());
            } catch (IOException e) {
                System.out.println("I/O Error: " + e.getMessage());
            }
        }
    }
}

// 네트워크 프로그래밍을 수행하는데 가장 중요한 것은 IP 주소에 대한 개념이다.

// IP 주소에는 크게 2가지가 있다.

// 1) 사설 IP
// 이 녀석의 특징은 192.168로 시작하는 주소를 가진다는 것입니다.
// 이것은 특정한 지역에 있는 로컬망을 위한 주소입니다.
// ( 로컬망이란? 외부로 나갈 순 없지만 내부에서 통신이 활용이 가능 )

// 2) 공인 IP

// 우리가 네이버, 다음, 구글에 접속하기 위해서는 반드시 공인 IP가 필요합니다.
// 공인 IP가 없으면 인테넷에 접속이 불가능합니다.

// ???? 뭐지 ? 지금 우리는
// 192.168이라는 주소값을 가지고 인터넷을 하고 있지 않나요 ?

// 공유기) 고융기는 NAT 프로토콜을 사용해서 사설망의 IP를 공인 IP로 변환하여
//        인터넷을 사용할 수 있게 합니다.

// 학원) 스위치 혹은 라우터가 존재한다.
//       굉장한 고가의 스위치로는 L$ 스위치가 존재한다.

// 기본적인 스위치의 동작 과정)
// ifconfig를 입력하면 아래와 같은 정보가 나타날 것이다.

// enp2s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
//        inet 192.168.0.41  netmask 255.255.255.0  broadcast 192.168.0.255
//        inet6 fe80::6c90:d7b4:2b22:f8d5  prefixlen 64  scopeid 0x20<link>
//        ether 9c:7b:ef:48:de:29  txqueuelen 1000  (Ethernet)
//        RX packets 137394  bytes 106948462 (106.9 MB)
//        RX errors 0  dropped 0  overruns 0  frame 0
//        TX packets 112775  bytes 29434104 (29.4 MB)
//        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

// ehter라고 표시된 부분이 바로 그 유명한 MAC 주소입니다.
// MAC 주소를 보고 내가 어디로 가야하는지를 파악합니다.
// IP 주소는 사설망에 의해 같은 주소가 많이 생길 수 있지만
// MAC 주소는 유일무이하다.
// 그러므로 이것은 털리면 해킹당할 수 있다.

// 로컬망의 동작 방식

//   192.168.0.09 < --- switch --- > 192.168.0.202
// xx:7b:ef:48:de:29               yy:7b:ef:48:de:29

// 특수한 스위치(L4)의 경우

// 네이버, 구글 <---> switch(L4) <---> router <---> switch <---> 우리의 사설망

// 스위치는 기본적으로 내부망(로컬망) 전용이므로
// "야~ 난 이거 못하니까 잘 하는 라우터한테 토스할게"
// 라우터가 내용을 받고 자신의 라우팅 테이블을 확인합니다.

// 리눅스 명령어로는 route를 입력하면 내용을 확인할 수 있습니다.
// 라우터는 기본적으로 IP 주소를 보고 내가 어디로 가야하는지를 알 수 있습니다.

// L4 스위치는 포트 번호까지 포함해서 데이터를 송수신 할 수 있습니다.
// 포트 번호란 ? 서비스의 종류를 나타내는 번호다.

// netstat -ntlp 명령어를 통해
// 현재 컴퓨터에서 사용되는 서비스(포트 번호) 리스트를 얻을 수 있다.

// 실행하면 아래와 같은 결과를

// netstat -ntlp
//        (Not all processes could be identified, non-owned process info
//        will not be shown, you would have to be root to see it all.)
//        Active Internet connections (only servers)
//        Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
//        tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      -
//        tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      -
//        tcp6       0      0 127.0.0.1:63342         :::*                    LISTEN      10027/java
//        tcp6       0      0 127.0.0.1:42675         :::*                    LISTEN      10027/java
//        tcp6       4      0 :::33333                :::*                    LISTEN      11949/java
//        tcp6       0      0 127.0.0.1:35189         :::*                    LISTEN      10027/java
//        tcp6       0      0 ::1:631                 :::*                    LISTEN      -
//        tcp6       0      0 127.0.0.1:6942          :::*                    LISTEN      10027/java
//        tcp6       0      0 127.0.0.1:35905         :::*                    LISTEN      10027/java
//
//        케이스 비교를 위해 새로운 서비스를 띄워보도록 하겠습니다.
//        대표적인 보안 통신 서비스인 ssh를 사용해보도록 합니다.
//
//        sudo apt-get install openssh-server
//
//        설치 이후에 22번이 새롭게 추가된 것을 볼 수 있을 것이다.
//        22가 바로 ssh(보안 통신) 서비스 포트 번호에 해당한다.
//
//        netstat -ntlp
//        (Not all processes could be identified, non-owned process info
//        will not be shown, you would have to be root to see it all.)
//        Active Internet connections (only servers)
//        Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
//        tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN      -
//        tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -
//        tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      -
//        tcp6       0      0 127.0.0.1:63342         :::*                    LISTEN      10027/java
//        tcp6       0      0 127.0.0.1:42675         :::*                    LISTEN      10027/java
//        tcp6       4      0 :::33333                :::*                    LISTEN      11949/java
//        tcp6       0      0 127.0.0.1:35189         :::*                    LISTEN      10027/java
//        tcp6       0      0 :::22                   :::*                    LISTEN      -
//        tcp6       0      0 ::1:631                 :::*                    LISTEN      -
//        tcp6       0      0 127.0.0.1:6942          :::*                    LISTEN      10027/java
//        tcp6       0      0 127.0.0.1:35905         :::*                    LISTEN      10027/java
//
//        포트 번호는 아무렇게나 할당해도 되나요 ?
//
//        1) 그때그때 다릅니다.
//        고정된 포트를 번호를 가진 서비스들이 존재함
//        (ssh: 22, http: 80, ftp: 20, 21, telnet: 23 https: 443 등등)
//        이런 고정된 포트는 할당하면 다른 서비스들과 충돌을 유발하게 될 것이다.
//
//        결국 현재 포트 번호를 보면 내가 어떤 서비스에 접근해야하는지를 알 수 있게 된다.
//
//        서버와 클라이언트 개념은 무엇인가 ?
//
//        Server(서버): 서비스를 제공하는 사람: 서비스를 제공하는 측
//        programmer(프로그래머): 프로그램을 만드는 사람
//
//        요청을 하면 ? 클라이언트
//        요청을 처리하면 ? 서버
