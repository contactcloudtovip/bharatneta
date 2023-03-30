import { Grid } from "@mui/material";
import { maxWidth } from "@mui/system";
import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ReactDatamaps from "react-india-states-map";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
    },
  },
};

const Map = () => {
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <div>
      <ReactDatamaps
        regionData={stateLists}
        mapLayout={{
          hoverTitle: "Count",
          noDataColor: "#62CDFF",
          borderColor: "#ffffff",
        }}
        hoverComponent={({ value }) => {
          return (
            <>
              <p>{value.name}</p>
            </>
          );
        }}
        onClick={stateOnClick}
        activeState={activeState}
      />
    </div>
  );
};

export default Map;
