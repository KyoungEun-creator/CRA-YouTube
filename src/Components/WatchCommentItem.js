import React from "react";
import { styled } from "styled-components";
<<<<<<< HEAD
import { Div } from "../style/Div";
import { Span } from "../style/Span";
import { Button } from "../style/Button";

const CommentForm = styled(Div)`
  /* display: flex;
  flex-direction: row; */
=======

const CommentForm = styled.div`
  display: flex;
  flex-direction: row;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  margin-bottom: 20px;
  width: 930px;
  height: 100%;
`
const VideoDataUploaderProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 12px 0 0;
`
<<<<<<< HEAD
const CommentDetails = styled(Div)`
  /* display: flex;
  flex-direction: column; */
`
const CommentMetaData = styled(Div)`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
=======
const CommentDetails = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentMetaData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  margin-bottom: 5px;
`
const CommentUploader = styled.span`
  font-weight: bold;
  margin-right: 5px;
`
const CommentUploadDate = styled.span`
  font-size: 12px;
  color: gray;
`
<<<<<<< HEAD
const AboutComment = styled(Div)`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
=======
const AboutComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  width: 160px;
  height: 30px;
  margin: 10px 0 10px 0;
`
<<<<<<< HEAD
const CommentThumbUp = styled(Span)`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
`
const CommentThumbUpBtn = styled(Span)`
=======
const CommentThumbUp = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CommentThumbUpBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  margin-right: 7px;
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
<<<<<<< HEAD
  &:hover {
    background-color: lightgray;
  }
=======
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const CommentThumbImg = styled.img`
  width: 20px;
  height: 20px;
`
<<<<<<< HEAD
const CommentThumbDownBtn = styled(Span)`
=======
const CommentThumbDownBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
<<<<<<< HEAD
  &:hover {
    background-color: lightgray;
  }
`
const SendReplyBtn = styled(Button)`
  width: 50px;
  height: 30px;
  border-radius: 40%;
  &:hover {
    background-color: lightgray;
  }
=======
`
const SendReplyBtn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 40%;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const WatchCommentItem = (props) => {

    const { channelProfileImgSrc, alt, channelName, commentUpload, commentContent } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
<<<<<<< HEAD
        <CommentForm flex="h_row_start">
            <div>
                <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt} />
            </div>
            <CommentDetails flex="v_row_start">
                <CommentMetaData flex="v_row_start">
                    <CommentUploader> {channelName} </CommentUploader> 
                    <CommentUploadDate> {commentUpload} </CommentUploadDate>
=======
        <CommentForm id="commentForm">
            <div>
                <VideoDataUploaderProfileImg id="videoDataUploaderProfileImg" src={channelProfileImgSrc} alt={alt} />
            </div>
            <CommentDetails id="commentDetails">
                <CommentMetaData id="commentMetaData">
                    <CommentUploader id="commentUploader"> {channelName} </CommentUploader> 
                    <CommentUploadDate id="commentUploadDate"> {commentUpload} </CommentUploadDate>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                </CommentMetaData>

                {commentContent}

<<<<<<< HEAD
                <AboutComment flex="h_row_between">
                    <CommentThumbUp flex="h_row_center">
                        <CommentThumbUpBtn flex="h_row_center" className="commentThumbBtn">
                            <CommentThumbImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </CommentThumbUpBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbDownBtn flex="h_row_center" className="commentThumbBtn">
                        <CommentThumbImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
=======
                <AboutComment id="aboutComment">
                    <CommentThumbUp id="commentThumbUp">
                        <CommentThumbUpBtn id="commentThumbUpBtn" className="commentThumbBtn">
                            <CommentThumbImg className="commentThumbImg" src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </CommentThumbUpBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbDownBtn id="commentThumbDownBtn" className="commentThumbBtn">
                        <CommentThumbImg className="commentThumbImg" src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                    </CommentThumbDownBtn>
                    <SendReplyBtn id="sendReplyBtn">답글</SendReplyBtn>
                </AboutComment>
            </CommentDetails>
        </CommentForm>
    )
}

export default WatchCommentItem