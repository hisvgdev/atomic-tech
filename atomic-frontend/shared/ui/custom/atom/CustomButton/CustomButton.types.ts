export interface CustomButtonProps {
  text: string;
  width: string;
  variant: VariantButton
  isUppercase?: boolean;
  onClick?: () => void;
}

export enum VariantButton {
  default = "default",
  gradient = "gradient",
}