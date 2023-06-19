import React from "react";
import styled from "styled-components";

interface iBtn {
  wid?: string;
  text?: string;
}

const Button: React.FC<iBtn> = ({ wid, text }) => {
  return (
    <div>
      <Container wid={`${wid}`}>{text}</Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{ wid: string }>`
  height: 40px;
  width: ${({ wid }) => wid};
  background-color: #0275d8;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
`;
