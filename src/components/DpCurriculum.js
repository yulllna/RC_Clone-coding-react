import React from 'react';

function DpCurriculum() {
  return (
    <>
      <section className="cd-curriculum">
        <div className="cd-curriculum__header">
          <span className="cd-curriculum__title">커리큘럼</span>
          <span className="cd-curriculum__sub-title">
            총 40 개 ˙ 4시간 52분의 수업
          </span>
        </div>
        <div className="cd-curriculum__description">
          <span>
            이 강의는 영상, 수업 노트, 첨부 파일, 미션이 제공됩니다. 미리보기를
            통해 콘텐츠를 확인해보세요.
          </span>
          <button className="ac-button is-outlined is-gray e-curri-open-all">
            모두 접기
          </button>
        </div>
        <div className="cd-curriculum__content">
          <div className="cd-curriculum__accordion cd-accordion">
            <div className="cd-accordion__section-cover">
              <div className="cd-accordion__section e-curri-open cd-accordion__section--open">
                <span className="infd-icon is-open">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="infd-icon is-close">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    ></path>
                  </svg>
                </span>
                <span className="cd-accordion__section-title">
                  섹션 0. 들어가기
                </span>
                <span className="cd-accordion__section-info">3 강 ∙ 7분</span>
              </div>
              <div className="cd-accordion__unit-cover">
                <a
                  className="cd-accordion__unit"
                  href="/course/정대리-스위프트-기초/lecture/97019"
                >
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    개발레벨 0에서 1000가기
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--preview">
                      미리보기
                    </span>
                  </span>
                </a>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    구글링 하는 법
                  </span>
                  <span className="ac-accordion__unit-infos"></span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    ⭐️ iOS 개발자 준비하시는 분들 꼭 보세요!!!
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">07:47</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cd-accordion__section-cover">
              <div className="cd-accordion__section e-curri-open cd-accordion__section--open">
                <span className="infd-icon is-open">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="infd-icon is-close">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    ></path>
                  </svg>
                </span>
                <span className="cd-accordion__section-title">
                  섹션 1. 스위프트 기초문법 뽀개기
                </span>
                <span className="cd-accordion__section-info">
                  33 강 ∙ 3시간 57분
                </span>
              </div>
              <div className="cd-accordion__unit-cover">
                <a
                  className="cd-accordion__unit"
                  href="/course/정대리-스위프트-기초/lecture/96060"
                >
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    1일차 - 조건문
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--preview">
                      미리보기
                    </span>
                    <span className="ac-accordion__unit-info--time">06:30</span>
                  </span>
                </a>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    2일차 - foreach 반복문
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">05:08</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    3일차 - enum 케이스 나누기
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">10:01</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    4일차 - For 반복문
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">05:07</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    5일차 - Unwrap 옵셔널변수
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">10:08</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    6일차 - 클래스 vs 스트럭트
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">13:57</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    7일차 - 프로퍼티 옵저버
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">00:53</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    8일차 - 함수 매개변수 이름
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">03:47</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    9일차 - 제네릭
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">04:17</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    10일차 - 클로저
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">05:12</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    11일차 - 매개변수로서 클로저
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">24:49</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    12일차 - 객체 생성자, 해제자
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">05:34</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    13일차 - 상속
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">06:36</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    14일차 - 딕셔너리
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">10:32</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    15일차 - 파이널 클래스
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">03:00</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    16일차 - 메소드 매개변수 inout
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">05:30</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    17일차 - 에러
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">15:10</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    18일차 - 스트럭트 mutating
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">04:47</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">19일차 - Set</span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">09:13</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    20일차 - 스트럭트 메소드
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">01:05</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    21일차 - 프로토콜
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">04:19</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    22일차 - 프로토콜 상속
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">02:07</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    23일차 - 프로토콜 확장
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">02:54</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    24일차 - 프로토콜 associatedType
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">04:24</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    25일차 - typealias 별칭
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">15:24</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    26일차 - lazy 키워드
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">09:21</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    27일차 - 고차함수 (Higher Order Functions)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">08:56</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    28일차 - 고차함수 - sort, sorted (정렬)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">16:03</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    29일차 - private(set) - 밖에서 못바꿈
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">06:16</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    30일차 - foreach 문에서 인덱스 같이 가져오기 (enumerated)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">01:08</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    31일차 - 고차함수 - map (요소 바꾸기)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">12:14</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    32일차 - 고차함수 compactMap (옵셔널 언랩핑 해버리기)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">00:30</span>
                  </span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    33일차 - 고차함수 flatmap (2차원 배열 -&gt; 1차원 배열로
                    납작하게 만들기)
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">03:02</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cd-accordion__section-cover">
              <div className="cd-accordion__section e-curri-open cd-accordion__section--open">
                <span className="infd-icon is-open">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="infd-icon is-close">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    ></path>
                  </svg>
                </span>
                <span className="cd-accordion__section-title">
                  섹션 2. 리액티브 스위프트 - 콤바인 Combine
                </span>
                <span className="cd-accordion__section-info">4 강 ∙ 46분</span>
              </div>
              <div className="cd-accordion__unit-cover">
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    콤바인 개념정리
                  </span>
                  <span className="ac-accordion__unit-infos"></span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    Uikit 실습 - 비밀번호 매치
                  </span>
                  <span className="ac-accordion__unit-infos"></span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    Uikit 실습 - 디바운스 검색어 입력
                  </span>
                  <span className="ac-accordion__unit-infos"></span>
                </div>
                <div className="cd-accordion__unit">
                  <span className="infd-icon">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M6.333 10.39V5.61c0-.263.292-.422.514-.28l3.717 2.39c.204.13.204.43 0 .56l-3.717 2.39c-.222.142-.514-.017-.514-.28z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 1.667C4.502 1.667 1.667 4.502 1.667 8S4.502 14.333 8 14.333 14.333 11.498 14.333 8 11.498 1.667 8 1.667zM.667 8C.667 3.95 3.95.667 8 .667c4.05 0 7.333 3.283 7.333 7.333 0 4.05-3.283 7.333-7.333 7.333C3.95 15.333.667 12.05.667 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ac-accordion__unit-title">
                    콤바인 API 동시, 연쇄 호출
                  </span>
                  <span className="ac-accordion__unit-infos">
                    <span className="ac-accordion__unit-info--time">46:46</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="cd-accordion__section-cover">
              <div className="cd-accordion__section e-curri-open ">
                <span className="infd-icon is-open">
                  <svg
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      d="M3.22 9.78c-.293-.293-.293-.767 0-1.06l4.25-4.25c.293-.293.767-.293 1.06 0l4.25 4.25c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0L8 6.06 4.28 9.78c-.293.293-.767.293-1.06 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="infd-icon is-close">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#495057"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7803 6.21967C13.0732 6.51256 13.0732 6.98744 12.7803 7.28033L8.53033 11.5303C8.23744 11.8232 7.76256 11.8232 7.46967 11.5303L3.21967 7.28033C2.92678 6.98744 2.92678 6.51256 3.21967 6.21967C3.51256 5.92678 3.98744 5.92678 4.28033 6.21967L8 9.93934L11.7197 6.21967C12.0126 5.92678 12.4874 5.92678 12.7803 6.21967Z"
                    ></path>
                  </svg>
                </span>
                <span className="cd-accordion__section-title">
                  섹션 3. 스위프트 동시성 Concurrency
                </span>
                <span className="cd-accordion__section-info">0 강 </span>
              </div>
              <div
                className="cd-accordion__unit-cover"
                style={{ maxHeight: '0px' }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="cd-date">
        <div className="cd-date__content">
          <span className="cd-date__published-date">
            강의 게시일 : 2021년 11월 24일
          </span>
          <span className="cd-date__last-updated-at">
            (마지막 업데이트일 : 2022년 06월 03일)
          </span>
        </div>
      </section>
    </>
  );
}

export default DpCurriculum;
