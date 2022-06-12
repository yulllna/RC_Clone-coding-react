import React from 'react';
import './Header.css';
import {ReactComponent as InflearnLogo} from '../assets/InflearnLogo.svg';

function Header() {
  return (
    <>
        <header id="header">
           <nav className="navbar">
               <div className="container mobile_container"></div>
               <div className="container desktop_container">
                   <div className="content">
                       <div className="brand-logo">
                           <a href="/" className="logo-inner">
                               <span className="visually_hidden">인프런</span>
                               <InflearnLogo className="brand_logo" style={{fill: '#1dc078'}} />
                                <title>인프런 브랜드 로고</title>
                           </a>
                       </div>
                       <div className="navbar-menu">
                           <div className="navbar-left">
                               <div className="nav-item">
                                   <a href="#"><span>강의</span></a>
                                   <ul className="navbar-dropdown" style={{display: 'none'}}>
                                       <li>
                                           <a href="#">개발·프로그래밍</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">보안·네트워크</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">데이터 사이언스</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">크리에이티브</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">직무·마케팅</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">학문·외국어</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">커리어</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                               <li>프론트엔드</li>
                                               <li>백엔드</li>
                                               <li>풀스택</li>
                                               <li>모바일 앱 개발</li>
                                               <li>프로그래밍 언어</li>
                                               <li>알고리즘·자료구조</li>
                                               <li>데이터 사이언스</li>
                                               <li>데이터베이스</li>
                                               <li>개발도구</li>
                                               <li>데브옵스 인프라</li>
                                               <li>게임 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">교양</a>
                                           <ul className="navbar-dropdown sub-menu">
                                               <li>웹 개발</li>
                                           </ul>
                                       </li>
                                       <li>
                                           <a href="#">청강대 게임스쿨</a>
                                       </li>
                                   </ul>
                               </div>
                               <div className="nav-item">
                                   <a href="#"><span>로드맵</span></a>
                               </div>
                               <div className="nav-item">
                                   <a href="#"><span>멘토링</span></a>
                               </div>
                               <div className="nav-item">
                                   <a href="#"><span>커뮤니티</span></a>
                                   <ul className="navbar-dropdown" style={{display: 'none'}}>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-comment-alt-edit"></i></span> 
                                                <span className="name">질문 & 답변</span>
                                           </a>
                                       </li>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-comment-alt-edit"></i></span> 
                                                <span className="name">자유주제</span>
                                           </a>
                                       </li>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-book-open"></i></span> 
                                                <span className="name">스터디</span>
                                           </a>
                                       </li>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-star"></i></span> 
                                                <span className="name">수강평</span>
                                           </a>
                                       </li>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-lightbulb-on"></i></span> 
                                                <span className="name">멘토링 후기</span>
                                           </a>
                                       </li>
                                       <li className="navbar-item">
                                           <a href="#">
                                                <span className="icon"><i className="fal fa-paper-plane"></i></span> 
                                                <span className="name">인프런 스토리</span>
                                           </a>
                                       </li>
                                   </ul>
                               </div>
                               <div className="nav-item">
                                   <a href="#"><span>채용정보</span></a>
                                   <ul className="navbar-dropdown" style={{display: 'none'}}>
                                        <li className="navbar-item">
                                            <a href="#">
                                                <span className="icon"><i className="fal fa-rocket-launch"></i></span> 
                                                <span className="name">기업 채용</span>
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="#">
                                                <span className="icon"><i><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="16" height="16" fill="white"></rect>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 13C10.4688 13 12 11.3233 12 9.33333C12 8.04019 11.5369 5.84547 10.706 3.97977C10.2928 3.05208 9.81596 2.26882 9.31227 1.73331C8.805 1.194 8.36448 1 8 1C7.63552 1 7.195 1.194 6.68773 1.73331C6.18405 2.26882 5.70717 3.05208 5.294 3.97977C4.46306 5.84547 4 8.04019 4 9.33333C4 11.3233 5.53122 13 8 13ZM8 14C10.9853 14 13 11.9107 13 9.33333C13 6.41667 10.9853 0 8 0C5.01468 0 3 6.41667 3 9.33333C3 11.9107 5.01468 14 8 14Z" fill="#4A4A4A"></path>
                                                    <path d="M11.8574 12.3858C12.2816 12.7694 12.8439 13 13.4999 13C14.9926 13 15.9999 11.8061 15.9999 10.3333C15.9999 8.66667 14.9926 5 13.4999 5C13.0912 5 12.7189 5.27488 12.3937 5.70833C12.4998 6.07394 12.5929 6.43747 12.6722 6.79211C12.8096 6.51432 12.9534 6.28219 13.0973 6.10733C13.3368 5.8163 13.4756 5.8 13.4999 5.8C13.5243 5.8 13.6631 5.8163 13.9026 6.10733C14.1318 6.38589 14.3607 6.80982 14.5643 7.33215C14.9728 8.38049 15.1999 9.61515 15.1999 10.3333C15.1999 11.4382 14.4803 12.2 13.4999 12.2C13.0389 12.2 12.6354 12.0315 12.3374 11.738C12.1976 11.9676 12.0371 12.1843 11.8574 12.3858Z" fill="#4A4A4A"></path>
                                                    <path d="M3.60622 5.70833C3.281 5.27488 2.90869 5 2.5 5C1.00734 5 0 8.66667 0 10.3333C0 11.8061 1.00734 13 2.5 13C3.15603 13 3.7183 12.7694 4.14252 12.3858C3.96284 12.1843 3.80235 11.9676 3.66251 11.738C3.3645 12.0315 2.96108 12.2 2.5 12.2C1.51967 12.2 0.8 11.4382 0.8 10.3333C0.8 9.61515 1.02711 8.38049 1.43565 7.33215C1.63921 6.80982 1.8681 6.38589 2.09736 6.10733C2.33688 5.8163 2.47568 5.8 2.5 5.8C2.52432 5.8 2.66312 5.8163 2.90264 6.10733C3.04655 6.28219 3.19031 6.51432 3.32776 6.79211C3.40707 6.43747 3.50013 6.07394 3.60622 5.70833Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 15.5C0.5 15.2239 0.723858 15 1 15H15C15.2761 15 15.5 15.2239 15.5 15.5C15.5 15.7761 15.2761 16 15 16H1C0.723858 16 0.5 15.7761 0.5 15.5Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99961 5.60001C8.22052 5.60001 8.39961 5.77909 8.39961 6.00001L8.39961 15C8.39961 15.2209 8.22052 15.4 7.99961 15.4C7.7787 15.4 7.59961 15.2209 7.59961 15L7.59961 6.00001C7.59961 5.77909 7.7787 5.60001 7.99961 5.60001Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.49961 12.6C2.72052 12.6 2.89961 12.7791 2.89961 13L2.89961 15C2.89961 15.2209 2.72052 15.4 2.49961 15.4C2.2787 15.4 2.09961 15.2209 2.09961 15L2.09961 13C2.09961 12.7791 2.2787 12.6 2.49961 12.6Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4996 12.6C13.7205 12.6 13.8996 12.7791 13.8996 13L13.8996 15C13.8996 15.2209 13.7205 15.4 13.4996 15.4C13.2787 15.4 13.0996 15.2209 13.0996 15L13.0996 13C13.0996 12.7791 13.2787 12.6 13.4996 12.6Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.71677 6.71716C5.87298 6.56095 6.12624 6.56095 6.28245 6.71716L7.99961 8.43432L9.71677 6.71716C9.87298 6.56095 10.1262 6.56095 10.2825 6.71716C10.4387 6.87337 10.4387 7.12664 10.2825 7.28285L7.99961 9.56569L5.71677 7.28285C5.56056 7.12664 5.56056 6.87337 5.71677 6.71716Z" fill="#4A4A4A"></path>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.71677 9.21716C5.87298 9.06095 6.12624 9.06095 6.28245 9.21716L7.99961 10.9343L9.71677 9.21716C9.87298 9.06095 10.1262 9.06095 10.2825 9.21716C10.4387 9.37337 10.4387 9.62664 10.2825 9.78285L7.99961 12.0657L5.71677 9.78285C5.56056 9.62664 5.56056 9.37337 5.71677 9.21716Z" fill="#4A4A4A"></path>
                                                    </svg></i></span> 
                                                <span className="name">인프랩 채용</span>
                                            </a>
                                        </li>
                                   </ul>
                               </div>
                           </div>
                           <div className="navbar-right">
                               <div className="header-search">
                                   <input type="text" />
                                   <span><i className="fa-solid fa-magnifying-glass"></i></span>
                               </div>
                               <div className="nav-item buttons">
                                    <a href="#" className="nav-item">지식공유참여</a>
                                    <a role="button" className="login-button">로그인</a>
                                    <a role="signin" className="join-button">회원가입</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </nav>
       </header>
    </>
  )
}

export default Header;