import styled from 'styled-components';

const Background = styled.div`
  display: ${ ({ isOpen }) => isOpen ? 'flex' : 'none' };
  min-height: 100vh;
  width: 100%;
  background-color: var(--modal-background);
  position: absolute;
  align-items: center;
  justify-content: center;
`

const Dialog = styled.div`
  width: calc(100% - 32px);
  height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 15px 35px 0px rgba(0, 0, 0, 0.15);
`

export const Modal = ({ isOpen, close }) => (
  <Background isOpen={isOpen} onClick={close} >
    <Dialog onClick={e => { e.stopPropagation() }}>Search activities</Dialog>
  </Background>
)