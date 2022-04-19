import styled from 'styled-components';

const Background = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'flex' : 'none' };
  min-height: 100%;
  width: 100%;
  background-color: var(--modal-background);
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const Dialog = styled.div`
  width: calc(100% - 32px);
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.15);
  z-index: 1001;
`

export const Modal = ({ isOpen, close, children }) => (
  <Background isOpen={isOpen} onClick={close} >
    <Dialog onClick={e => { e.stopPropagation() }}>
      { children }
    </Dialog>
  </Background>
)