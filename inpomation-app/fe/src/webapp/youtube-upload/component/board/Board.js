import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import styles from "../../style/board/Board.module.css";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const { data } = useSelector(({ YoutubeReducer }) => ({
    data: YoutubeReducer?.YoutubeBoardInitial,
  }));
  console.log("String(data) : ", String(data), ", ", typeof String(data));
  localStorage.setItem("dataUrl", String(data?.data?.url));

  // useEffect(() => {
  //   if (sessionStorage.getItem('dataUrl'))
  // }, []);

  // url - 가져오고 싶은 영상 url 설정
  // width, height - 가로, 세로 길이 설정해주기
  // playing - true면 자동재생
  // muted - true면 재생 되었을때 음소거 설정이 디폴트이다
  // controls - true이면 유튜브 플레이어 ui를 그대로 가져옴
  // (playing, muted 속성이 ture여야만 자동재생 함!)

  return (
    <>
      <div className={styles.container}>
        <ReactPlayer
          className="player"
          url={
            localStorage.getItem("dataUrl") === null ||
            localStorage.getItem("dataUrl") === undefined
              ? data?.data?.url
              : localStorage.getItem("dataUrl")
          }
          width="100%"
          heigth="100%"
          playing={true}
          muted={true}
          controls={true}
        />
        <div>
          <div>{data?.data?.title}</div>
          <div>작성자 : {data?.data?.username}</div>
        </div>

        <div className={styles.commentBox}>
          <header>
            <h3>Comments</h3>
          </header>
          <hr />
          <input className={styles.commmetInput}></input>
        </div>

        <Comment.Group>
          <Header as="h3" dividing>
            Comments
          </Header>

          <Form reply>
            <Form.TextArea />

            <Button content="댓글" labelPosition="left" icon="edit" primary />
          </Form>

          <Comment>
            <Comment.Avatar src="/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src="/images/avatar/small/elliot.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src="/images/avatar/small/jenny.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src="/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </div>
    </>
  );
};

export default Board;
