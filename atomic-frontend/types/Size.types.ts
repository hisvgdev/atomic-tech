enum ContainerSizes {
  primary = "72.5rem",
}

export enum SizeValues {
  primaryContainerSize = "primaryContainerSize",
}

export const Sizes = {
  [SizeValues.primaryContainerSize]: {
    primary: ContainerSizes.primary,
  }
} as const;

