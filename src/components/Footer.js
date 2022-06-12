import React from 'react';
import './Footer.css';
import {ReactComponent as InflearnLogo} from '../assets/svg/InflearnLogo.svg';

function Footer() {
  return (
    <>
        <footer className="footer">
           <div className="wrapper">
               <div className="footer-top">
                   <div className="footer-menu_wrap">
                       <div className="footer-menu">
                           <span className="menu-title">인프런</span>
                           <ul className="menu-list">
                               <li>
                                   <a href="#">공지사항</a>
                               </li>
                               <li>
                                   <a href="#">인프런 소개</a>
                               </li>
                               <li>
                                   <a href="#">인프랩 실Log</a>
                               </li>
                               <li>
                                   <a href="#">채용 안내</a>
                               </li>
                           </ul>
                       </div>
                       <div className="footer-menu">
                           <span className="menu-title">고객센터</span>
                           <ul className="menu-list">
                               <li>
                                   <a href="#">자주묻는 질문</a>
                               </li>
                               <li>
                                   <a href="#">수료증 확인</a>
                               </li>
                               <li>
                                   <a href="#">이용약관</a>
                               </li>
                               <li>
                                   <a href="#">개인정보취급방침</a>
                               </li>
                           </ul>
                       </div>
                       <div className="footer-menu">
                           <span className="menu-title">신청하기</span>
                           <ul className="menu-list">
                               <li>
                                   <a href="#">지식공유참여</a>
                               </li>
                               <li>
                                   <a href="#">인프런 비즈니스</a>
                               </li>
                               <li>
                                   <a href="#">인프런 X 대학교</a>
                               </li>
                               <li>
                                   <a href="#">인프런 X AWS 제휴</a>
                               </li>
                           </ul>
                       </div>
                       <div className="footer-menu">
                           <span className="menu-title">학습하기</span>
                           <ul className="menu-list">
                               <li>
                                   <a href="#">IT 프로그래밍</a>
                               </li>
                               <li>
                                   <a href="#">크리에이티브</a>
                               </li>
                               <li>
                                   <a href="#">업무스킬</a>
                               </li>
                               <li>
                                   <a href="#">수강코드 등록</a>
                               </li>
                           </ul>
                       </div>
                       <div className="footer-menu">
                           <span className="menu-title">커뮤니티</span>
                           <ul className="menu-list">
                               <li>
                                   <a href="#">학습로드맵</a>
                               </li>
                               <li>
                                   <a href="#">질문 & 답변</a>
                               </li>
                               <li>
                                   <a href="#">수강평 모아보기</a>
                               </li>
                               <li>
                                   <a href="#">강의 · 기능요청</a>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
               <div className="footer-bottom">
                   <div className="footer-bottom_left footer-info">
                       <div className="footer-info_top">
                           <span>
                               <a href="#">
                                    <InflearnLogo className="brand_logo" style={{width:'85'}} />
                               </a>
                           </span>
                           <span>
                               <a href="#">개인정보취급방침</a>
                           </span>
                           <span>
                               <a href="#">이용약관</a>
                           </span>
                       </div>
                       <div className="footer-info_bottom">
                          <div className="info-dropdown" style={{maxHeight:'54px'}}>
                            <span className="is-hidden-mobile">(주)인프랩 | </span>
                            <span>대표자: 이형주 | </span>
                            <span>
                              사업자번호: 499-81-00612 
                              <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4998100612" target="_blank" rel="noreferrer">사업자 정보 확인</a>
                            </span>
                            <br/>
                            <span>통신판매업: 2018-성남분당B-0062 | </span>
                            <span>개인정보보호책임자: 구자유 | </span>
                            <span>이메일: <a href="mailto:info@inflearn.com">info@inflearn.com</a></span>
                            <br/>
                            <span>주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호</span>
                          </div>
                          <p className="copyright">©INFLAB. ALL RIGHTS RESERVED</p>
                       </div>
                   </div>
                   <ul className="footer-right">
                        <li className="footer-logo-list">
                            <a href="#" className="text">N</a>
                        </li>
                        <li className="footer-logo-list">
                            <a href="#" className="text">B</a>
                        </li>
                        <li className="footer-logo-list">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li className="footer-logo-list">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </li>
                        <li className="footer-logo-list">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                   </ul>
               </div>
           </div>
       </footer>
    </>
  )
}

export default Footer