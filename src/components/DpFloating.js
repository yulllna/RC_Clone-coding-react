import React from 'react'

function DpFloating() {
  return (
    <>
        <div className="cd-floating">
            <aside className="cd-floating-content">
                <div className="curation-banner">
                    <div className="curation-banner_wrap curation-button">
                        <div className="curation-banner-content">
                            <img src="https://cdn.inflearn.com/assets/images/corporations/linegames.png"
                                alt="기업 로고 이미지" className="curation-banner-logo" />
                            <div className="curation-banner-message">
                                <div className="banner-company">
                                    <span>카카오 게임즈</span>
                                    <div className="banner-open-modal">
                                        <span>인증</span>
                                        <svg width="6" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 7 12">
                                            <path fill="#212529" fillRule="evenodd"
                                                d="M6.834 5.602L1.298.165c-.22-.22-.578-.22-.799 0L.166.498c-.221.22-.221.576 0 .797L4.973 6 .17 10.705c-.22.22-.22.577 0 .797l.334.333c.22.22.578.22.799 0l5.535-5.437c.217-.22.217-.576-.004-.796z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="curation-banner-description">
                                    지금 이 회사에 <strong>관심있는</strong> 사람들도 듣는 중!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cd-floating_container">
                    <div className="cd-floating_card">
                        <div className="cd-floating_card--top">
                            <div className="cd-floating_price">
                                <span>무료</span>
                            </div>
                            <div className="cd-floating_button">
                                <button className="floating_main-button">바로 학습하기</button>
                            </div>
                            <div className="cd-floating_sub-buttons">
                                <div className="floating_sub-button add-playlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529" fillRule="evenodd" clipRule="evenodd"
                                            d="M2.5 2.5A.5.5 0 0 0 2 3v10a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 0-.5-.5H7.035a1.5 1.5 0 0 1-1.248-.668l-.406-.61a.5.5 0 0 0-.416-.222H2.5zM1 3a1.5 1.5 0 0 1 1.5-1.5h2.465c.501 0 .97.25 1.248.668l.406.61A.5.5 0 0 0 7.035 3H14.5A1.5 1.5 0 0 1 16 4.5V13a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 13V3z">
                                        </path>
                                        <path fill="#212529" fillRule="evenodd" clipRule="evenodd"
                                            d="M8.5 5.5A.5.5 0 0 1 9 6v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z">
                                        </path>
                                        <path fill="#212529" fillRule="evenodd" clipRule="evenodd"
                                            d="M11.5 8.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5z">
                                        </path>
                                    </svg>
                                    <span>폴더에 추가</span>
                                </div>
                                <div className="floating_sub-button like-button">
                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#212529" fillRule="evenodd" clipRule="evenodd"
                                            d="M4.49095 2.66666C3.10493 2.66666 1.66663 3.92028 1.66663 5.67567C1.66663 7.74725 3.21569 9.64919 4.90742 11.0894C5.73796 11.7965 6.571 12.3653 7.19759 12.7576C7.51037 12.9534 7.7704 13.1045 7.95123 13.2061C7.96818 13.2156 7.98443 13.2247 7.99996 13.2333C8.01549 13.2247 8.03174 13.2156 8.04869 13.2061C8.22952 13.1045 8.48955 12.9534 8.80233 12.7576C9.42892 12.3653 10.262 11.7965 11.0925 11.0894C12.7842 9.64919 14.3333 7.74725 14.3333 5.67567C14.3333 3.92028 12.895 2.66666 11.509 2.66666C10.1054 2.66666 8.9751 3.59266 8.4743 5.09505C8.40624 5.29922 8.21518 5.43693 7.99996 5.43693C7.78474 5.43693 7.59368 5.29922 7.52562 5.09505C7.02482 3.59266 5.89453 2.66666 4.49095 2.66666ZM7.99996 13.8018L8.22836 14.2466C8.08499 14.3202 7.91493 14.3202 7.77156 14.2466L7.99996 13.8018ZM0.666626 5.67567C0.666626 3.368 2.55265 1.66666 4.49095 1.66666C6.01983 1.66666 7.25381 2.48414 7.99996 3.73655C8.74611 2.48414 9.98009 1.66666 11.509 1.66666C13.4473 1.66666 15.3333 3.368 15.3333 5.67567C15.3333 8.22121 13.4657 10.3823 11.7407 11.8509C10.863 12.5982 9.98767 13.1953 9.33301 13.6052C9.00516 13.8104 8.73133 13.9696 8.53847 14.0779C8.44201 14.1321 8.36571 14.1737 8.31292 14.2019C8.28653 14.2161 8.26601 14.2269 8.25177 14.2344L8.2352 14.2431L8.23054 14.2455L8.22914 14.2462C8.22897 14.2463 8.22836 14.2466 7.99996 13.8018C7.77156 14.2466 7.77173 14.2467 7.77156 14.2466L7.76938 14.2455L7.76472 14.2431L7.74815 14.2344C7.73391 14.2269 7.71339 14.2161 7.687 14.2019C7.63421 14.1737 7.55791 14.1321 7.46145 14.0779C7.26858 13.9696 6.99476 13.8104 6.66691 13.6052C6.01225 13.1953 5.13695 12.5982 4.25917 11.8509C2.53423 10.3823 0.666626 8.22121 0.666626 5.67567Z">
                                        </path>
                                    </svg>
                                    <span>26</span>
                                </div>
                                <div className="floating_sub-button share">
                                    <svg width="16" height="16" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#212529" fillRule="evenodd" clipRule="evenodd"
                                            d="M13.3334 3.66666C13.3334 4.95533 12.2887 6 11 6C10.3257 6 9.7181 5.7139 9.29211 5.25646L5.88379 7.27067C5.95923 7.50012 6.00004 7.74529 6.00004 8C6.00004 8.25469 5.95923 8.49986 5.8838 8.72932L9.29224 10.7434C9.71822 10.286 10.3257 10 11 10C12.2887 10 13.3334 11.0447 13.3334 12.3333C13.3334 13.622 12.2887 14.6667 11 14.6667C9.71138 14.6667 8.66671 13.622 8.66671 12.3333C8.66671 12.0786 8.70752 11.8335 8.78296 11.604L5.37452 9.58992C4.94854 10.0473 4.34103 10.3333 3.66671 10.3333C2.37804 10.3333 1.33337 9.28866 1.33337 8C1.33337 6.71133 2.37804 5.66666 3.66671 5.66666C4.34102 5.66666 4.94853 5.9527 5.37452 6.41007L8.78295 4.39599L8.78321 4.39678C8.70761 4.1671 8.66671 3.92166 8.66671 3.66666C8.66671 2.378 9.71138 1.33333 11 1.33333C12.2887 1.33333 13.3334 2.378 13.3334 3.66666ZM12.3334 3.66666C12.3334 4.40304 11.7364 4.99999 11 4.99999C10.2637 4.99999 9.66671 4.40304 9.66671 3.66666C9.66671 2.93028 10.2637 2.33333 11 2.33333C11.7364 2.33333 12.3334 2.93028 12.3334 3.66666ZM3.66671 9.33333C4.40309 9.33333 5.00004 8.73637 5.00004 8C5.00004 7.26362 4.40309 6.66666 3.66671 6.66666C2.93033 6.66666 2.33337 7.26362 2.33337 8C2.33337 8.73637 2.93033 9.33333 3.66671 9.33333ZM12.3334 12.3333C12.3334 13.0697 11.7364 13.6667 11 13.6667C10.2637 13.6667 9.66671 13.0697 9.66671 12.3333C9.66671 11.5969 10.2637 11 11 11C11.7364 11 12.3334 11.5969 12.3334 12.3333Z">
                                        </path>
                                    </svg>
                                    <span>공유</span>
                                </div>
                            </div>
                        </div>
                        <div className="cd-floating_card--bottom">
                            <div className="cd-floating_info">
                                <div className="floating_info-item">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529"
                                            d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z">
                                        </path>
                                    </svg>
                                    <span>지식공유자:&nbsp; </span>
                                    <a href="#">개발하는 정대리</a>
                                </div>
                                <div className="floating_info-item">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529"
                                            d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z">
                                        </path>
                                    </svg>
                                    <span>총 40개 수업 (4시간 5분)</span>
                                </div>
                                <div className="floating_info-item">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529"
                                            d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z">
                                        </path>
                                    </svg>
                                    <span>수강기한:&nbsp; </span>
                                    <span className="course-duration">무제한</span>
                                </div>
                                <div className="floating_info-item">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529"
                                            d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z">
                                        </path>
                                    </svg>
                                    <span>수료증: </span>
                                    <span>미발급</span>
                                </div>
                                <div className="floating_info-item">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path fill="#212529"
                                            d="M8 10c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z">
                                        </path>
                                    </svg>
                                    <span>난이도:&nbsp; </span>
                                    <div>
                                        <span className="">입문</span><span
                                            className="infd-icon infd-icon--no-margin">-</span><span
                                            className="cd-floating_info--gray">초급</span><span
                                            className="infd-icon infd-icon--no-margin">-</span><span
                                            className="cd-floating_info--gray">중급이상</span>
                                    </div>
                                </div>
                                <div className="floating_info-item instructor-answer">
                                    <p>지식공유자 답변이 제공되는 강의입니다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cd-floating_inquiry">
                        <div className="cd-floating_inquiry-header">
                            <svg width="16" xmlns="http://www.w3.org/2000/svg" height="16"
                                viewBox="0 0 16 16">
                                <path fill="#495057" fillRule="evenodd"
                                    d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zm9 3c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225.164.123.262.285.262.525 0 .177-.04.264-.077.318-.046.068-.124.144-.277.245-.076.051-.158.1-.258.161l-.007.004c-.093.056-.204.122-.313.195-.222.148-.487.354-.692.661-.23.345-.137.81.208 1.04.345.23.81.137 1.04-.208.045-.068.124-.143.276-.245.077-.051.159-.1.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725C9.155 4.163 8.554 4 8 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977-.185.37-.035.82.336 1.006.37.185.82.035 1.006-.336z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <p>수강 전 궁금한 점이 있나요?</p>
                        </div>
                        <a target="_blank" href="#">
                            <span>문의하기</span>
                            <svg width="16" height="16" viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="#24292e" clipRule="evenodd"
                                    d="m6.22 3.22c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06l-4.25 4.25c-.293.293-.767.293-1.06 0s-.293-.767 0-1.06l3.72-3.72-3.72-3.72c-.293-.293-.293-.767 0-1.06z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </>
  )
}

export default DpFloating