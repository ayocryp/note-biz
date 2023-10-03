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
      <img
        src="/assets/Image/Main/Limitless Commit.jpeg"
        alt=""
        className="commitment_img"
      />

      <p className={styles.commitment_text}>
        Your GCMS Notes Authority: With extensive experience and deep expertise
        in the GCMS system, we are your go-to service for acquiring critical
        information related to your Canadian visa application. From initial
        inquiry to GCMS notes delivery, our dedicated team is committed to your
        success.
      </p>
      <p className={styles.commitment_text}>
        Unbiased and Transparent: Integrity is our guiding principle. Count on
        us to provide you with an impartial and transparent service. We deliver
        accurate, unaltered information, empowering you to make informed
        decisions regarding your visa application.
      </p>

      <p className={styles.commitment_text}>
        Trustworthy Service: Trust is at the core of everything we do. We
        understand the significance of your Canadian visa application and its
        impact on your life. When you choose LIMITLESS, you're selecting a
        partner dedicated to your success and peace of mind.
      </p>

      <p className={styles.commitment_text}>
       Good Customer support: We take pride in offering exceptional customer support as
        an integral part of our GCMS notes service. Our dedicated team is
        committed to providing prompt, knowledgeable, and friendly assistance to
        ensure your experience with us is nothing short of outstanding. Your
        satisfaction and peace of mind are our top priorities, and we're here to
        assist you every step of the way.
      </p>

      <p className={styles.commitment_text}>
       Hence, when it comes to your GCMS (Global Case Management System) notes needs,
        look no further than LIMITLESS. Our commitment to excellence and
        unwavering dedication to serving you sets us apart as the optimal choice
        for obtaining critical information related to your Canadian visa
        application.
      </p>
    </div>
  );
}

export default Commitment