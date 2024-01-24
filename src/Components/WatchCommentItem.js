import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Span } from "../style/Span";
import { Button } from "../style/Button";

const CommentForm = styled(Div)`
  /* display: flex;
  flex-direction: row; */
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
const CommentDetails = styled(Div)`
  /* display: flex;
  flex-direction: column; */
`
const CommentMetaData = styled(Div)`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
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
const AboutComment = styled(Div)`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  width: 160px;
  height: 30px;
  margin: 10px 0 10px 0;
`
const CommentThumbUp = styled(Span)`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
`
const CommentThumbUpBtn = styled(Span)`
  margin-right: 7px;
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
  &:hover {
    background-color: lightgray;
  }
`
const CommentThumbImg = styled.img`
  width: 20px;
  height: 20px;
`
const CommentThumbDownBtn = styled(Span)`
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
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
`
const WatchCommentItem = (props) => {

    const { channelProfileImgSrc, alt, channelName, commentUpload, commentContent } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <CommentForm flex="h_row_start">
            <div>
                <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt} />
            </div>
            <CommentDetails flex="v_row_start">
                <CommentMetaData flex="v_row_start">
                    <CommentUploader> {channelName} </CommentUploader> 
                    <CommentUploadDate> {commentUpload} </CommentUploadDate>
                </CommentMetaData>

                {commentContent}

                <AboutComment flex="h_row_between">
                    <CommentThumbUp flex="h_row_center">
                        <CommentThumbUpBtn flex="h_row_center" className="commentThumbBtn">
                            <CommentThumbImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </CommentThumbUpBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbDownBtn flex="h_row_center" className="commentThumbBtn">
                        <CommentThumbImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </CommentThumbDownBtn>
                    <SendReplyBtn id="sendReplyBtn">답글</SendReplyBtn>
                </AboutComment>
            </CommentDetails>
        </CommentForm>
    )
}

export default WatchCommentItem