import type { Config } from 'tailwindcss'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'

export default <Partial<Config>>{
  content: [
    './app/**/*.{js,ts,vue}',
    './slices/**/*.{js,ts,vue}'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
  },
  plugins: [tailwindAspectRatio]
}