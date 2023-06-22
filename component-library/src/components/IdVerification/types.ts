export interface IdVerificationProps  {
    userDetails: any;
    onIdVerificationClose?: () => void;
    onIdVerificationComplete?: (data: any) => void;
    onIdVerificationError?: (error: any) => void;
    handleGetIdVerificationToken: any
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    residencyCountry: string;
}
