// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HTMLAttributes } from 'vue';

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [emit: string]: any;
    }
  }
}

declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
      [attr: string]: any;
  }

  interface CSSProperties {
    [attr: string]: any;
  }
}

