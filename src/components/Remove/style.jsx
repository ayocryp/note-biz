import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 150px 0px;


`;

export const Container = styled.div`
  display: flex;
  width: 60%;
  gap:100px;

  @media (max-width:900px){
    width: 90%;
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  font-family: Poppins, sans-serif;

  margin-bottom: 20px;
`;
export const Detail = styled.div`
line-height: 1.9rem;
font-family: "Moderat", sans-serif !important;
font-weight: 300;
letter-spacing: 0.1px;
  margin-bottom: 20px;
  word-break: break-all;
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 300px;
  height: 350px;
`;
