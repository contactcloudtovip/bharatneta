import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonGroup, Row, Col } from "react-bootstrap";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { height } from "@mui/system";
function ProfileCard() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-upvote {
      background-color: inherit;
      
      color: #65bf8a;
    }
    .btn-downvote {
      background-color: inherit;
      color: #d74a49;
    }
    .btn-ratio {
      background-color: inherit;
      color: black;
    }
    `}
      </style>

      <Card style={{ width: "18rem", marginTop: 10, padding:8, backgroundColor:"inherit", border:"1px solid #178582",borderColor:"#178582" }}>
        <Card.Img
          variant="top"
          src="ProfilePicture.png"
          style={{ maxWidth: "10rem", height: "100%", alignSelf: "center" }}
        />
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
            <Button variant="upvote">
              1<ThumbUpOffAltIcon />
            </Button>
            <Button disabled variant="ratio">
              {" "}
            <span style={{ fontWeight:"bold"}}> 1:2{" "}</span> 
            </Button>

            <Button variant="downvote">
              <ThumbDownOffAltIcon /> 1
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProfileCard;
