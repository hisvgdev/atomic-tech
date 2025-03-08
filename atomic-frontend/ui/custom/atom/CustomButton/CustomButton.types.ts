export interface CustomButtonProps {
  text: string;
  width: string;
  variant: VariantButton
}

export enum VariantButton {
  default = "default",
  gradient = "gradient",
}