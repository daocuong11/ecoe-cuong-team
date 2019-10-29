import React, { Component } from "react";
import ModalComponent from "./ModalComponent";
import Wrapper from "./Wrapper";
import ButtonFilterMobile from "../../../elements/Buttons/ButtonFilterMobile";

class Modal extends Component {
  state = {
    isModalOpen: false
  };
  
  toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
      
    return (
      <Wrapper>
          <ButtonFilterMobile onClick={this.toggleState} />
        
        {this.state.isModalOpen && (
          <ModalComponent
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
          >
            <div className="box-body">I am the content of the modal</div>
          </ModalComponent>
        )}
      </Wrapper>
    );
  }
}

export default Modal;
