export interface CustomButtonProps {
  text: string;
  width: string;
  variant: VariantButton
  isUppercase?: boolean;
}

export enum VariantButton {
  default = "default",
  gradient = "gradient",
}