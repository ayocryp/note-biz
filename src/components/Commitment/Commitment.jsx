import React from 'react'
import styles from './Commitment.module.css'

function Commitment() {
  return (
    
    <div className={styles.commitment_main_wrap}>
      <h2 className={styles.commitment_heading}>Our Commitment</h2>
      

      {/* <div className={styles.commitment_li_main_wrap}>
        <ul className={styles.commitment_ul}>
          <li className={styles.commitment_li}>Confidential</li>
          <li className={styles.commitment_li}>Secure</li>
          <li className={styles.commitment_li}>Reliable</li>
          <li className={styles.commitment_li}>Trustworthy</li>
          <li className={styles.commitment_li}>Timely Delivery</li>
          <li className={styles.commitment_li}>Customer Support</li>
        </ul>

        <div>
          <img
            className={styles.commitment_img}
            src="/assets/Image/Service/atip no bg.png"
            alt=""
          /> */}
      <img src="/assets/Image/Main/Limitless Commit.jpeg" alt="" className='commitment_img'/>
       
      <p className={styles.commitment_text}>
        Limitless Immigration is a professional and independent organization
        that offers GCMS notes service to individuals who have applied for a
        Canadian visa. We pride ourselves on providing an unbiased, transparent,
        safe and trustworthy service to our clients. As an independently owned
        and operated business. 
       
      </p>
      <p className={styles.commitment_text}>
      Limitless Immigration is a professional and independent organization
        that offers GCMS notes service to individuals who have applied for a
        Canadian visa. We pride ourselves on providing an unbiased, transparent,
        safe and trustworthy service to our clients. As an independently owned
        and operated business, we are committed to providing high-quality
        services to ensure our clients receive accurate and reliable information
    
      </p>
        
     
    
    </div >
    
  );
}

export default Commitment