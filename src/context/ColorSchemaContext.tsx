import React, { createContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
export const ColorSchemaContext = createContext({
  colorSchema: "blue",
  setColorSchema: (color: string) => {},
});

const ColorSchemaProvider = ({ children }: Props) => {
  const [colorSchema, changeColorSchema] = useState("blue");
  const setColorSchema = (color: string) => {
    changeColorSchema(color);
  };

  return (
    <ColorSchemaContext.Provider value={{ colorSchema, setColorSchema }}>
      {children}
    </ColorSchemaContext.Provider>
  );
};

export default ColorSchemaProvider;
