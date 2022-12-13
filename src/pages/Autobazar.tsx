import { useState, useContext } from "react";
import { Button, Table, Container } from "react-bootstrap";
import { autobazar, AutobazarType } from "../data/autobazar";
import FilterModal, { filterData } from "../components/autobazar/FilterModal";
import { ColorSchemaContext } from "../context/ColorSchemaContext";

type Props = {};

const Autobazar = (props: Props) => {
  const [show, setShow] = useState(false);
  const [cars, setCars] = useState(autobazar);
  const { colorSchema } = useContext(ColorSchemaContext);
  const filterCars = (filter: filterData) => {
    let filteredCars: Array<AutobazarType> = autobazar;
    if (filter.model && filter.model !== "Vše") {
      filteredCars = filteredCars.filter((car) => car.model === filter.model);
    }
    if (filter.brand && filter.brand !== "Vše") {
      filteredCars = filteredCars.filter((car) => car.brand === filter.brand);
    }
    if (filter.kmFrom) {
      filteredCars = filteredCars.filter(
        (car) => car.kilometers > filter.kmFrom
      );
    }
    if (filter.kmTo) {
      filteredCars = filteredCars.filter((car) => car.kilometers < filter.kmTo);
    }
    if (filter.priceFrom) {
      filteredCars = filteredCars.filter((car) => car.price > filter.priceFrom);
    }
    if (filter.priceTo) {
      filteredCars = filteredCars.filter((car) => car.price < filter.priceTo);
    }
    if (filter.engine) {
      filteredCars = filteredCars.filter((car) => car.engine === filter.engine);
    }

    setCars(filteredCars);
  };
  return (
    <div style={{ backgroundColor: colorSchema }}>
      <Container>
        <Button
          className="my-3"
          onClick={() => {
            setShow(!show);
          }}
        >
          Nastavit filtr
        </Button>
        <FilterModal
          show={show}
          setShow={setShow}
          filterCars={filterCars}
          reset={setCars}
        />
        <Table variant="light">
          <thead>
            <tr>
              <th>Značka</th>
              <th>Model</th>
              <th>Najeto km</th>
              <th>Cena</th>
              <th>Palivo</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.kilometers} km</td>
                  <td>{car.price} Kč</td>
                  <td>{car.engine}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Autobazar;
