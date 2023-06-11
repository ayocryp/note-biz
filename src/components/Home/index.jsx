import Main from "../Main";

import FaqComponent from "../FAQ";
import RemoveComponent from "../Remove";
import Commitment from "../Commitment/Commitment";

import { HomeContainer } from "./home.style";

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Main />

      <Commitment/>

   
      <RemoveComponent />
      <FaqComponent />
    </HomeContainer>
  );
};

export default HomeComponent;
