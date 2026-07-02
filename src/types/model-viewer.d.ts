import type * as React from 'react';

type ModelViewerAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  ar?: boolean | string;
  'ar-modes'?: string;
  'ios-src'?: string;
  'camera-controls'?: boolean | string;
  'auto-rotate'?: boolean | string;
  'auto-rotate-delay'?: string;
  'rotation-per-second'?: string;
  'camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'field-of-view'?: string;
  exposure?: string;
  'shadow-intensity'?: string;
  'shadow-softness'?: string;
  'environment-image'?: string;
  'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
  'touch-action'?: string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerAttributes;
    }
  }
}
