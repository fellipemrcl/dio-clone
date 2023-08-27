export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    control: any; 
    errorMessage?: string;
    leftIcon?: React.ReactNode;
    name: string; 
}