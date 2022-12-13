import { useContext } from "react";
import { ColorSchemaContext } from "../../context/ColorSchemaContext";
import { SketchPicker } from "react-color";

const ColorSchemaChanger = () => {
  const { colorSchema, setColorSchema } = useContext(ColorSchemaContext);

  return (
    <div style={{ backgroundColor: colorSchema }}>
      <SketchPicker
        color={colorSchema}
        onChange={(color) => {
          setColorSchema(color.hex);
        }}
      />
    </div>
  );
};

export default ColorSchemaChanger;
