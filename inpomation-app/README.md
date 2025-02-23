
# 투자 포트폴리오 관리 및 투자 자료 습득 등 투자자들을 위한 프로젝트

<br><br>
Skill Speccification : Node.js, Express, Mariadb, React, Reudx, Saga, Jwt Token <br>
현재 구현 기능 : 유저 관련 기능, 유튜브 관련기능, 포트폴리오 관련 기능, 공공데이터 관련 기능, 유저 커뮤니티 

<br>



--------------------------------------------------------------------------------------------


<br><br>
- 유저
<br>
1. 유저 회원가입

![signup-ver2-2](https://user-images.githubusercontent.com/76759835/196038316-f0e660e0-478f-46af-9c2d-2acfc70f15c5.gif)


<br><br>
2. 유저 로그인 및 jwt토큰 사용으로 로그인 및 auth 체크

![signin](https://user-images.githubusercontent.com/76759835/194575061-e465cf1b-da2a-4a81-af8b-fa7b8a386530.gif)




<br><br>
3. 마이페이지 개인정보 수정


![usermodify](https://user-images.githubusercontent.com/76759835/194575095-b01494d2-2f72-46d1-a6fb-f70d73e67339.gif)


<br><br>
4. admin 페이지에서 회원정보 관리 및 탈퇴기능, 페이지네이션, 검색 기능 구현


![list](https://user-images.githubusercontent.com/76759835/194712707-7364fc65-69ab-4467-99d8-4ec044631305.gif)



<br><br>

-----------------------------------------------------------------------------



<br><br>
- 유튜브 관련 기능

메인페이지 <br>
상단의 영상 3개는 최신 업로드 영상, <br>
하단의 영상 3개는 좋아요 버튼 점수 TOP3 업로드 영상 구현 : 현재날짜 기준 3일 이하 3점, 7일 이하 2점, 그외 1점 가중치
<img width="691" alt="1" src="https://user-images.githubusercontent.com/76759835/196038535-8c333403-3bbf-4d8e-86ea-dc7cbc7917d0.PNG">

<br><br>

1. 메인페이지 최근업로드 영상 3개 리스트 : 올라온 영상 중 최신 3개의 영상을 볼 수 있게 구현,<br>
                                        올라온 영상 중 유저들이 좋아요 눌른 점수 TOP3 볼 수 있게 구현 <br>
   전체리스트 : 전체 영상 보러가기 > 탐색 페이지가 기본적으로 보여지게 노출 구현 (탐색 페이지가 모든 유저들이 올려놓은 전체 리스트), <br>
   유튜브 API를 사용한 등록 및 재등록 : 유튜브에서 지원하는 API를 사용해서 등록,<br>
                                     전체리스트, 메인리스트, 내영상에 노출 구현 및 등록된 영상은 업로드 불가하게 구현 및 내영상 삭제 기능 구현

![youtube01-s1](https://user-images.githubusercontent.com/76759835/189476730-f0171855-3a2e-4859-9f9a-bb7c50066885.gif)




<br><br>
2. 유튜브 영상 시청 : 클릭하면 유튜브 영상 시청 가능하게 구현

![youtube02-2](https://user-images.githubusercontent.com/76759835/189476339-bb953f45-9773-4304-9961-1d99fc875dc8.gif)



<br><br>
3. 어드민 페이지에서 MASTER 권한으로 삭제 : 어드민 페이지 접근 가능한 MANAGER, MASTER 권한 중 삭제의 권한은 MASTER에게만 가능하도록 구현,<br>
                                         추가적으로 검색 기능, 페이지네이션 기능 구현

![youtube03-1](https://user-images.githubusercontent.com/76759835/189476568-fffa79b8-7920-4790-91ce-575665048d15.gif)


<br><br>
4. 유튜브 업로드 탭 검색 : 유튜브 API사용으로 실시간으로 유튜브 영상 검색<br>
   유튜브 탐색 탭 검색 : 전체 리스트에서 원하는 영상 검색<br>
   유튜브 내 동영상 탭 검색 : 내 동영상 리스트에서 원하는 영상 검색<br>
   
   
![youtubeSearch](https://user-images.githubusercontent.com/76759835/189675755-ce790666-e68e-49b5-878c-052b2c39ea57.gif)


<br><br>
5. 유튜브 like, unlike 기능 : 유튜브 영상을 다른 투자자들에게도 추천해줄 만하다면 좋아요를 눌러줄 수 있는 기능.
                             다시 한번 누르면 좋아요 취소 기능. 
                             

![like-unlike](https://user-images.githubusercontent.com/76759835/196680946-1fa81302-d413-4c6f-9901-9ff93022ade5.gif)
                      
<br><br>
6. 유튜브 좋아요 랭킹 기능 : 제일 최신에 업로드 영상을 인기 TOP3 영상에서 좋아요 눌러 1위로 올라가는 기능.

![rangking-ver2](https://user-images.githubusercontent.com/76759835/196683443-7e1dd52a-1959-4973-b243-598b24e9fc7b.gif)


<br><br>
7. 관리자 유튜브 리스트 관리 페이지 기능 : 유튜브 전체 영상 리스트, 페이지네이션, 검색, 삭제 기능 구현.

![admin-list](https://user-images.githubusercontent.com/76759835/196928648-655c2874-c18f-4812-8efe-4df542d146c2.gif)


<br><br>
-----------------------------------------------------------------------------------------

<br><br>
- 포트폴리오 관련 기능
1. 현금 및 자산 포트포리오 비중 관리 기능 : 투자할 떄 중요한 현금과 자산의 포트폴리오 비중 금액 및 비율을 실시간 반영하도록 구현 

![cashVsAsset-g](https://user-images.githubusercontent.com/76759835/189477370-8c8e4921-b938-48bc-9fb9-48e0abf554c2.gif)




<br><br>
2. 자산 비율 비중 기능 : 가지고 있는 자산의 금액, 비율들을 반영할 수 있도록 등록, 삭제, 변경 구현 

![assetRate-g](https://user-images.githubusercontent.com/76759835/189477376-02fcd34e-df15-410c-8da7-f1e85a69f57c.gif)


<br><br>
------------------------------------------------------------------------------------------
<br><br>


- 공공데이타 API 관련 기능


<br><br>

1. 시도별 수출입 실적 : 공공데이타 API를 사용하여 원하는 기간의 데이터를 받아서 볼 수 있도록 구현

![시도별수출입실적](https://user-images.githubusercontent.com/76759835/189524359-6a4d2c59-bfa5-4a28-a286-be318f7255e9.gif)

<br><br>

2. 시도별 품목별 수출입 실적 : 공공데이타 API를 사용하여 원하는 기간의 데이터를 받아서 볼 수 있도록 구현

![시도별품목별수출입실적](https://user-images.githubusercontent.com/76759835/189524368-8ca17df3-aead-4ec9-a211-5401156c468e.gif)

<br><br>

3. 시도별 성질별 수출입 실적 : 공공데이타 API를 사용하여 원하는 기간의 데이터를 받아서 볼 수 있도록 구현

![시도별성질별수출입실적](https://user-images.githubusercontent.com/76759835/189524377-c0adcc76-463e-4eea-9cae-9e34b26124c8.gif)

<br><br>
-----------------------------------------------------------------------------------------

<br><br>
- 유저 커뮤니티 관련 기능

<br><br>
1. 게시판 리스트 읽기 및 댓글 달기
   - 로그인 안했을 경우 : 게시판 읽기 가능, 글 작성 불가능
   - 로그인 했을 경우 : 게시판 읽기 가능, 글 작성 가능, 댓글 작성 가능
    
 ![read-comment](https://user-images.githubusercontent.com/76759835/194712995-96b3e257-2743-4e82-b293-4cd505f6b88c.gif)

  <br><br>
2. 댓글 추가 및 삭제 : 기본적으로 자기 댓글만 추가 및 삭제 가능 (예외: 마스터 권한은 삭제가능)

![comment-register-delete](https://user-images.githubusercontent.com/76759835/194763512-ed01ed2f-dde5-4554-a555-7d88d6081e81.gif)


  <br><br>
3. 게시판 삭제 : 앞부분 - user는 본인 게시물 삭제 O / 타인 게시물 삭제 X
                뒷부분 - master는 본인 게시물 삭제 O / 타인 게시물 삭제 O
                
            
![board-delete-ver2](https://user-images.githubusercontent.com/76759835/196374540-371bde48-748d-4e5e-bf11-43d5b3a3d2ad.gif)
       


  <br><br>
4. 게시판 작성 : 로그인 후 게시글 작성 및 댓글 작성

![board-register-ver2](https://user-images.githubusercontent.com/76759835/196376743-eb0f61b0-4bc3-4fd4-a967-25f525bb717c.gif)


  <br><br>
 
