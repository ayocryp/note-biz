import { useRef } from "react";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";
import axios from "axios";

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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dob: Yup.date().required("Date of Birth is required"),
  uciOrClientId: Yup.string().required("UCI or Client ID Number is required"),
  s_firstName: Yup.string().required("First Name is required"),
  s_lastName: Yup.string().required("Last Name is required"),
  s_email: Yup.string().email("Invalid email").required("Email is required"),
  s_uciOrClientId: Yup.string().required("UCI or Client ID Number is required"),
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
    <img src={src} height="75px" width="75px" alt="Leaf" />
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
  try {
    const response = await axios.post(
      "http://localhost:5000/api/sender",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response from backend:", response.data);
    return response;
  } catch (error) {
    console.error("Error sending data to backend:", error);
    return error;
  }
};

const OrderComponent = () => {
  const fileRef = useRef(null);

  const onSubmit = async (values) => {
    const base64File = await fileToBase64(values.file);
    let formData = {
      file: base64File,
      values,
    };

    await sendData(formData);
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
      <OrderWrapper>
        <Title>Get your notes</Title>
        <Desc>
          Please provide the following information to process your request.
          Enter any other information in the Additional Notes section. After
          submitting this form you will be taken to complete the Payment.
        </Desc>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <NoteWrapper>
                <DownloadBtn onClick={handleDownloadClick}>
                  DOWNLOAD CONSENT FORM
                  <span>
                    <BsArrowDownRight />
                  </span>
                </DownloadBtn>
                <GroupWrapper>
                  <GroupTitle>PRIMARY APPLICANT</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      {renderField("firstName", "First Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      {renderField("lastName", "Last Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      {renderField("email", "Email Address")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      {renderField("dob", "Date of Birth", "date")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>UCI or Client ID Number *</FormLabel>
                      {renderField("uciOrClientId", "xx-xxx-xx or xx-xxx-xxx")}
                    </FormItem>
                  </FormContent>
                </GroupWrapper>
                <GroupWrapper>
                  <GroupTitle>SPOUSE or PARTNER</GroupTitle>
                  <FormContent>
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      {renderField("s_firstName", "First Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      {renderField("s_lastName", "Last Name")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      {renderField("s_email", "Email Address")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>Spouse DOB</FormLabel>
                      {renderField("s_dob", "Date of Birth", "date")}
                    </FormItem>
                    <FormItem>
                      <FormLabel>UCI or Client ID Number *</FormLabel>
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
                      {renderField("app_no", "X-XXX-XXX or unknow")}
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
                            {!meta.error ? "Loaded File" : "Upload File"}
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
        {leafImages.map((src) => (
          <LeafImage key={src} src={src} />
        ))}
      </div>
    </OrderContainer>
  );
};

export default OrderComponent;
