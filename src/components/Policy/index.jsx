import React from 'react'
import styles from "./policy.module.css"

const Policy = () => {
    return (
        <div className={styles.policy_main_wrap}>
            <h2 className={`${styles['h2']} mb-14  lg:text-6xl md:text-4xl sm:text-3xl text-4xl`}>Policy privacy</h2>
            <h2 className={` ${styles['h2']}`}>Privacy and Information Security Policy
            </h2>
            <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information. No personal information is shared or sold to any third party.

                We are committed to respecting the personal privacy of individuals who visit this web site. We respect your time and promise to stick to our no-spam and no-up-sales policy.</p>
            
            <div className='mt-12'>
            <h2 className='mb-3'>Why we collect personal information
            </h2>
            <p>“Personal Information” means any information relating to an identified or identifiable person. We only use your personal information for the purpose of providing you with the GCMS, CBSA, CSIS or Entire File.

We do not sell our users’ personal information to any third party in exchange for monetary consideration. And, we have no intention of doing so in the future!

</p>
                
            </div>


            <div className='mt-12'>
                <h2 className='mb-3'>What personal information do we collect</h2>
                <p>
                We only collect personal information that is directly related to providing you with the GCMS, CBSA, CSIS or Entire File. We collect the minimal amount of information required which includes your name, date of birth, email address, UCI, File number and visa type.

We do not require a copy of your passport to process your order; however due to Identity Verification requirements government institutions may request a copy once they begin processing your order. Each government institution determines what is adequate identification given the risks; for example CSIS has made Identity Verification mandatory. Other government institutions may take a risk-based approach and may have different requirements. We will notify you via email if there is a request for a copy of your passport or any other form of identification.

We do NOT need your mailing address or phone number under any circumstance. Also, we NEVER store your credit card information.
                </p>
            </div>

            <div className='mt-12'>
                <h2 className='mb-3'>Who sees your personal information</h2>
                <p>

Access to your personal information is restricted to only staff members within our organisation who need the information to process your order.

We offer you peace of mind when you use our services because we will NEVER sell or trade your information for commercial purposes.</p>
            </div>

            <div className="mt-12">
                <h2 className="mb-3">How we protect your personal information</h2>
                <p>
In any organization, failure to protect personal information can increase the risk of a privacy breach. These privacy breaches can lead to things such as reputational harm, fraud or identity theft.

We use exceptionally strong safeguards to protect the privacy of all our records, including your personal information. These strong safeguards designed to prevent unauthorized access, disclosure, loss, theft, copying, use or modification to your personal information. Technical measures include passwords, audit trails, SSL encryption, firewalls and other technical security safeguards. Furthermore, we conduct periodic audits to ensure security of all the services.</p>
            </div>

            <div className="mt-12 flex  py-5 px-3 justify-center  bg-slate-100 rounded-sm">
            <div className='w-1/2'><img  src="/assets/Image/Policy/gworkspace.png" alt="" /></div>
               <div className='w-60'><img className='' src="/assets/Image/Policy/cloudflare.png" alt="" /></div>
               
                
              
            </div>

            <div className="mt-12">
                <p>Our web-infrastructure and website-security is managed by Cloudflare.com. We use Google Workspace for email and office productivity. Our electronic signatures service for the Consent form is provided by SignNow.com

For credit card transactions we operate exclusively with PCI compliant payment processors and never store your credit card information.

Our business is based on trust and transparency and we are committed to keeping your information safe and secure.</p>
         </div>
            

            <div className="mt-12">
                <h2 className='mb-3'>Consent form</h2>
                <p>

The consent form you provide us to order your GCMS, CBSA, CSIS or Entire File is NOT reused if you chose to re-order your file at a later date. To be complaint with industry standards for managing personal information we will need a consent form each time you place an order with us.</p>
            </div>

            <div className="mt-12">

                <h2 className="mb-3">
                Retention and destruction of personal information


                </h2>
                <p>
We erase or destroy the records containing personal information when they are no longer required; this is always done in ways that will ensure your continued privacy. After 30 days your file is removed from our server for your security.
                </p>
            </div>

            <div className="mt-12">
                <h2 className="mb-3">
                Cookies
                </h2>
                <p>
               
In building our website we do NOT store cookies in your browser. There are third-party services we use with this ability; these services include Stripe.com, PayPal.com, YouTube.com, Twitter.com and Cloudflare.com 
                </p>
            </div>

            <div className="mt-12">
                <h2 className="mb-3">
                Fraud prevention
                </h2>
                <p>
              
The fight against fraud starts with you. Discover free resources that are available to help you recognize, reject and report fraud.

Email fraud, often called phishing, typically involves the use of deceptive emails that ask you to provide sensitive personal or financial information. GcmsNotes.com will never ask you to provide your banking, credit or debit card information or any other sensitive financial information in response to an email. In our email messages to you, we include a security footer message to help you distinguish authentic emails from phishing attempts. If you receive an email that appears to be from GcmsNotes.com and you’re not sure if it’s real, don’t click on any links in the email. Please forward us any email that you suspect may be fraudulent. We take any attempts to fraudulently use our brand very seriously.


                </p>
            </div>

            <div className="mt-12">
                <p>

                    <h2 className="mb-3">
                    Changes to our policy
                    </h2>


We may need to change this policy from time-to-time and all updates will be posted online.
                </p>
            </div>
           
        </div>
    )
}

export default Policy