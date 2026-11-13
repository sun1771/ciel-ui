// Ambient module types for non-TS assets imported by components.
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.svg' {
  const src: string | { src: string }
  export default src
}
