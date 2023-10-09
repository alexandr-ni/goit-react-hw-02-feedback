import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 400px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 8px;
  border: solid 2px black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormField = styled(Field)`
  width: 200px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;

export const BtnWrapper = styled.div`
  :active {
    background-color: #539f53;
  }
`;

export const FormBtn = styled.button`
  width: 100px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;
