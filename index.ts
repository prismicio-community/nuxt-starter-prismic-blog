declare module '#app' {
  interface PageMeta {
    withHeaderProfile?: boolean
    withHeaderDivider?: boolean
    withFooterSignUpForm?: boolean
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}