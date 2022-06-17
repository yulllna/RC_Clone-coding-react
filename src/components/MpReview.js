import React from 'react'

function MpReview() {
  return (
    <>
        <section className="review">
            <div className="container">
                <div className="review-left">
                    <h1><strong className="user-cnt">898,070</strong>명이<br/>인프런과 함께합니다.</h1>
                    <p>
                        수년~십수년씩 커리어를 쌓고 노력해온 <br/>지식공유자들이 지식과 노하우를 공유합니다.<br/>
                        당장 좋은 사수가 없거나, 교육을 받지 못하더라도 걱정하지 마세요.<br/>
                        인프런에서 전문가들에게서 지식과 노하우를 배울 수 있습니다. 
                    </p>
                    <div className="buttons">
                        <a className="more-reiview">
                            <span>수강평 더보기</span>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                        </a>
                        <a className="request">
                            <span>기능/강좌 요청하기</span>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                        </a>
                    </div>
                </div>
                <div className="review-right">
                    <div className="review-card">
                        <div className="card-top">
                            <span className="user-name">hiccups 님(수강생)</span>
                            <span className="date">42분 전</span>
                        </div>
                        <div className="card-bottom">
                            <a href="#">
                                <span>스파크 머신러닝 완벽 가이드 - Part 1</span>
                                <span><i className="fa-solid fa-angle-right"></i></span>
                            </a>
                            <p>테이블 1개짜리 데이터셋 EDA/Modeling 강의는 흔한데 여러 테이블 조인해서 유의미한 컬럼 생성해보는 강의는 처음입니다. ML 엔지니어가 실무에서 어떤 일을 수행하는지 감을 잡는데 큰 도움이 될 것 같습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MpReview