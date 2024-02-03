import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Span } from "../style/Span";
import { Img } from "../style/Img";
import { Button } from "../style/Button";

const CommentForm = styled(Div)`
`
const VideoDataUploaderProfileImg = styled(Img)`
    border-radius: 50%;
`
const CommentDetails = styled(Div)`
`
const CommentMetaData = styled(Div)`
`
const CommentContent = styled(Span)`
`
const CommentUploader = styled(Span)`
    font-weight: bold;
`
const CommentUploadDate = styled(Span)`
    color: gray;
`
const AboutComment = styled(Div)`
`
const CommentThumbUp = styled(Span)`
`
const CommentThumbBtn = styled(Span)`
    border-radius: 50%;
    &:hover {
        background-color: lightgray;
    }
`
const CommentThumbImg = styled(Img)`
`
const SendReplyBtn = styled(Button)`
  border-radius: 40%;
  &:hover {
    background-color: lightgray;
  }
`

const WatchCommentItem = (props) => {

    const { channelProfileImgSrc, alt, channelName, commentUpload, commentContent } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <CommentForm 
            width="930px" height="100%" margin="0 0 20px 0" flex="h_start">
            <div>
                <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt} 
                    width="40px" height="40px" margin="0 12px 0 0" />
            </div>
            <CommentDetails 
                width="100%" flex="v_start">
                <CommentMetaData 
                    width="100%" margin="0 0 5px 0" flex="v_start">
                    <CommentUploader
                        width="100%" margin="0 5px 0 0"> {channelName} </CommentUploader> 
                    <CommentUploadDate
                        width="100%" fontSize="12px"> {commentUpload} </CommentUploadDate>
                </CommentMetaData>

                <CommentContent 
                    width="100%" flex="h_start"> {commentContent} </CommentContent>
    
                <AboutComment 
                    width="100%" height="30px" margin="10px 0 10px 0" flex="h_start">
                    <CommentThumbUp 
                        margin="0 10px 0 0" flex="h_center">
                        <CommentThumbBtn 
                            width="20px" height="20px" padding="5px 5px 5px 5px" margin="0 7px 0 0" flex="h_center">
                            <CommentThumbImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" 
                                width="20px" height="20px"/>
                        </CommentThumbBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbBtn 
                        width="20px" height="20px" padding="5px 5px 5px 5px" margin="0 7px 0 0" flex="h_center">
                        <CommentThumbImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" 
                            width="20px" height="20px" />
                    </CommentThumbBtn>
                    <SendReplyBtn
                        width="50px" height="30px"> 답글 </SendReplyBtn>
                </AboutComment>
            </CommentDetails>
        </CommentForm>
    )
}

export default WatchCommentItem