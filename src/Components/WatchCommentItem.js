import React from "react";
import { styled } from "styled-components";

const CommentForm = styled.div`
  display: flex;
  flex-direction: row;
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
const CommentDetails = styled.div`
  display: flex;
  flex-direction: column;
`
const CommentMetaData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
const AboutComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 30px;
  margin: 10px 0 10px 0;
`
const CommentThumbUp = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CommentThumbUpBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
`
const CommentThumbImg = styled.img`
  width: 20px;
  height: 20px;
`
const CommentThumbDownBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  border-radius: 50%;
`
const SendReplyBtn = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 40%;
`
const WatchCommentItem = (props) => {

    const { channelProfileImgSrc, alt, channelName, commentUpload, commentContent } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <CommentForm id="commentForm">
            <div>
                <VideoDataUploaderProfileImg id="videoDataUploaderProfileImg" src={channelProfileImgSrc} alt={alt} />
            </div>
            <CommentDetails id="commentDetails">
                <CommentMetaData id="commentMetaData">
                    <CommentUploader id="commentUploader"> {channelName} </CommentUploader> 
                    <CommentUploadDate id="commentUploadDate"> {commentUpload} </CommentUploadDate>
                </CommentMetaData>

                {commentContent}

                <AboutComment id="aboutComment">
                    <CommentThumbUp id="commentThumbUp">
                        <CommentThumbUpBtn id="commentThumbUpBtn" className="commentThumbBtn">
                            <CommentThumbImg className="commentThumbImg" src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </CommentThumbUpBtn>
                        2.1
                    </CommentThumbUp>
                    <CommentThumbDownBtn id="commentThumbDownBtn" className="commentThumbBtn">
                        <CommentThumbImg className="commentThumbImg" src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </CommentThumbDownBtn>
                    <SendReplyBtn id="sendReplyBtn">답글</SendReplyBtn>
                </AboutComment>
            </CommentDetails>
        </CommentForm>
    )
}

export default WatchCommentItem