import React from 'react'
import CPHotCourses from './CPHotCourses'
import CPReviewList from './CPReviewList'

function CPBody() {
  return (
    <>
        <div className="community-body">
            <CPReviewList />
            <CPHotCourses />
        </div>  
    </>
  )
}

export default CPBody