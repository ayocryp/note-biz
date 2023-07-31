// import { Link } from "react-router-dom";
import {
  GroupTitle,
  Desc,
  OrderContainer,
  OrderWrapper,
  Title,
  HowTo,
  MyButton,
} from "./get_your_note.style";
import Modal from "src/PaymentModal";
import { useState } from "react"; 
// import Payment from "../payment/index";



// import { BsArrowDownRight } from "react-icons/bs";

const GetYourNotes = () => {

  const [isShowModal, setShowModal] = useState(null)

  const cancelModal = ()=>{
    setShowModal(null)
    console.log('remove');

  }
  

  const showModal = ()=>{
    setShowModal(true)
    console.log('working')
  }

  return (
    <>
      {isShowModal && <Modal handleModalRemove={cancelModal} >
     
        
        </Modal>}

      <div>
        <OrderContainer>
          <OrderWrapper>
            <Title>Get your notes</Title>
            <Desc>
              Please provide the following information to process your request.
              Enter any other information in the Additional Notes section. After
              submitting this form you will be taken to complete the Payment.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              excepturi rerum omnis numquam autem at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis velit sunt vero
              accusantium. Lorem ipsum dolor sit. adipisicing elit. Similique
              excepturi rerum omnis numquam autem at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Perferendis velit sunt vero
              accusantium...
            </Desc>

            <div>
              <GroupTitle>How to order a note on Limitless</GroupTitle>
              <div>
                <HowTo>
                  <br />A consent form is required pursuant to the Canadian
                  Privacy Act, which states that personal information shall not,
                  without the consent of the individual to whom it relates, be
                  disclosed. A properly filled in consent form will ensure
                  timely processing of your order! Print and hand sign directly
                  on the printed form. Each individual 16 years of age or older
                  must sign on their own and the signature must be consistent
                  with the official signature on the passport. Please review the
                  instructions
                </HowTo>
              </div>
            </div>

            <MyButton>
              <button
                onClick={showModal}
                className="bg-[#008001]  text-slate-50 w-[320px] py-2 font-semibold rounded-sm text-xl border-0 "
              >
                Proceed
              </button>
            </MyButton>
          </OrderWrapper>
        </OrderContainer>
      </div>
    </>
  );
};

export default GetYourNotes;
