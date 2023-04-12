import { useRef, useState } from "react";
import {
  Desc,
  FileUpload,
  Form,
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
} from "./order.style";
// import { Particles } from "../Particles/dist/particle.min";

const LeafImage = ({ src }) => (
  <div>
    <img src={src} height="75px" width="75px" alt="Leaf" />
  </div>
);

const leafImages = [
  "http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png",
  "http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png",
  "http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png",
  "http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png",
  "http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png",
  "http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png",
];

const OrderComponent = () => {
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  return (
    <OrderContainer>
      {/* <Particles /> */}
      <OrderWrapper>
        <Title>Get your notes</Title>
        <Desc>
          Please provide the following information to process your request.
          Enter any other information in the Additional Notes section. After
          submitting this form you will be taken to complete the Payment.
        </Desc>
        <NoteWrapper>
          <GroupWrapper>
            <GroupTitle>PRIMARY APPLICANT</GroupTitle>
            <Form>
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormInput placeholder="First Name"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormInput placeholder="First Name"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormInput placeholder="First Name"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Date of Birth *</FormLabel>
                <FormInput placeholder="First Name" type="date"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>UCI or Client ID Number *</FormLabel>
                <FormInput placeholder="xx-xxx-xx or xx-xxx-xxx"></FormInput>
              </FormItem>
            </Form>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>SPOUSE or PARTNER</GroupTitle>
            <Form>
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormInput placeholder="First Name"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormInput placeholder="First Name"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormInput placeholder="First Name" type="email"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Spouse DOB</FormLabel>
                <FormInput placeholder="First Name" type="date"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>UCI or Client ID Number *</FormLabel>
                <FormInput placeholder="xx-xxx-xx or xx-xxx-xxx"></FormInput>
              </FormItem>
            </Form>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>APPLICANT INFO</GroupTitle>
            <Form>
              <FormItem>
                <FormLabel>Visa Type *</FormLabel>
                <FormSelect>
                  <option value="">--Please choose an option--</option>
                  <option value="study_work">Study Permit</option>
                  <option value="temporary_visa">Temporary(Guest) Visa</option>
                  <option value="work_permit">Work Permit</option>
                  <option value="permanent_residence">
                    Permanent Residence
                  </option>
                  <option value="other">Other</option>
                </FormSelect>
              </FormItem>
              <FormItem>
                <FormLabel>Application NO</FormLabel>
                <FormInput placeholder="X-XXX-XXX or unknow"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Primary Email *</FormLabel>
                <FormInput placeholder="Primary Email" type="email"></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Alternate Email</FormLabel>
                <FormInput
                  placeholder="Alternate Email"
                  type="email"
                ></FormInput>
              </FormItem>
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormText placeholder="Provide any relavant information for your application"></FormText>
              </FormItem>
            </Form>
          </GroupWrapper>
          <GroupWrapper>
            <GroupTitle>* * *</GroupTitle>
            <Form>
              <FormItem>
                <FormLabel>Transaction ID *</FormLabel>
                <FormInput placeholder="xxxxxxxxxx"></FormInput>
              </FormItem>
              <FileUpload>
                <span onClick={() => fileRef.current.click()}>Upload File</span>
                <FormInput type="file" ref={fileRef} hidden />
              </FileUpload>
              <FormItem id="last">
                <input type="checkbox" />
                <span style={{ marginLeft: 10 }}>
                  I certify that the information provided is true and I agree to
                  the terms
                </span>
              </FormItem>
            </Form>
          </GroupWrapper>
          <OrderButton>Order Now</OrderButton>
        </NoteWrapper>
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
