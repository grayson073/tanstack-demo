// Type declarations
declare module '*.jpeg' {
  const value: string
  export default value
}

interface ImportMetaEnv {
  VITE_IMGUR_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
