/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Card from "./card-component";

describe("Card component", () => {
  it("renders the card with correct props", () => {
    const firstName = "test";
    const lastName = "qwe";
    const photo = "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT2xYTv3ig7zGLvs0ABliV1ZMWG-0waOX_P6nd03SJnDLVoTiSnvuCMJ-dNpQhhYXTC";
    
    const { getByAltText, getByText } = render(
      <Card firstName={firstName} lastName={lastName} photo={photo} />
    );
    
    expect(getByText(`${firstName} ${lastName}`)).toBeInTheDocument();

    expect(getByAltText(`${firstName}-contact`)).toBeInTheDocument();
    
    const imgElement = getByAltText(`${firstName}-contact`);
    expect(imgElement).toHaveAttribute("src", photo);
  });
});
