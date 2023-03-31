import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import ProfileCard from "./ProfileCards";
import axios from "axios";

function Profile() {
  const [constituency, setConstituency] = useState("All");
  const [state, setState] = useState("All");
  const [election, setElection] = useState("All");
  const [opensearch, setOpenSearch] = useState();

  const [profiledata, setProfileData] = useState([]);
  let [filteredprofiledata, setFilteredProfileData] = useState(" ");
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://192.168.192.202:8000/get_candidates",
    })
      .then((response) => {
        console.log(response.data.data);
        setProfileData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };
   const sortedprofiledata = profiledata.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  filteredprofiledata = sortedprofiledata.filter((sortedprofiledata) => {
    return (
      sortedprofiledata.name.toLowerCase().includes(searchField.toLowerCase()) ||
      sortedprofiledata.party.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const CstncyAscList = profiledata.sort((a, b) =>
    a.constituency > b.constituency ? 1 : -1
  );

  return (
    <>
      {/* #071740 */}
      {/* backgroundColor: "#0A1828", */}
      <Container fluid style={{ minHeight: "5vh" }}>
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
                <option disabled>Election type </option>
                <option defaultValue={"All"}>All</option>
                <option value="Parliment">Parliment</option>
                <option value="Assembly">Assembly</option>
              </Form.Select>
            </Col>
            <Col className="p-1 ">
              <Form.Select aria-label="Default select example">
                <option disabled>Constituency</option>
                {CstncyAscList.map((Cnstncy, index) => {
                  return (
                    <option value={Cnstncy.constituency}>
                      {Cnstncy.constituency}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col className="p-1 ">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleSearchChange}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="mt-4" style={{ minHeight: "90vh" }}>
        <Container>
          <Row>
            {filteredprofiledata.map((profile, index) => {
              return (
                <Col className="col-md-3">
                  <ProfileCard key={index} profile={profile} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Profile;
