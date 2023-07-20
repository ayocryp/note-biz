import {
  GroupTitle,
  DownloadBtn,
  Desc,
  OrderContainer,
  OrderWrapper,
  Title,
} from "./get_your_note.style";


import { BsArrowDownRight } from "react-icons/bs";

const GetYourNotes = () => {
  const handleDownloadClick = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/consent.pdf`, "_blank")
  };

  return (
    <OrderContainer>
      <OrderWrapper>
        <Title>Get your notes</Title>
        <Desc>
          Please provide the following information to process your request.
          Enter any other information in the Additional Notes section. After
          submitting this form you will be taken to complete the Payment. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi
          rerum omnis numquam autem at. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis velit sunt vero accusantium. Lorem ipsum
          dolor sit. adipisicing elit. Similique excepturi rerum omnis numquam
          autem at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis velit sunt vero accusantium...
        </Desc>

        <div>
          <p>
            <GroupTitle>WHY IS A CONSENT FORM REQUIRED?</GroupTitle>
            <br />A consent form is required pursuant to the Canadian Privacy
            Act, which states that personal information shall not, without the
            consent of the individual to whom it relates, be disclosed.
            <br />
            <br /> A properly filled in consent form will ensure timely
            processing of your order! Print and hand sign directly on the
            printed form. Each individual 16 years of age or older must sign on
            their own and the signature must be consistent with the official
            signature on the passport. Please review the instructions
          </p>
          <DownloadBtn onClick={handleDownloadClick}>
            DOWNLOAD CONSENT FORM
            <span>
              <BsArrowDownRight />
            </span>
          </DownloadBtn>
        </div>

        <div>
          <a href="https://paystack.com/pay/limiltess">
            <button className="bg-[#008001]  text-slate-50 w-[320px] py-2 font-semibold rounded-sm text-xl border-0 ">
              Proceed
            </button>
          </a>
        </div>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default GetYourNotes;
