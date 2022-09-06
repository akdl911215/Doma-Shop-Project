import React from "react";
import ReactPlayer from "react-player";

const Board = (props) => {
  // console.log("board data : ", data, `index : ${index}`);

  console.log("props : ", props);
  // url - 가져오고 싶은 영상 url 설정
  // width, height - 가로, 세로 길이 설정해주기
  // playing - true면 자동재생
  // muted - true면 재생 되었을때 음소거 설정이 디폴트이다
  // controls - true이면 유튜브 플레이어 ui를 그대로 가져옴
  // (playing, muted 속성이 ture여야만 자동재생 함!)

  return (
    <>
      <ReactPlayer
        className="player"
        url={"해당 영상 URL"}
        width="700px"
        heigth="700px"
        playing={true}
        muted={true}
        controls={true}
      />
    </>
  );
};

export default Board;
