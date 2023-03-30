import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCards";
function Profile() {
  return (
    <>
    {/* #071740 */}
    {/* backgroundColor: "#0A1828", */}
      <Container fluid  style={{  minHeight:"5vh" }}>
        <Container className="p-2 ">
          <Row className="mt-2">
            <Col className="p-1 ">
              <Form.Select aria-label="Default select example">
                <option>State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col className="p-1 ">
              <Form.Select aria-label="Default select example">
                <option>Parliment</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col className="p-1 ">
              <Form.Select aria-label="Default select example">
                <option>Constituency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="mt-4" style={{minHeight:"90vh" }} >
        <Container>
          <Row>
            <Col >
              <ProfileCard />
            </Col>
            <Col>
              <ProfileCard />
            </Col><Col>
              <ProfileCard />
            </Col><Col>
              <ProfileCard />
            </Col>
            <Col>
              <ProfileCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Profile;
