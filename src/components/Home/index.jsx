import Main from "../Main";
import Service from "../Service";
import FaqComponent from "../FAQ";
import RemoveComponent from "../Remove";

import { HomeContainer } from "./home.style";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Main />
      <Service />
      <RemoveComponent />
      <FaqComponent />
    </HomeContainer>
  );
};

export default HomeComponent;
