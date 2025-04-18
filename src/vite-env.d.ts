/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SOME_KEY: string;
    readonly VITE_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
