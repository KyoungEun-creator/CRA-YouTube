import React from "react";
import { styled } from "styled-components";
import WatchCommentItem from "../Components/WatchCommentItem";

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentsCount = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
`
const AddComment = styled.div`
  width: 930px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`
const CommentWriter = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
const WriteComment = styled.input`
  flex-grow: 1;
`

const WatchCommentsContainer = () => {

    const commentsListData = [
        {
            id: "comment_1",
            channelProfileImgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj",
            channelName: "조경은",
            commentUpload: "2023. 11. 16.",
            commentContent: "넘 좋아요",
        },
        {
            id: "comment_2",
            channelProfileImgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj",
            channelName: "최민석",
            commentUpload: "2020. 11. 22.",
            commentContent: "굿굿",
        },
        {
            id: "comment_3",
            channelProfileImgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj",
            channelName: "방준연",
            commentUpload: "2022. 7. 16.",
            commentContent: "나이스 샷",
        }
    ]
    
    return (
        <CommentsContainer id="commentsContainer">
            <CommentsCount id="commentsCount">댓글 {commentsListData.length}개</CommentsCount>
            <AddComment id="addComment">
                <CommentWriter id="commentWriter" src="https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj" alt="작성자" />
                <WriteComment id="writeComment" type="text" />
            </AddComment>
            {
                commentsListData.map((elem) => {
                    return <WatchCommentItem key={elem.id} data={elem} />
                })
            }
        </CommentsContainer>
    )
}

export default WatchCommentsContainer