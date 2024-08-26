import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 70%;
  margin-left: 20%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 10px;
    color: #0E395E;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    font-size: 23px;
    color: #0E395E;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    font-size: 16px;
    color: #0E395E;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ContactFormWrapper = styled.form`
  margin-top: 20px;
  background-color: #fff;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  resize: vertical;
  min-height: 120px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #8B173B;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
`;
