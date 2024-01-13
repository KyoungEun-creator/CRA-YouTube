import React from "react";

const WatchScreenItem = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data

    return (
        <div id="screenContainer">
            <img id="screenImg" src={thumbnailImgSrc} />
            <div id="videoControlContainer">
                <div id="videoControlLeft">
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/play-solid.svg" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/next.png" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/volume.png" />
                    </button>
                    <span>0:00/{runningTime}</span>
                </div>
                <div id="videoControlRight">
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/switch.png" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/subtitle.png" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/settings.png" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/rectangle.png" />
                    </button>
                    <button className="videoControlBtns">
                        <img className="videoControlBtnImgs" src="imgs/expand.png" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WatchScreenItem