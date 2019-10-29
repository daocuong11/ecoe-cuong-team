import React, {Component} from "react";
import Popup from "reactjs-popup";
import Wrapper from "./Wrapper";
import InputPhone from "./InputPhone";
import PhoneConfirmation from "./PhoneConfirmation";
import NewPassword from "./NewPassword";
import SMSConfirmation from "./SMSConfirmation";
import Result from "./Result";

class ForgotPassword extends Component {
    render() {
        let props = this.props;
        let modal;
        switch (props.type) {
            case 1:
                 modal = <InputPhone onClose={props.onClose} showModal={props.showModal} handlerFromParent={props.handlerFromParent}></InputPhone>
                break;
            case 2:
                modal = <PhoneConfirmation onClose={props.onClose} showModal={props.showModal} phoneNumber={props.phoneNumber} getSMSByPhone={props.getSMSByPhone}></PhoneConfirmation>
                break;
            case 3:
                modal = <SMSConfirmation onClose={props.onClose} showModal={props.showModal} phoneNumber={props.phoneNumber} handlerSMSConfirmation={props.handlerSMSConfirmation} getSMSByPhone={props.getSMSByPhone}></SMSConfirmation>
                break;
            case 4:
                modal = <NewPassword onClose={props.onClose} showModal={props.showModal} onNewPassword={props.onNewPassword}></NewPassword>
                break;
            default:
                modal = <Result onClose={props.onClose} showModal={props.showModal}></Result>
                break;
        }
           
        return(
                <Wrapper type={props.type}>
                    <Popup open={props.open}
                    closeOnDocumentClick
                    onClose={props.onClose}>
                        {modal}
                    </Popup>
                </Wrapper>
            )
    }
}

export default ForgotPassword;