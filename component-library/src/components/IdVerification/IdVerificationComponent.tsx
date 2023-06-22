import type { SdkHandle } from 'onfido-sdk-ui';
import {useEffect, useState} from 'preact/hooks';

import { useIdVerificationToken } from './useIdVerificationToken';
import { IdVerificationProps } from './types';

const containerId = 'adyen-kyc-id-verification';
const initOnfido = async ({
    token,
    onIdVerificationClose,
    onIdVerificationComplete
}: {
    token: string;
    onIdVerificationClose?: () => void;
    onIdVerificationComplete?: (data: any) => void;
    onIdVerificationError?: (error: any) => void;
}): Promise<SdkHandle> => {
    const { init } = await import('onfido-sdk-ui');
    return init({
        token,
        containerId,
        disableAnalytics: true,
        useModal: false,
        isModalOpen: false,
        onUserExit: onIdVerificationClose,
        onComplete: onIdVerificationComplete,
        steps: [
            {
                type: 'document',
                options: {
                    documentTypes: {
                        'passport': true,
                        'driving_licence': true,
                        'national_identity_card': true,
                        'residence_permit': false
                    }
                }
            }
        ]
    });
};

function IdVerificationComponent(props: IdVerificationProps) {
    const { userDetails, handleGetIdVerificationToken, onIdVerificationClose, onIdVerificationError, onIdVerificationComplete } = props;
    // dummy state, input and useEffect are to demonstrate the error , not part of actual component
    const [dummy, setDummy] =  useState();
    let onfido: SdkHandle;

    const { sdkToken } = useIdVerificationToken({ userDetails, handleGetIdVerificationToken, onIdVerificationError });

    useEffect(() => {
        (async () => {
            if (sdkToken) {
                onfido = await initOnfido({
                    token: sdkToken,
                    onIdVerificationClose,
                    onIdVerificationError,
                    onIdVerificationComplete
                });
            }
        })();

        return () => {
            onfido && onfido.tearDown();
        };
    }, [sdkToken, onIdVerificationError, onIdVerificationComplete]);

    //not part of actual component
    useEffect(() => {
        console.log(dummy);
    }, [dummy])

    //not part of actual component
    const handleDummyChange = (e) => {
        setDummy(e.target.value)
    }

    return (
        <>
            <input type='text' onchange={handleDummyChange}></input>
            <div id={containerId} className={containerId} />
        </>
    );
}

export default IdVerificationComponent;
