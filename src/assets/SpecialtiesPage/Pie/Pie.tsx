import React from "react";
import styled from "styled-components";

const PieDiagram = styled.div<{ $procent: number }>`
  --p: ${(props) => props.$procent};
  --b: 10px;
  --w: 130px;
  --c: #dc97bd;
  --f: rgba(228, 221, 221, 0.3);

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 20px;
  font-family: "Raleway", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: center;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }
  &:before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top /
        var(--b) var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), var(--f) 0);
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
  }
  &:after {
    inset: calc(50% - var(--b) / 2);
    background: var(--c);
    transform: rotate(calc(var(--p) * 3.6deg))
      translateY(calc(50% - var(--w) / 2));
  }
`;

const StyledP = styled.p`
  font-size: 14px;
  font-family: "Raleway", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #f46324;
`;

const Pie = ({ place, placePaid }) => {
  let sumPlace = Number(place) + Number(placePaid);
  let procent = (Number(place) * 100) / sumPlace;


  return (
    <PieDiagram $procent={procent}>
      <StyledText>Около</StyledText>
      {place}
      <StyledP>
        бюджетных
        <br />
        мест
      </StyledP>
    </PieDiagram>
  );
};

export default Pie;
