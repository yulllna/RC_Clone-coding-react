import React from 'react'

function DpApply() {
  return (
    <>
        <section className="page-apply">
            <div className="page-apply_wrap">
                <div className="apply_card">
                    <div className="apply_title">지식공유자 되기</div>
                    <div className="apply_desc">많은 사람들에게 배움의 기회를 주고,<br/>경제적 보상을 받아보세요.</div>
                    <a className="button button_primary" href="/open-knowledge">지식공유참여</a>
                </div>
                <div className="apply_card">
                    <div className="apply_title">기업 교육을 위한 인프런</div>
                    <div className="apply_desc">“인프런 비즈니스” 를 통해 모든 팀원이 인프런의 강의를<br/>자유롭게 학습하는 환경을 제공하세요.</div>
                    <a className="button button_primary" href="/open-knowledge">인프런 비즈니스</a>
                </div>
            </div>
        </section>    
    </>
  )
}

export default DpApply