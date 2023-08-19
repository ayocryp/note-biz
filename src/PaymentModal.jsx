import React from "react";
import ReactDOM from "react-dom";
import "./PaymentModal.css";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { usePayContext } from "./Context/PayContext";

const Backdrop = (props) => {
  return <div onClick={props.onRemoveModal} className=" backdrop"></div>;
};

const ModalOverlay = (props) => {
  const { setIsPaid } = usePayContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [defaultAmount, setDefaultAmount] = useState("");

  // Form handle

  const publicKey = "pk_test_de0f7ff3c26fbc3449553a4bc56484048aba0f40";
  const amount = 10000;

  const componentProps = {
    email,
    amount,
    defaultAmount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => setIsPaid(true),
    onClose: () => setIsPaid(false),
  };

  return (
    <div className=" form_container   top-[25%] left-[37%] z-20 fixed  ">
      <div className="form_image">
        <img
          src="https://res.cloudinary.com/dgah5rv12/image/upload/v1690581861/zibkuly0qtdrca83r8ln.svg"
          alt="img"
        />
      </div>
      <div className="my-2">
        <label className="block mb-1" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          required
          className=" w-[300px] px-1 py-1 border border-green-300"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
          className=" w-[300px] px-1 py-1 border border-slate-300"
          type="email"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          name="phoneNumber"
          required
          className=" w-[300px] px-1 py-1  border border-slate-300"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="Amount">
          Amount
        </label>
        <input
          onChange={(e) => setDefaultAmount(e.target.value)}
          placeholder="NGN10,000"
          name="Amount"
          disabled={true}
          className=" w-[300px] px-1 py-1  border border-slate-300"
          type="text"
        />
      </div>

      <div className="text-center ">
        <PaystackButton
          className="py-2 paystackButton px-11 "
          {...componentProps}
        />
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onRemoveModal={props.handleModalRemove} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Modal;
