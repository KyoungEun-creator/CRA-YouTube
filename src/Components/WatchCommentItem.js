import React from "react";

const WatchCommentItem = (props) => {

    const { channelProfileImgSrc, alt, channelName, commentUpload, commentContent } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <div id="commentForm">
            <div>
                <img id="videoDataUploaderProfileImg" src={channelProfileImgSrc} alt={alt} />
            </div>
            <div id="commentDetails">
                <div id="commentMetaData">
                    <span id="commentUploader">{channelName}</span> 
                    <span id="commentUploadDate">{commentUpload}</span>
                </div>
                {commentContent}
                <div id="aboutComment">
                    <span id="commentThumbUp">
                        <span id="commentThumbUpBtn" className="commentThumbBtn">
                            <img className="commentThumbImg" src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        </span>
                        2.1
                    </span>
                    <span id="commentThumbDownBtn" className="commentThumbBtn">
                        <img className="commentThumbImg" src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </span>
                    <button id="sendReplyBtn">답글</button>
                </div>
            </div>
        </div>
    )
}

export default WatchCommentItem