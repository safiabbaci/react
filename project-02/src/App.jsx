import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="card-container">
        <Card name='Safiullah Abbasi' city='Birote Abbottabad' deg='CS' />
        <Card name='Umair Waheed' city='Athmuqam AJK' deg='CS' />
        <Card name='Abdullah Abbasi' city='Birote Abbottabad' deg='CS' />
        <Card name='Aman Mughal' city='Bagh AJK' deg='CS' />
        <Card name='Moiz Abbasi' city='Birote Abbottabad' deg='CS' />
      </div>
      <Footer />
    </div>
  )
}

export default App