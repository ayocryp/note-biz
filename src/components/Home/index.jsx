import Main from "../Main";
import Service from "../Service";
import FaqComponent from "../FAQ";

import { HomeContainer } from "./home.style";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Main />
      <Service />
      <FaqComponent />
    </HomeContainer>
  );
};

export default HomeComponent;
