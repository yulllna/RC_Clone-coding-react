import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DpCourseDescription from '../components/DpCourseDescription';
import DpMenuBar from '../components/DpMenuBar';
import DpDetailBody from '../components/DpDetailBody';
import DpCurriculum from '../components/DpCurriculum';
import DpReview from '../components/DpReview';
import DpFloating from '../components/DpFloating';
import DpSubCourse from '../components/DpSubCourse';
import DpApply from '../components/DpApply';
import './DetailPage.css';

function DetailPage() {
  return (
    <>
      <Header />
      <main>
        <section className="course-description">
          <DpCourseDescription />
          <DpMenuBar />
          <div className="cd-content">
            <div className="dp-container">
              <div className="cd-content_wrap">
                <DpDetailBody />
                <DpCurriculum />
                <DpReview />
              </div>
              <DpFloating />
            </div>
          </div>
          <DpSubCourse />
        </section>
        <DpApply />
      </main>
      <Footer />
    </>
  );
}

export default DetailPage;
