
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
          <Title>
            Remove backgrounds 100% automatically in 5 seconds with one click
          </Title>
          <Detail>
            Thanks to remove.bg's clever AI, you can slash editing time - and
            have
          </Detail>
          <Detail>
            more fun! No matter if you want to make a background transparent
            (PNG) or add a white background to a photo - you can do all this and
            more with remove. As an independently owned
        and operated business, we are committed to providing high-quality
        services to ensure our clients receive accurate and reliable information
        about their visa application. 
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
