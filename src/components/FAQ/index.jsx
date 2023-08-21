import { FaqContainer, FaqWrapper, SectionTitle } from "./faq.style";
import Accordion from "react-bootstrap/Accordion";

const FAQ_DATA = [
	{
		question: "Why GCMS notes? I need an answer, dolor sit amet consectetur adipisicing elit. Temporibus, magna",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam. dolor sit amet consectetur adipisicing elit. Temporibus, magna dolor sit amet consectetur adipisicing elit. Temporibus, magna",
	},
	{
		question: "Why GCMS?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS notes?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS notes?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS notes?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
	},
	{
		question: "Why GCMS?",
		answer:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, magnam.",
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
