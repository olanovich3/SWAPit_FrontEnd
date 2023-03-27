import styled from 'styled-components';

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = (id, text, type, className, placeholder, value, pattern) => {
  return (
    <InputStyled>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        pattern={pattern}
      />
    </InputStyled>
  );
};

export default Input;
