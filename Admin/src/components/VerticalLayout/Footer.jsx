import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © 2023 LetUsRecon </Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                All Rights Reserved.{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
}

export default Footer
