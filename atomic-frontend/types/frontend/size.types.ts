enum ContainerSizes {
  primary = "6xl",
}

export enum SizeValues {
  primaryContainerSize = "primaryContainerSize",
}

export const Sizes = {
  [SizeValues.primaryContainerSize]: {
    primary: ContainerSizes.primary,
  }
} as const;

