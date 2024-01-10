import React from "react"
import Comment from "./Comment"

const CommentsContainer = () => {

    const commentsListData = [
        {
            id: "comment_1",
            channelProfileImgSrc: "https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj",
            channelName: "조경은",
            commentUpload: "2022. 7. 16.",
            commentContent: "넘 좋아요",
        },
        {
            id: "comment_2",
            channelProfileImgSrc: "",
            channelName: "최민석",
            commentUpload: "2022. 7. 16.",
            commentContent: "굿굿",
        },
        {
            id: "comment_3",
            channelProfileImgSrc: "",
            channelName: "방준연",
            commentUpload: "2022. 7. 16.",
            commentContent: "나이스 샷",
        }
    ]
    return (
        <div id="commentsContainer">
            <h1 id="commentsCount">댓글 {commentsListData.length}개</h1>
            <div id="addComment">
                <img id="commentWriter" src="https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj" />
                <input id="writeComment" type="text" />
            </div>
            {
                commentsListData.map((elem) => {
                    return <Comment key={elem.id} data={elem} />
                })
            }
        </div>
    )
}

export default CommentsContainer