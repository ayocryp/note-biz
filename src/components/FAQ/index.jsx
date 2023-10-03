import { FaqContainer, FaqWrapper, SectionTitle } from "./faq.style";
import Accordion from "react-bootstrap/Accordion";

const FAQ_DATA = [
  {
    question: "How do you process the order?",
    answer:
      "Once you sucessfully make payment, then you will be able to submit the consent form with your application details,  Once we receive your submission, we will process the order by submitting your request to the govt. agency. The order is submitted within 24 hours of receiving all the requisite information.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "The official time-frame for processing a request under the Access to Information Act is 30 calendar days.",
  },
  {
    question: "How will i receive the GCMS Note ?",
    answer: `The file will be sent to you electronically in a password protected PDF format.`,
  },
  {
    question: "Privacy & Information Security Policy",
    answer:
      "Here at Limitless, our service is based on trust and transparency and we are committed to keeping your information safe and secure. Please Check our policy page to see how we protect your personal data. ",
  },
  
];

const FaqComponent = () => (
	<FaqContainer id="faq">
		<FaqWrapper>
			<SectionTitle>Frequently Asked Questions</SectionTitle>

			<Accordion defaultActiveKey="0" >
				{FAQ_DATA.map((item, index) => (
					<Accordion.Item eventKey={"key" + index} key={index}>
						<Accordion.Header >{item.question}</Accordion.Header>
						<Accordion.Body>{item.answer}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</FaqWrapper>
	</FaqContainer>
);

export default FaqComponent;
