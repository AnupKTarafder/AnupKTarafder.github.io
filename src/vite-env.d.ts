/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_CERTIFICATIONS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
