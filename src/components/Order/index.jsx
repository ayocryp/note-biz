import { useRef, useState } from "react";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import {
  Desc,
  FileUpload,
  FormContent,
  FormInput,
  FormItem,
  FormLabel,
  FormText,
  OrderButton,
  GroupWrapper,
  GroupTitle,
  NoteWrapper,
  OrderContainer,
  OrderWrapper,
  Title,
  FormSelect,
  DownloadBtn,
} from "./order.style";
import { BsArrowDownRight } from "react-icons/bs";
import Loader from "src/Loader";




//  toast.success("successful", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });

//     return true;
//   } catch (error) {
//     toast.success("Error Happened", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });

//     return false;

const OrderComponent = () => {

  const [isLoading, setIsloading] = useState(false)
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dob: Yup.date().required("Date of Birth is required"),
    uciOrClientId: Yup.string().required("UCI or Client ID Number is required"),
    s_firstName: Yup.string().required("First Name is required"),
    s_lastName: Yup.string().required("Last Name is required"),
    s_email: Yup.string().email("Invalid email").required("Email is required"),
    s_uciOrClientId: Yup.string().required(
      "UCI or Client ID Number is required"
    ),
    app_email: Yup.string()
      .email("Invalid email")
      .required("Primary Email is required"),
    app_visatype: Yup.string().required("Please choose an option"),
    transactionId: Yup.string().required("Transaction ID is required"),
    file: Yup.mixed().required("A file is required"),
  });

  const validate = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (errors) {
      return errors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
    }
  };

  const LeafImage = ({ src }) => (
    <div>
      <img src={src} height="25px" width="25px" alt="Leaf" />
    </div>
  );

  const leafImages = [
    "https://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "https://www.pngmart.com/files/1/Green-Leaves-PNG-File.png",
    "https://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png",
    "https://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png",
  ];

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const sendData = async (data) => {
 setIsloading(true);
   
    try {
      fetch(
        "https://mummyserena-note-server.vercel.app/api/sender",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      )
        .then((res) => {
          res.json();
        })

        .then((result) => {
          setIsloading(false)
          toast.success(
            "Your order has been placed successfully! Please check your email"
          );
          navigate("/");
        });
    } catch (error) {
      toast.error(`${error.messgae}`);
    }
  };

  const fileRef = useRef(null);
const navigate = useNavigate();
  const onSubmit = async (values, form) => {
    const base64File = await fileToBase64(values.file);
    let formData = {
      file: base64File,
      values,
    };

    const success = await sendData(formData);

    if (success) {
      setTimeout(() => {
        form.reset(); // Reset the form after successful submission
      }, 0);
    }
    // Handle the response or error here
  };

  const renderField = (name, placeholder, type = "text") => (
    <Field name={name}>
      {({ input, meta }) => (
        <FormInput
          {...input}
          type={type}
          placeholder={placeholder}
          onBlur={() => input.onBlur(input.value.trim())}
          isError={meta.touched && meta.error}
        />
      )}
    </Field>
  );
  const handleDownloadClick = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/consent.pdf`, "_blank");
  };

  return (

    <OrderContainer>
    {isLoading ? <Loader/> : ""}
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
          Perferendis velit sunt vero accusantium
        </Desc>

        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <NoteWrapper>
                <div>
                  <p>
                    <GroupTitle>WHY IS A CONSENT FORM REQUIRED?</GroupTitle>
                    <br />A consent form is required pursuant to the Canadian
                    Privacy Act, which states that personal information shall
                    not, without the consent of the individual to whom it
                    relates, be disclosed.
                    <br />
                    <br /> A properly filled in consent form will ensure timely
                    processing of your order! Print and hand sign directly on
                    the printed form. Each individual 16 years of age or older
                    must sign on their own and the signature must be consistent
                    with the official signature on the passport. Please review
                    the instructions
                  </p>
                  <DownloadBtn onClick={handleDownloadClick}>
                    DOWNLOAD CONSENT FORM
                    <span>
                      <BsArrowDownRight />
                    </span>
                  </DownloadBtn>
                </div>
                <GroupWrapper>
                  <GroupTitle>PRIMARY APPLICANT</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>
                        First Name <span>*</span>
                      </FormLabel>
                      {renderField("firstName", "First Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>
                        Last Name <span>*</span>
                      </FormLabel>
                      {renderField("lastName", "Last Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>
                        Email Address <span>*</span>
                      </FormLabel>
                      {renderField("email", "Email Address")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>
                        Date of Birth <span>*</span>
                      </FormLabel>
                      {renderField("dob", "Date of Birth", "date")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>
                        UCI or Client ID Number <span>*</span>
                      </FormLabel>
                      {renderField("uciOrClientId", "xx-xxx-xx or xx-xxx-xxx")}
                    </FormItem>
                  </FormContent>
                </GroupWrapper>
                <GroupWrapper>
                  <GroupTitle>SPOUSE or PARTNER</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>First Name </FormLabel>
                      {renderField("s_firstName", "First Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Last Name </FormLabel>
                      {renderField("s_lastName", "Last Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      {renderField("s_email", "Email Address")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Spouse DOB</FormLabel>
                      {renderField("s_dob", "Date of Birth", "date")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>UCI or Client ID Number</FormLabel>
                      {renderField(
                        "s_uciOrClientId",
                        "xx-xxx-xx or xx-xxx-xxx"
                      )}
                    </FormItem>
                  </FormContent>
                </GroupWrapper>
                <GroupWrapper>
                  <GroupTitle>APPLICANT INFO</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>Visa Type *</FormLabel>

                      <Field name="app_visatype">
                        {({ input, meta }) => (
                          <FormSelect
                            {...input}
                            onBlur={() => input.onBlur(input.value.trim())}
                            isError={meta.touched && meta.error}
                          >
                            <option value="">
                              --Please choose an option--
                            </option>
                            <option value="study_work">Study Permit</option>
                            <option value="temporary_visa">
                              Temporary(Guest) Visa
                            </option>
                            <option value="work_permit">Work Permit</option>
                            <option value="permanent_residence">
                              Permanent Residence
                            </option>
                            <option value="other">Other</option>
                          </FormSelect>
                        )}
                      </Field>
                    </FormItem>
                    <FormItem>
                      <FormLabel>Application No</FormLabel>
                      {renderField("app_no", "X-XXX-XXX or unknown")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Primary Email *</FormLabel>
                      {renderField("app_email", "Primary Email")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Alternate Email</FormLabel>
                      {renderField("app_alter_email", "Alternate Email")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <Field name="app_notes">
                        {({ input, meta }) => (
                          <FormText
                            {...input}
                            placeholder="Provide any relevant information for your application"
                            onBlur={() => input.onBlur(input.value.trim())}
                            isError={meta.touched && meta.error}
                          />
                        )}
                      </Field>
                    </FormItem>
                  </FormContent>
                </GroupWrapper>
                <GroupWrapper>
                  <GroupTitle>* * *</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>Transaction ID *</FormLabel>
                      {renderField("transactionId", "xxxxxxxxxx")}
                    </FormItem>

                    <Field name="file">
                      {({ input, meta }) => (
                        <FileUpload isError={meta.touched && meta.error}>
                          <span onClick={() => fileRef.current.click()}>
                            {!meta.error
                              ? "Loaded File"
                              : "Upload Consent Form"}
                          </span>
                          <FormInput
                            type="file"
                            accept=".pdf"
                            ref={fileRef}
                            hidden
                            onChange={(event) => {
                              event.preventDefault();
                              input.onChange(event.target.files[0]);
                            }}
                            isError={meta.touched && meta.error}
                          />
                        </FileUpload>
                      )}
                    </Field>
                  </FormContent>
                </GroupWrapper>
                <OrderButton type="submit" disabled={submitting}>
                  Order Now
                </OrderButton>
              </NoteWrapper>
            </form>
          )}
        />
      </OrderWrapper>
      <div className="leaf">
        {leafImages.map((src, index) => (
          <LeafImage key={`leafimage`+index} src={src} />
        ))}
      </div>
    </OrderContainer>
  );
};

export default OrderComponent;
