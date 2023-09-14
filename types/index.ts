import { MouseEventHandler } from "react"; // Catturo gli eventi nel caso ce ne fosse bisogno

// Tutti i tipi dei props

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; // Controlla se il bottone è stato cliccato o meno
}

export interface CardProps {
    title: string;
    goTo: string;
}

export interface User {
    _id: string;
    name: string;
    password?: string;
}

export interface Result {
    acknowledged?: boolean;
    insertedId?: string;
    erroreCredenziali?: string;
    erroreUtente?: string;
    trovato?: boolean;
}

export interface Props {
    users: [User];
}

