import React from "react"

import { Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

import avatar1 from "../../assets/images/users/avatar-1.jpg"
import profileImg from "../../assets/images/profile-img.png"
import {get} from '../../helpers/api_helper'
import * as url from '../../helpers/url_helper'
import {RxAvatar} from 'react-icons/rx'


const getUser = get(url.users_me, {

})
console.log(getUser);

const WelcomeComp = () => {
  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <div className="bg-primary-subtle  ">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome Back !</h5>
              </div>
            </Col>
          
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="7">
              <div className="avatar-md profile-user-wid"></div>
              <h5 className="font-size-15 text-truncate">
                {" "}
                <RxAvatar className="font-size-20 me-2 " />
                Henry Price
              </h5>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
export default WelcomeComp
