import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CPHeader from '../components/CPHeader';
import DpApply from '../components/DpApply';
import CPNavigation from '../components/CPNavigation';
import './CommunityPage.css'
import CPBody from '../components/CPBody';

function ReviewPage() {
  return (
    <>
      <Header />
      <CPHeader />
      <section className="community-body">
        <CPNavigation />
        <div className="community-body_content">
          <CPBody />
        </div>
      </section>
      <DpApply/>
      <Footer />
    </>
  )
}

export default ReviewPage