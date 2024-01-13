import React from "react";

const DetailedNavFooterItem = (props) => {
    const { content } = props.data;

    return (
        <div className = "footer-guide">
            {content}
        </div>
    )
}

export default DetailedNavFooterItem