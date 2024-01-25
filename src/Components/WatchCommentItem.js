import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Span } from "../style/Span";
import { Img } from "../style/Img";
import { Button } from "../style/Button";

const CommentForm = styled(Div)`
    margin-bottom: 20px;
    width: 930px;
    height: 100%;
`
const VideoDataUploaderProfileImg = styled(Img)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 12px 0 0;
`
const CommentDetails = styled(Div)`
    width: 100%;
`
const CommentMetaData = styled(Div)`
    width: 100%;
    margin-bottom: 5px;
`
const CommentContent = styled(Div)`
    width: 100%;
`
const CommentUploader = styled.span`
    width: 100%;
    font-weight: bold;
    margin-right: 5px;
`
const CommentUploadDate = styled.span`
    width: 100%;
    font-size: 12px;
    color: gray;
`
const AboutComment = styled(Div)`
    width: 100%;
    height: 30px;
    margin: 10px 0 10px 0;
`
const CommentThumbUp = styled(Span)`
    margin-right: 10px;
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
const CommentThumbImg = styled(Img)`
    width: 20px;
    height: 20px;
`
const CommentThumbDownBtn = styled(Span)`
    margin-right: 10px;
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
        <CommentForm flex="h_start">
            <div>
                <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt} />
            </div>
            <CommentDetails flex="v_start">
                <CommentMetaData flex="v_start">
                    <CommentUploader> {channelName} </CommentUploader> 
                    <CommentUploadDate> {commentUpload} </CommentUploadDate>
                </CommentMetaData>

                <CommentContent> {commentContent} </CommentContent>
    
                <AboutComment flex="h_start">
                    <CommentThumbUp flex="h_center">
                        <CommentThumbUpBtn flex="h_center">
                            <CommentThumbImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </CommentThumbUpBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbDownBtn flex="h_center">
                        <CommentThumbImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </CommentThumbDownBtn>
                    <SendReplyBtn> 답글 </SendReplyBtn>
                </AboutComment>
            </CommentDetails>
        </CommentForm>
    )
}

export default WatchCommentItem