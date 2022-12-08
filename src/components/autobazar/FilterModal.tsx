import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import _ from "lodash";
import { autobazar } from "../../data/autobazar";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  filterCars: (data: any) => void;
  reset: (data: any) => void;
};
export type filterData = {
  brand: string;
  model: string;
  kmFrom: number;
  kmTo: number;
  priceFrom: number;
  priceTo: number;
  engine: string;
};
const FilterModal = ({ show, setShow, filterCars, reset }: Props) => {
  const [filter, setFilter] = useState<filterData>({
    brand: "",
    model: "",
    kmFrom: Number(),
    kmTo: Number(),
    priceFrom: Number(),
    priceTo: Number(),
    engine: "",
  });

  const handleChange = (e: any) => {
    console.log(filter);

    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const brands = {
    skoda: ["Fabia", "Octavia", "Enyaq iV"],
    tesla: ["Model X", "Model S"],
  };
  const [showBrand, setShowBrand] = useState("");

  return (
    <Modal show={show}>
      <Modal.Header>Filtrovat podle</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <FloatingLabel label="Značka">
              <Form.Select
                onChange={(e: any) => {
                  setShowBrand(e.target.value);

                  if (_.isEqual(brands.skoda, e.target.value.split(","))) {
                    setFilter({ ...filter, brand: "Škoda" });
                  }
                  if (_.isEqual(brands.tesla, e.target.value.split(","))) {
                    setFilter({ ...filter, brand: "Tesla" });
                  }
                }}
              >
                <option value="Vše">Vše</option>
                <option value={brands.skoda}>Škoda</option>
                <option value={brands.tesla}>Tesla</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel label="Model">
              <Form.Select name="model" onChange={handleChange}>
                <option value="Vše">Vše</option>
                {showBrand?.split(",")?.map((model) => {
                  return (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>

          <Row>
            <Col md="auto">
              {" "}
              <FloatingLabel label="Počet kilometrů od">
                <Form.Control
                  type="number"
                  min={0}
                  name="kmFrom"
                  value={filter.kmFrom}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col md="auto">
              {" "}
              <FloatingLabel label="Počet kilometrů do">
                <Form.Control
                  type="number"
                  min={0}
                  name="kmTo"
                  value={filter.kmTo}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              {" "}
              <FloatingLabel label="Cena od">
                <Form.Control
                  type="number"
                  min={0}
                  name="priceFrom"
                  value={filter.priceFrom}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
            <Col md="auto">
              {" "}
              <FloatingLabel label="Cena do">
                <Form.Control
                  type="number"
                  min={0}
                  name="priceTo"
                  value={filter.priceTo}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Form.Check
            inline
            label="Benzín"
            name="engine"
            type="radio"
            id={`inline-radio-1`}
            value="Benzín"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Nafta"
            name="engine"
            type="radio"
            value="Nafta"
            id={`inline-radio-2`}
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="Elektro"
            value="Elektro"
            name="engine"
            type="radio"
            id={`inline-radio-2`}
            onChange={handleChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setShow(!show);
            filterCars(filter);
          }}
        >
          Filtrovat
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setFilter({
              brand: "",
              model: "",
              kmFrom: Number(),
              kmTo: Number(),
              priceFrom: Number(),
              priceTo: Number(),
              engine: "",
            });
            reset(autobazar);
          }}
        >
          Reset
        </Button>
        <Button
          variant="secondary-outline"
          onClick={() => {
            setShow(!show);
          }}
        >
          Zavřít
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
