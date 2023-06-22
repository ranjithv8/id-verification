import UIElement from '../UIElement';
import IdVerificationComponent from './component/IdVerificationComponent';
import { IdVerificationProps } from './types';

export class IdVerification extends UIElement<IdVerificationProps> {
    render() {
        return (
            <IdVerificationComponent
                handleGetIdVerificationToken={this.props.handleGetIdVerificationToken}
                onIdVerificationClose={this.props.onIdVerificationClose}
                onIdVerificationError={this.props.onIdVerificationError}
                userDetails={this.props.userDetails}
            />
        );
    }
}

export default IdVerification;

