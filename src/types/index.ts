/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquiries
*/

// ? Put your types here :D

export type ResponseProp = {
    response: any;
    status?: number;
}

export type NavbarProp = {
    label: string;
    href: string;
}

export interface featureProp {
    icon: JSX.Element;
    title: string;
    description: string;
}