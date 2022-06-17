import React from 'react'

function MpApply() {
  return (
    <>
        <section className="apply">
            <div className="container">
                <div className="header">
                    <h1 className="header-title">다양한 서비스를 신청하세요.</h1>
                    <p className="subtext">인프런의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.</p>
                </div>
                <div className="apply-content">
                    <div className="apply-box">
                        <h2 className="subtitle">지식공유자 되기</h2>
                        <p>9개월간 온라인 기술 강의로만 1억원!<br/>나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.</p>
                        <a href="#" className="button">
                            <span>지식공유자 참여하기</span>
                            <span className="icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                    <div className="apply-box">
                        <h2 className="subtitle">인프런 비즈니스 신청</h2>
                        <p>모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요.<br/>업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.</p>
                        <a href="#" className="button">
                            <span>비즈니스 신청하기</span>
                            <span className="icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                    <div className="apply-box">
                        <h2 className="subtitle">인프런 X 대학생</h2>
                        <p>학교와 인프런이 함께 하여,<br/>많은 학생 분들께 정해진 커리큘럼 이외에도 필요한 학습을 보완하고, 더욱 성장할 수 있도록 도와드립니다.</p>
                        <a href="#" className="button">
                            <span>대학생 신청하기</span>
                            <span className="icon"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>    
    </>
  )
}

export default MpApply