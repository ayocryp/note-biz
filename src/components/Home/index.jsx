import Main from "../Main";
import Service from "../Service";
import FaqComponent from "../FAQ";
import ContactComponent from "../Contact";

import { HomeContainer } from "./home.style";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Main />
      <Service />
      <FaqComponent />
      <ContactCo mponent />
    </HomeContainer>
  );
};

export default HomeComponent;
