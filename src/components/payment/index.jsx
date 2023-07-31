import React from "react";
import { PaystackButton } from "react-paystack";
import { useState } from "react";

const Payment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Form handle

  const publicKey = "pk_test_de0f7ff3c26fbc3449553a4bc56484048aba0f40";
  const amount = 1000000;

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Working"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  // Formik

  // const formik = useFormik(
  //     {
  //         initialValues: {
  //             name: "",
  //             email: "",
  //             phoneNumber: "",

  //         },

  //         onSubmit,

  //     }
  // )

  // async function onSubmit(values) {

  //     console.log(values);

  // }

  return (
    <div className="py-20 flex justify-center h-screen items-center">
      <div>
        <div className="my-2">
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            className=" w-[300px] px-1 py-1 border border-slate-300"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email{" "}
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" w-[300px] px-1 py-1 border border-slate-300"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNumber">
            Phone Number{" "}
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            name="phoneNumber"
            className=" w-[300px] px-1 py-1  border border-slate-300"
            type="number"
          />
        </div>

        <div className=" text-center">
          <PaystackButton className="bg-green-400 border" {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
