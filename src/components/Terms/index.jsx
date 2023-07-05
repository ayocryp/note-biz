import styles from './terms.module.css'

const Terms = () => {
    return (
        <div className={styles.policy_main_wrap}>
            <h2 className={`${styles['h2']} mb-14 lg:text-6xl md:text-4xl sm:text-3xl text-4xl`}>Terms of Service</h2>
            <h2 className={` ${styles['h2']}`}>Privacy and Information Security

            </h2>
            <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information. No personal information is shared or sold to any third party.

                We are committed to respecting the personal privacy of individuals who visit this web site. We respect your time and promise to stick to our no-spam and no-up-sales policy.

                You can also review the entire privacy policy, which outlines our practices towards handling your personal information.

            </p>

            <div className='mt-12'>
                <h2 className='mb-3'>Why we collect personal information
                </h2>
                <p>“Personal Information” means any information relating to an identified or identifiable person. We only use your personal information for the purpose of providing you with the GCMS, CBSA, CSIS or Entire File.

                    We do not sell our users’ personal information to any third party in exchange for monetary consideration. And, we have no intention of doing so in the future!

                </p>

            </div>


            <div className='mt-12'>
                <h2 className='mb-3'>Service standards
                </h2>
                <p>
                    How do we process an order? – Once we receive the application details, payment and consent form your request for GCMS, CBSA, CSIS or Entire File is submitted to the concerning government agency. The order is usually submitted within 24 hours of receiving all the requisite information during regular business hours. During times of exceptional demand, it may take longer than 24 hours to process a request.

                    All government agencies processes orders only during regular business hours, Eastern Time. That means processing of orders received outside of operating hours, the weekend or on a holiday will begin the following business day.

                    First Come First Served – Orders are processed on a first come, first serve basis.

                    How long will it take? – The legislated time-frame for processing a request under the Access to Information Act is 30 calendar days. If the 30 day deadline falls on a weekend or on a holiday, the due date becomes the next business day. Please note, the GCMS notes are usually generated around the time the requests are made, not at the time they are released. See the Process Overview
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

                    We use exceptionally strong safeguards to protect the privacy of all our records, including your personal information. These strong safeguards are designed to prevent unauthorized access, disclosure, loss, theft, copying, use or modification to your personal information. Technical measures include passwords, audit trails, SSL encryption, firewalls and other technical security safeguards. Furthermore, we conduct periodic audits to ensure security of all the services.</p>
            </div>



            <div className="mt-4">
                <p>Tracking – To track the status of your order visit status.gcmsnotes.com

                    Extensions – IRCC or any government institution like CBSA, CSIS, RCMP, etc. can extend the time limit to respond to a request beyond the 30 calendar days. Below are some scenarios of why the processing of an order may take more than 30 days:

                    the request is for a large number of records or requires a search through a large number of records, and the original time limit would unreasonably interfere with operations
                    external consultations are necessary and cannot reasonably be expected to be completed within the original time limit or
                    notice to a third party is required to advise him or her that his or her information is the subject of a request
                    We may be notified within the first 30 days if the processing of your order is going to be delayed. Please note that government institutions are not obligated to notify if there is a delay. If we get notified then we will inform you as well, otherwise continue to use the self-serve portal to check the status of your order.

                    Delays – Delays in receiving information from IRCC and CBSA can and do occur, checkout the statistics.

                    Complaints about delays? – We file a complaint, on a case-by-case basis, with the Office of the Information Commissioner of Canada if your file is delayed. Please note that this complaint will not speed up the processing of your request with the concerning government agency.</p>
            </div>


            <div className="mt-12">
                <h2 className='mb-3'>Pricing</h2>
                <p>

                    Pricing is in CAD, USD and other international currencies as indicated during checkout. </p>

            </div>

            <div className="mt-12">

                <h2 className="mb-3">
                    Payment

                </h2>
                <p>

                    We use the services of the following third parties, you are encouraged to read their privacy policies by following the links below.

                    Stripe
                    PayPal
                </p>
            </div>

            <div className="mt-12">
                <h2 className="mb-3">
                    Cancellation and refund
                </h2>
                <p>


                    We have a very simple and straightforward refund policy. Your order is processed once we receive the application details, payment and consent form. If you decide to cancel your order and your request has not been processed, we offer a refund according to the terms and conditions of the payment method used. However once we process your request, a refund can not be issued.

                    Please note that [starting September 4th, 2021] a refund administration fee of US$5.00, or the equivalent in the currency of payment, will be assessed to process an eligible refund. The refund administration fee will change [starting November 12th, 2021] to US$10.00 or the equivalent in the currency of payment.

                    Refunds can not be issued in case of processing delays caused by circumstances and factors beyond our control, including but not limited to that resulting directly or indirectly from pandemic, natural disaster(s), strikes, civil disturbances, government restrictions or regulations and Act(s) of God.


                </p>
            </div>



        </div>
    )
}

export default Terms