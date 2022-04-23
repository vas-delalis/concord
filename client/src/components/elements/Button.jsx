import styled from 'styled-components';

const variants = {
  primary: `background-color: var(--primary-500);
            color: white;
            box-shadow: var(--shadow-double);

            &:disabled {
              background-color: var(--gray-500);
            }

            &:enabled:active {
              background-color: var(--primary-400);
            }`,
  transparent: `background-color: rgba(255, 255, 255, 0.25);
                color: white;
                font-weight: 400;`
}

const widths = {
  small: 'padding: 8px 16px;',
  large: 'padding: 12px 32px;',
  full:  `padding: 12px 16px;
          width: 100%;`
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.2s;

  ${({ variant, width }) => (
    variants[variant] + widths[width]
  )}
`

export const Button = ({ children, variant, width, disabled }) => (
  <StyledButton variant={variant} width={width} disabled={disabled}>
    { children }
  </StyledButton>
)
