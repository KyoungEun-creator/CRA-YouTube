import React from "react"

const Screen = () => {
    return (
        <div id="screenContainer">
            <img id="screenImg" src="imgs/Screen.jpeg" />
            <div id="videoControlContainer">
                <div id="videoControlLeft">
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/play-solid.svg" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/next.png" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/volume.png" />
                    </button>
                    <span>0:00/6:19</span>
                </div>
                <div id="videoControlRight">
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/switch.png" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/subtitle.png" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/settings.png" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/rectangle.png" />
                    </button>
                    <button class="videoControlBtns">
                        <img class="videoControlBtnImgs" src="imgs/expand.png" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Screen