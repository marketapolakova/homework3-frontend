import { useState, useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BirthChart from "../components/BirthChart";
import MortalityChart from "../components/MortalityChart";
import PopulationChart from "../components/PopulationChart";
import { ColorSchemaContext } from "../context/ColorSchemaContext";

const Dashboard = () => {
  const [yearRange, setYearRange] = useState(5);
  const { colorSchema } = useContext(ColorSchemaContext);

  return (
    <div style={{ backgroundColor: colorSchema }}>
      <Container className="mt-3">
        <Row>
          <Col md="auto">
            <PopulationChart numOfYears={yearRange} />
          </Col>
          <Col md="auto">
            {" "}
            <BirthChart numOfYears={yearRange} />
          </Col>
          <Col md="auto">
            {" "}
            <MortalityChart numOfYears={yearRange} />
          </Col>
        </Row>
        <div className="text-center bg-light">
          1
          <input
            type="range"
            id="range"
            name="range"
            min="1"
            max="5"
            value={yearRange}
            onChange={(e) => {
              setYearRange(+e.target.value);
            }}
          />
          5
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
