import styled, { css } from 'styled-components';

export const InputBox = styled.div`
  width: 322px;
  height: 48px;
`;

export const Label = styled.label`
  color: var(--sub-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: block;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding: 10px 0 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid #d9d9d9;
  &:focus {
    border-bottom: 1px solid #55bdb3;
  }
  ${(props) =>
    props.isValid === false &&
    css`
      border-bottom: 1px solid red;
    `}
`;

export const ErrorMessage = styled.p`
  display: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #eb5757;
  margin-top: 6px;

  ${(props) =>
    props.valid === false &&
    css`
      display: block;
      color: red;
    `}
`;