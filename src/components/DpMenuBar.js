import React from 'react';

function DpMenuBar() {
  return (
    <>
      <div className="cd-menu">
        <ul className="cd-menu__container">
          <li className="cd-menu-item">
            <a href="#">강의소개</a>
          </li>
          <li className="cd-menu-item">
            <a href="#">커리큘럼</a>
          </li>
          <li className="cd-menu-item">
            <a href="#">수강평</a>
          </li>
          <li className="cd-menu-item">
            <a href="#">수강전 문의</a>
          </li>
          <li className="cd-menu-item">
            <a href="#">커뮤니티</a>
          </li>
          <li className="cd-menu-item">
            <a href="#">새소식</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DpMenuBar;
