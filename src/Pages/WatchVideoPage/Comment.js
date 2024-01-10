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
                    {channelName} {commentUpload}
                </div>
                {commentContent}
                <div id="aboutComment">
                    <button id="videoDataThumbUpBtn">
                        <img className="videoDataMetaImg" src="imgs/thumb-up.png" />
                        2.1
                    </button>
                    <button id="videoDataThumbDownBtn">
                        <img className="videoDataMetaImg" src="imgs/thumb-down.png" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comment