import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Comfortaa',
      },
    }),
  ],
  shortcuts: {
    flexcenter: 'flex justify-center items-center',
    flexbetween: 'flex justify-between items-center',
    link: 'text-gray-400 no-underline border-b-solid b-b border-gray-200 hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-800 pb-0.5',
  },
  transformers: [
    transformerDirectives(),
  ],
});
