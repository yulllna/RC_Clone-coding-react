import React from 'react'

function MpSearch() {
  return (
    <>
        <section className="main-search">
            <div className="container">
                <div className="content main-search_inner">
                    <h1 className="search-title">배우고, 나누고, 성장하세요</h1>
                    <div className="search_wrap">
                        <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." />
                        <button>
                            <span>
                            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>    
        <section className="main-tags">
            <ul className="tag-wrap">
                <li className="tag-item">
                    <a href="#">#MVC</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Spring Boot</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Back-End</a>
                </li>
                <li className="tag-item">
                    <a href="#">#JPA</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Front-End</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Python</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Java</a>
                </li>
                <li className="tag-item">
                    <a href="#">#Spring</a>
                </li>
                <li className="tag-item">
                    <a href="#">#게임개발</a>
                </li>
                <li className="tag-item">
                    <a href="#">#JavaScript</a>
                </li>
            </ul>
        </section>
    </>
  )
}

export default MpSearch