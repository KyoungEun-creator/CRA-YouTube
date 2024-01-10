import React from "react"

const Comment = (props) => {

    const { channelProfileImgSrc, channelName, commentUpload, commentContent } = props.data

    return (
        <div id="commentForm">
            <div>
                <img id="videoDataUploaderProfileImg" src={channelProfileImgSrc} />
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
                            <img className="commentThumbImg" src="imgs/thumb-up.png" />
                        </span>
                        2.1
                    </span>
                    <span id="commentThumbDownBtn" className="commentThumbBtn">
                        <img className="commentThumbImg" src="imgs/thumb-down.png" />
                    </span>
                    <button id="sendReplyBtn">답글</button>
                </div>
            </div>
        </div>
    )
}

export default Comment