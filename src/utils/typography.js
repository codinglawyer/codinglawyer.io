import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.7,
  googleFonts: [
    {
      name: 'Libre Franklin',
      styles: ['400', '400i', '700', '700i', '900'],
    },
    {
      name: 'Cousine',
      styles: ['400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Libre Franklin', 'sans-serif'],
  bodyFontFamily: ['Cousine', 'monospace'],
  headerColor: 'black',
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export const { rhythm, scale } = typography
export default typography
