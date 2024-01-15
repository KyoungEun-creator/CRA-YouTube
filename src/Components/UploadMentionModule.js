import React from "react";

const UploadMentionModule = (props) => {
    const { upload } = props.data

    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()+1
    const currentDate = now.getDate()
    
    let uploadMention = ""
    const uploadYear = upload.split('.')[0]
    const uploadMonth = upload.split('.')[1]
    const uploadDate = upload.split('.')[2]
    
    if (currentYear - uploadYear > 0) {
        uploadMention = `${currentYear - uploadYear}년 전`
    }
    else if (currentMonth - uploadMonth > 0) {
        uploadMention = `${currentMonth - uploadMonth}개월 전`
    }
    else if (currentDate - uploadDate > 0) {
        uploadMention = `${currentDate - uploadDate}일 전`
    }
    return uploadMention
}

export default UploadMentionModule

