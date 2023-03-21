import styled from "styled-components";

export const Format = styled.form.attrs(() => ({
  className:
    "d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5",
}))``;

export const Imput = styled.input`
  width: 40%;
  border-radius: 8px;
  border: 2px solid #0b5ed7;
  padding: 10px 15px;
  box-shadow: 1px 3px 9px rgba(0, 0, 0, 25);
`;

export const Button = styled.button.attrs(() => ({
  className: "btn btn-primary fs-5",
}))``;
