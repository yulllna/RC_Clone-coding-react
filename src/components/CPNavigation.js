import React from 'react'

function CPNavigation() {
  return (
    <>
        <div className="community-body_navigation">
            <ul className="community-aside">
                <li className="community-aside__group">
                    <h6 className="community-aside__group-name">함께 공부해요</h6>
                    <ul className="community-aside__menu-list">
                    <li className="community-aside__menu">
                        <a href="/community/questions"><span>질문 &amp; 답변</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/community/chats"><span>자유주제</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/community/studies"><span>스터디</span></a>
                    </li>
                    </ul>
                </li>
                <li className="community-aside__group">
                    <h6 className="community-aside__group-name">후기</h6>
                    <ul className="community-aside__menu-list">
                    <li className="community-aside__menu community-aside__menu--selected">
                        <a href="/community/reviews"><span>수강평</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/community/mentorings-reviews"><span>멘토링 후기</span></a>
                    </li>
                    </ul>
                </li>
                <li className="community-aside__group">
                    <h6 className="community-aside__group-name">인프런</h6>
                    <ul className="community-aside__menu-list">
                    <li className="community-aside__menu">
                        <a href="/notices"><span>공지사항</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/pages"><span>인프런 스토리</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/inflearn"><span>인프런 소개</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/request-to-inflearn"><span>강의·기능요청</span></a>
                    </li>
                    <li className="community-aside__menu">
                        <a href="/blogs"><span>블로그</span></a>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
  )
}

export default CPNavigation