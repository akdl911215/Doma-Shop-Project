const EventEmitter = require("events");

const myEvent = new EventEmitter();
// event .addListener() 과 .on() 차이 : 두개의 기능은 같다고 추측이 됨.
// .addListener()는 원본이고 편리하기위해 사용하기 위해 만들어진 .on()이라고 봄.

// addListerner(이벤트명, 콜백) : on과 기능이 같다.
myEvent.addListener("event1", () => console.log("이벤트 1"));
myEvent.addListener("event1", () => console.log("이벤트 1 추가?"));
myEvent.addListener("event1", () => console.log("이벤트 1 계속 연결되네??"));

// on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결해준다. 이렇게 연결하는 동작을 이벤트 리스닝이라 한다.
// event2처럼 이벤트 하나에 이벤트 여러 개들 달아줄 수도 있다.
myEvent.on("event2", () => console.log("이벤트 2"));
myEvent.on("event2", () => console.log("이벤트 2 추가"));
myEvent.on("event2", () =>
  console.log(
    "이벤트 2 이것도? 그러면 on과 addListener는 같은 기능 뭔차이가 날까"
  )
);

// emit(이벤트명) : 이벤트를 호출하는 메서드. 이벤트 이름을 인자로 넣어주면 미리 등록해뒀던
// 이벤트 콜백이 실행된다.
myEvent.emit("event1");
myEvent.emit("event2");

// once(이벤트명, 콜백) : 한 번만 실행되는 이벤트이다. myEvent.emit('event3')을 두 번
// 연속 호출했찌만 콜백이 한 번만 실행된다.
myEvent.once("event3", () => console.log("이벤트 3"));
myEvent.emit("event3");
myEvent.emit("event3");

myEvent.on("event4", () => console.log("이벤트4"));
// removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거한다.
// event4가 호출되기 전에 리스너를 제거했으므로 event4의 콜백은 호출되지 않는다.
myEvent.removeAllListeners("event4");
myEvent.emit("event4");

const listener = () => console.log("이벤트5");
myEvent.on("event5", listener);
// removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거한다.
// 역시 event의 콜백도 호출되지 않는다.
// off(이벤트명, 콜백) : 노드 10 버전에서 추가된 메서드로, removeListener와 동일.
myEvent.removeListener("event5", listener);
myEvent.emit("event5");
myEvent.on("event5", listener);
myEvent.on("event5", listener);
myEvent.emit("event5");
myEvent.removeListener("event5", listener);
console.log("---------- event5는 이제 한개만 출력될거야");
myEvent.emit("event5");

// listenerCount(이벤트명) : 현재 리스너가 몇 개 연결되어 있는지 확인
console.log("event2 listenercount : ", myEvent.listenerCount("event2"));
console.log("event3 listenercount : ", myEvent.listenerCount("event3"));

/*
이벤트 1
이벤트 1 추가?
이벤트 1 계속 연결되네??
이벤트 2
이벤트 2 추가
이벤트 2 이것도? 그러면 on과 addListener는 같은 기능 뭔차이가 날까
이벤트 3
3
*/
