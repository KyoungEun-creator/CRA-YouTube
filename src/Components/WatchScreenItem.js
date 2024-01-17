import React from "react";

const WatchScreenItem = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <div id="screenContainer">
            <img id="screenImg" src={thumbnailImgSrc} alt="영상" />
            <div id="videoControlContainer">
                <div id="videoControlLeft">
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/play-solid.svg`} alt="재생" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/next.png`} alt="다음" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/volume.png`} alt="볼륨" />
                    </button>
                    <span>0:00/{runningTime}</span>
                </div>
                <div id="videoControlRight">
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/switch.png`} alt="스위치" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/subtitle.png`} alt="자막" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/settings.png`} alt="설정" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/rectangle.png`} alt="영화관모드" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src={`${IP}/imgs/expand.png`} alt="전체보기" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WatchScreenItem