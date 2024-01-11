import React from "react"
import ShortsBtnItem from "./ShortsBtnItem"

const ShortsBtnsContainer = () => {
    
    const ShortsBtnData = [
        {
            id: "ShortsBtn_1",
            imgSrc: "imgs/thumb-up.png",
            label: "11만",
            tagContent: "이 동영상이 마음에 듭니다."
        }, 
        {
            id: "ShortsBtn_2",
            imgSrc: "imgs/thumb-down.png",
            label: "싫어요",
            tagContent: "이 동영상이 마음에 들지 않습니다."
        }, 
        {
            id: "ShortsBtn_3",
            imgSrc: "imgs/comment.png",
            label: "2.4천",
            tagContent: "댓글"
        }, 
        {
            id: "ShortsBtn_4",
            imgSrc: "imgs/share.png",
            label: "공유",
            tagContent: "공유"
        }, 
        {
            id: "ShortsBtn_5",
            imgSrc: "imgs/more.png",
        }, 
        {
            id: "ShortsBtn_6",
            imgClassName: "shortsProfileBtnItem",
            imgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj",
            tagContent: "오리지널 사운드"
        }
    ]

    // 나중에 각 버튼에 대한 이벤트가 추가될 경우 여기서

    return (
        <div id="shortsBtnsContainer">
            {
                ShortsBtnData.map((elem) => {
                    return <ShortsBtnItem key={elem.id} data={elem}/>
                })
            }
        </div>
    )
}

export default ShortsBtnsContainer