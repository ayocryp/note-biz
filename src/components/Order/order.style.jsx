import styled from "styled-components";

export const OrderContainer = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
`;

export const OrderWrapper = styled.div`
  padding: 8%;
  border-radius: 7px;
  background: rgba(39, 15, 15, 0.9);
  max-width: 968px;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 40px;
  color: white;
  text-align: center;
  margin: 0px 0px 15px;
  padding: 0px 0px 10px;
`;

export const Desc = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0px 0px 18px;
  padding: 0px 0px 30px;
`;

export const NoteWrapper = styled.div`
  color: rgba(39, 15, 15, 0.9);
  background: white;
  padding: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const GroupWrapper = styled.div`
  width: 100%;
`;

export const GruopTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;

  justify-content: ${(props) =>
    props.id === "last" ? "center" : "flex-start"};
`;

export const FormLabel = styled.div`
  width: 60%;
  white-space: nowrap;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 10px;
`;

export const FormSelect = styled.select`
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 10px;
`;

export const FormText = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
`;

export const FileUpload = styled.div`
  border: 1px dotted gray;
  padding: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 15px;
    cursor: pointer;
  }
`;

export const OrderButton = styled.button`
  background: rgba(39, 15, 15, 0.9);
  color: white;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 0 5px 10px rgba(29, 29, 29, 0.5);
  }
`;
