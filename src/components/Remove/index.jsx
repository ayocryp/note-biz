
import {
  Layout,
  Container,
  TextContainer,
  Title,
  Detail,
  ImageContainer,
  Image,
} from "./style";

const RemoveComponent = () => {
  return (
    <Layout>
      <Container>
        <TextContainer>
          <Title>Choose LIMITLESS for your GCMS notes needs</Title>
        
          <Detail>
            Experience the difference of partnering with an independently
            owned and operated professional firm committed to providing you with
            an unbiased, transparent, and trustworthy service. Your Canadian
            dreams are within reach with us by your side.
          </Detail>
        </TextContainer>

        <ImageContainer>
          <Image src="assets/Image/Main/image.png" />
        </ImageContainer>
      </Container>
    </Layout>
  );
};

export default RemoveComponent;
