import { useEffect, useState } from 'preact/hooks';

import { UserDetails } from './types';

export const useIdVerificationToken = ({
    userDetails,
    handleGetIdVerificationToken,
    onIdVerificationError
}: {
    userDetails: UserDetails;
    handleGetIdVerificationToken: any;
    onIdVerificationError: ((error: any) => void) | undefined;
}) => {
    const { firstName, lastName, residencyCountry } = userDetails;
    const [sdkToken, setSdkToken] = useState();
    const [loadingStatus] = useState();
    const hasAllUserDetails = userDetails && Object.values(userDetails).every(Boolean);

    useEffect(() => {
        (async () => {
            if (!hasAllUserDetails) return;
            try {
                const data = {
                    name: { firstName, lastName },
                    country: residencyCountry,
                    origin: `${window.location.origin}/*`
                };
                const { sdkToken } = await handleGetIdVerificationToken('', data);
                setSdkToken(sdkToken);
            } catch (e) {
                onIdVerificationError?.(e);
            }
        })();
    }, [firstName, lastName, residencyCountry, hasAllUserDetails]);

    return {
        sdkToken,
        loadingStatus
    };
};
