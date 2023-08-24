import Main from '../Main'
import Button from '../Button/Button'
import Service from '../Service/index'
import FaqComponent from '../FAQ'
import RemoveComponent from '../Remove'
import Commitment from '../Commitment/Commitment'


import { HomeContainer } from './home.style'
import Newsletter from '../Newsletter'

const HomeComponent = () => {
  return (
    <HomeContainer>
      <Main />
      <Service />
      <Commitment />
      <RemoveComponent />
      <Button />
      <FaqComponent />
      <Newsletter />
    </HomeContainer>
  )
}

export default HomeComponent
