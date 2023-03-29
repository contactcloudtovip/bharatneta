import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup, Row, Col } from "react-bootstrap";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProfileCard() {
  return (
    <Card style={{ width: "18rem", marginTop: 10 }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>Party</Card.Text>
        {/* <Row className="d-flex justify-content-center">
          <Col className="col-auto d-flex align-items-center">
            <Button size="md" variant="secondary" >
              Like
            </Button>
          </Col>
          <Col className="col-auto d-flex align-items-center">
            <Button size="md" variant="secondary">
              Dislike
            </Button>
          </Col>
        </Row> */}
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">
           1 <ThumbDownOffAltIcon /> 
          </Button>
          <Button disabled variant="secondary">
            {" "}
            1:2{" "}
          </Button>

          <Button variant="secondary">
            <ThumbUpOffAltIcon /> 
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
