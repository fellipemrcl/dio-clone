export interface IButton {
  onClick?: () => void;
  title: string;
  type?: string;
  variant?: string;
}

export interface IButtonStyles {
    variant: string;
}