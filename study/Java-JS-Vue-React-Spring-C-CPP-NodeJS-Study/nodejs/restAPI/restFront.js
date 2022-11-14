function getUser() {
  // 로딩 시 사용자가 가져오는 함수

  // XMLHttpRequest(XHR) 객체는 서버와 상호작용하기 위하여 사용된다.
  // 전체 페이지의 새로고침 없이도 URL 로부터 데이터를 받아올 수 있다.
  // 이는 웹 페이지가 사용자가 하고 있는 것을 방해하지 않으면서 페이지의 일부를
  // 업데이트할 수 있도록 해줍니다. XMLHttpRequest는 AJAX 프로그래밍에 주로 사용된다.
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);
      let list = document.getElementById("list");
      // innerHTML : Element 속성(property) innerHTML 요소(element) 내에
      // 포함 된 HTML 또는 XML 마크업을 가져오거나 설정한다.
      list.innerHTML = "";
      Object.keys(users).map(function (key) {
        let userDiv = document.createElement("div");
        let span = document.createElement("sapn");
        span.textContent = users[key];
        let edit = document.createElement("button");
        edit.textContent = "수정";
        edit.addEventListener("click", function () {
          // 수정 버튼 크릭
          let name = prompt("바꿀 이름을 입력하세요");
          if (!name) {
            return alert("이름을 반드시 입력하셔야 합니다");
          }
          let xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open("PUT", "/users" + key);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify({ name: name }));
        });

        let remove = document.createElement("button");
        remove.textContent = "삭제";
        remove.addEventListener("click", function () {
          // 삭제 버튼 클릭
          let xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open("DELETE", "/users/" + key);
          xhr.send();
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);

        console.log("list ::: ", list);
        list.appendChild(userDiv);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("GET", "/users");
  xhr.send();
}

window.onload = getUser; // 로딩 시 getUser 호출
// 폼 제출
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = e.target.username.value;

  if (!name) {
    return alert("이름을 입력하세요");
  }
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open("POST", "/users");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ name: name }));
  e.target.username.value = "";
});
