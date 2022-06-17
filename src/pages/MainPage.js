import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import './MainPage.css'
import MpSliderBanner from '../components/MpSliderBanner';
import MpSliderController from '../components/MpSliderController';
import MpSearch from '../components/MpSearch';
import MpReview from '../components/MpReview';
import MpApply from '../components/MpApply';

function MainPage() {
  return (
    <>
        <Header />
        <main id="main">
           <section className="main-banner">
               <MpSliderBanner />
               <MpSliderController />
           </section>
                <MpSearch />
           <section className="free-courses">
               <div className="container">
                <div className="section-header">
                    <div className="header">
                        <a href="#">
                            <h1 className="header-title">무료강의? 오히려 좋아✨</h1>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                        </a>
                        <p className="subtext">무료 강의부터 가볍게 시작해 보세요.</p>
                    </div>
                </div>
                <div className="free-courses_content">
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/327126/cover/13b0e441-4a3d-44cb-acbb-d86af2412e18/327126-eng-2.png" alt="강의이미지" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="course-title">[리뉴얼] 렛츠기릿 자바스크립트</p>
                                <p className="instructor">조현영</p>
                                <div className="rating">
                                    <div className="rating-star">
                                        <div className="star-solid">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                    </div>
                                    <span className="review-num">(44)</span>
                                </div>
                                <span className="price">무료</span>
                                <div className="course-tags">
                                    <span className="course-tag">+100명</span>
                                    <span className="course-tag tag2">새강의</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328001/cover/e11c6e6a-14c6-494a-954d-5fc625eb89a6/328001-eng.png" alt="강의이미지" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="course-title">개발하는 정대리 스위프트 기초 문법</p>
                                <p className="instructor">개발하는 정대리</p>
                                <div className="rating">
                                    <div className="rating-star">
                                        <div className="star-solid">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                    </div>
                                    <span className="review-num">(19)</span>
                                </div>
                                <span className="price">무료</span>
                                <div className="course-tags">
                                    <span className="course-tag">+1400명</span>
                                    <span className="course-tag tag2">업데이트</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/327774/cover/18a5e94e-002b-413b-80b3-d9e14724ff08/강의소개-002 (5).png" alt="강의이미지" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="course-title">이것이 진짜 크롤링이다 - 기본편</p>
                                <p className="instructor">스타트코딩</p>
                                <div className="rating">
                                    <div className="rating-star">
                                        <div className="star-solid">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                    </div>
                                    <span className="review-num">(196)</span>
                                </div>
                                <span className="price">무료</span>
                                <div className="course-tags">
                                    <span className="course-tag">+4000명</span>
                                    <span className="course-tag">새강의</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/course-326295-cover/eaba30bd-b9ec-4277-b178-a418b5daf1a3" alt="강의이미지" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="course-title">Svelte.js 입문 가이드</p>
                                <p className="instructor">HEROPY</p>
                                <div className="rating">
                                    <div className="rating-star">
                                        <div className="star-solid">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                    </div>
                                    <span className="review-num">(106)</span>
                                </div>
                                <span className="price">무료</span>
                                <div className="course-tags">
                                    <span className="course-tag">+1600명</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328897/cover/0803d412-5041-472f-be5c-ef5e3b9b00b2/328897-eng.png" alt="강의이미지" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="course-title">서버와 인터넷 그리고 데이터 이야기</p>
                                <p className="instructor">Joe</p>
                                <div className="rating">
                                    <div className="rating-star">
                                        <div className="star-solid">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16" data-value="1"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                        </div>
                                    </div>
                                    <span className="review-num">(44)</span>
                                </div>
                                <span className="price">무료</span>
                                <div className="course-tags">
                                    <span className="course-tag">+100명</span>
                                    <span className="course-tag tag2">새강의</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
               </div>
           </section>
           <section className="roadmap">
               <div className="container">
                    <div className="section-header">
                        <div className="header">
                            <a href="#">
                                <h1>기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️</h1>
                                <span className="courses_tag">RoadMap!!</span>
                                <span><i className="fa-solid fa-angle-right"></i></span>
                            </a>
                            <p className="subtext">아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!</p>
                        </div>
                    </div>
                    <div className="roadmap_content">
                        <div className="roadmap-card">
                            <a href="#">
                                <div className="card-image">
                                    <figure>
                                        <img src="https://cdn.inflearn.com/public/roadmaps/492/cover/4b96e97c-a26a-4e10-8ca3-cc9f6db936b8/roadmap-164.png" alt="로드맵이미지" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p>꼭 필요하지만 아무도 알려주지 않는 업무 스킬</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="roadmap-card">
                            <a href="#">
                                <div className="card-image">
                                    <figure>
                                        <img src="https://cdn.inflearn.com/public/roadmaps/c8303754-7161-4118-88af-e847d0c8a924/roadmap-9.png" alt="로드맵이미지" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p>힙하고 재밌는 리액트 배우기</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="roadmap-card">
                            <a href="#">
                                <div className="card-image">
                                    <figure>
                                        <img src="https://cdn.inflearn.com/public/roadmaps/29efab75-3480-4482-8ad8-4e984a4022f8/roadmap-38.png" alt="로드맵이미지" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p>R로 정복하는 데이터 분석</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="roadmap-card">
                            <a href="#">
                                <div className="card-image">
                                    <figure>
                                        <img src="https://cdn.inflearn.com/public/roadmaps/373/cover/7b49797b-67d7-4d2d-89b8-8326496ca0cf/roadmap-119-2x-b.png" alt="로드맵이미지" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div>
                                        <p>우아한형제들 최연소 기술이사 김영한의 스프링 완전 정복</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
               </div>
           </section>
           <section className="curation">
               <div className="container">
					<div className="section-header">
						<div className="header">
							<a href="#">
								<h1>읽어보기</h1>
								<span><i className="fa-solid fa-angle-right"></i></span>
							</a>
						</div>
					</div>
					<div className="curation_content">
						<div className="curation-card">
							<a href="#">
								<div className="card-image">
									<video muted="" loop="" autoPlay="" playsInline="">
										<source className="ac-gif__source" src="https://cdn.inflearn.com/public/files/pages/a984ebc1-cc59-4831-83e3-6ac9c31e3ce9/event-infland-story-main.gif.mp4" type="video/mp4" data-alt="꿈이 현실이 되는 인프랜드에 오신 걸 환영합니다!" />
									</video>
								</div>
								<div className="card-content">
									<p className="curation-title">꿈이 현실이 되는 인프랜드에 오신 걸 환영합니다!</p>
									<p className="curation-text">ㅣ 🪄🎟️🎠🎢
                                        경험한 적 없는 지식을 배워야 할 때&nbsp;막막했던 경험 있으셨죠?
                                        인프런은 성장의 꿈을 꾸는 여러분이&nbsp;조금 더 즐겁게 공부했으면 하는 마음을 담아&nbsp;놀이공원을 오픈했어요.&nbsp;</p>
								</div>
							</a>
						</div>
						<div className="curation-card">
							<a href="#">
								<div className="card-image">
									<video muted="" loop="" autoPlay="" playsInline="">
                                        <source src="https://cdn.inflearn.com/public/files/pages/d64c3534-3659-4f2e-a3b5-faf7bb4c4500/rookissraid-b-main.mp4" type="video/mp4" data-alt="성장하는 게임 개발 수강생의 선택, 루키스 ⭐️" />잘못된 타입을 사용하고 있습니다.
                                      </video>
								</div>
								<div className="card-content">
									<p className="curation-title">성장하는 게임 개발 수강생의 선택, 루키스 ⭐️</p>
									<p className="curation-text">ㅣ 다양한 성장 아이템을 준비했으니, 끝까지 확인해주세요! ㅣ안녕하세요. 인프런입니다.인프런이 준비한 '게임 개발 레이드' 이벤트에취준생부터 현직 실무자까지깊은 고민과 다양한 질문을 남겨주셨는데요.진심을 담아 작성해준 댓글을 살펴보니많은 분들의 성장을 향한 갈망을 느낄 수 있었습니다.</p>
								</div>
							</a>
						</div>
						<div className="curation-card">
							<a href="#">
								<div className="card-image">
									<video muted="" loop="" autoPlay="" playsInline="">
                                        <source src="https://cdn.inflearn.com/public/files/pages/0b83f1d8-458c-4a5a-90ad-205f19ea9d26/rookissraid-blog.mp4" type="video/mp4" data-alt="(종료) 루키스가 이끄는 게임 개발 레이드 🎮" />잘못된 타입을 사용하고 있습니다.
                                      </video>
								</div>
								<div className="card-content">
									<p className="curation-title">(종료) 루키스가 이끄는 게임 개발 레이드 🎮</p>
									<p className="curation-text">ㅣ 특별한 선물을 준비했으니, 끝까지 확인해주세요!&nbsp;ㅣ
                                        ✨&nbsp; 환상의 세계를 현실로 만드는 게임 개발!&nbsp;✨게임 개발을 공부하면서이런 생각이 든 적 있으신가요?혼자 해결하기 어려운 문제에 부딪힌 여러분을 위해지식공유자 Rookiss 님을 소개합니다.
                                        환상의 세계! 게임 개발 레이드를 이끌어 줄[ 인프런 게임 개발 수강생 83%가 선택한 랜선 사수&nbsp;]</p>
								</div>
							</a>
						</div>
					</div>
				</div>
           </section>
           <section className="recent-courses">
               <div className="container">
				   	<div className="section-header">
						<div className="header">
							<a href="#">
								<h1>따끈따끈, 신규 강의를 만나보세요! 🙋🏻‍♀️</h1>
								<span className="courses_tag">NEW!!</span>
								<span><i className="fa-solid fa-angle-right"></i></span>
							</a>
						</div>
				   	</div>
				   	<div className="recent-courses_content">
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328941/cover/056e2afb-a915-4639-ac89-0a5f10255b20/328941-eng.png" alt="강의이미지" />
                                </figure>
                                <div className="course-card_ribbon">
                                    <i className="fas fa-badge-percent">
                                    </i>
                                    <span>10% 할인</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="course-title">블록체인, 가상자산거래소 보안</p>
                                <p className="instructor">ISMS-P WIN</p>
								<div className="price-wrap">
									<del className="origin-price">₩110,000</del>
									<span className="price">₩99,000</span>
								</div>
                                <div className="course-tags">
                                    <span className="course-tag tag2">새강의</span>
                                    <span className="course-tag tag">할인중</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/327596/cover/ce0eeef3-70d0-4efe-bd75-b8d1da6298c3/Powerpoint-2013-eng-1 (1200x781).jpg" alt="강의이미지" />
                                </figure>
                                <div className="course-card_ribbon">
                                    <i className="fas fa-badge-percent">
                                    </i>
                                    <span>30% 할인</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="course-title">시간을 줄이고 업무가 풀리는 파워포인트 2013</p>
                                <p className="instructor">유밥(Ubob)</p>
								<div className="price-wrap">
									<del className="origin-price">₩89,100</del>
									<span className="price">₩62,370</span>
								</div>
                                <div className="course-tags">
                                    <span className="course-tag tag2">새강의</span>
                                    <span className="course-tag tag">할인중</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328974/cover/412085a5-3809-4b34-bbd7-9ed55769f976/파이썬 터틀 프로젝트 1편 인프런 썸네일.png" alt="강의이미지" />
                                </figure>
                                <div className="course-card_ribbon">
                                    <i className="fas fa-badge-percent">
                                    </i>
                                    <span>20% 할인</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="course-title">예제로 배우는 파이썬 터틀 프로젝트 1편 [비전공자 초급 과정]</p>
                                <p className="instructor">코드덤</p>
								<div className="price-wrap">
									<del className="origin-price">₩55,000</del>
									<span className="price">₩44,000</span>
								</div>
                                <div className="course-tags">
                                    <span className="course-tag tag2">새강의</span>
                                    <span className="course-tag tag">할인중</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328900/cover/3d20baf0-3e82-4bf0-a930-e41b9ce81076/328900-eng.png" alt="강의이미지" />
                                </figure>
                                <div className="course-card_ribbon">
                                    <i className="fas fa-badge-percent">
                                    </i>
                                    <span>30% 할인</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="course-title">비즈니스 애널리틱스, 데이터 기반 실적 개선 프로젝트 실무 마스터 클래스</p>
                                <p className="instructor">마소캠퍼스</p>
								<div className="price-wrap">
									<del className="origin-price">₩129,800</del>
									<span className="price">₩90,860</span>
								</div>
                                <div className="course-tags">
                                    <span className="course-tag tag2">새강의</span>
                                    <span className="course-tag tag">할인중</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="course-card">
                        <a href="#">
                            <div className="card-image">
                                <figure>
                                    <img src="https://cdn.inflearn.com/public/courses/328973/cover/8303064c-2e44-4ee2-b72b-73483cbf9bb8/328973-eng.png" alt="강의이미지" />
                                </figure>
                                <div className="course-card_ribbon">
                                    <i className="fas fa-badge-percent">
                                    </i>
                                    <span>30% 할인</span>
                                </div>
                            </div>
                            <div className="card-content">
                                <p className="course-title">데이터 기반 마케팅 영업 전략 실무 마스터 클래스</p>
                                <p className="instructor">마소캠퍼스</p>
								<div className="price-wrap">
									<del className="origin-price">₩79,200</del>
									<span className="price">₩55,440</span>
								</div>
                                <div className="course-tags">
                                    <span className="course-tag tag2">새강의</span>
                                    <span className="course-tag tag">할인중</span>
                                </div>
                            </div>
                        </a>
                    </div>
					</div>
			   </div>
           </section>
           <MpReview />
           <section className="main-banner2">
                <div className="main-banner2-content">
                    <div className="banner2-item">
                        <div className="container banner2-inner">
                            <p>모든 팀원이 인프런의 강의들을<br/>자유롭게 학습하는 환경을 제공해주세요.</p>
                            <a href="#">비즈니스 알아보기</a>
                        </div>
                    </div>
                </div>
           </section>
           <section className="group">
                <div className="group-title">이미 많은 기업 구성원들이 인프런에서 성장하고 있어요.</div>
                <ul className="group-logo_wrap">
                    <li><img src="images/group-logo/line.png" alt="라인" /></li>
                    <li><img src="images/group-logo/baemin.png" alt="우아한형제들" /></li>
                    <li><img src="images/group-logo/sk.png" alt="SK" /></li>
                    <li><img src="images/group-logo/naver.png" alt="네이버" /></li>
                    <li><img src="images/group-logo/nexon.png" alt="카카오" /></li>
                    <li><img src="images/group-logo/samsung.png" alt="삼성" /></li>
                    <li><img src="images/group-logo/kakao.png" alt="카카오" /></li>
                    <li><img src="images/group-logo/coupang.png" alt="쿠팡" /></li>
                    <li><img src="images/group-logo/lg.png" alt="LGCNS" /></li>
                    <li><img src="images/group-logo/nc.png" alt="NC" /></li>
                </ul>
           </section>
           <MpApply />
       </main>
        <Footer />
    </>
  )
}

export default MainPage