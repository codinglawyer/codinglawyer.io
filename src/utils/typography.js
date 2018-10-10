import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: '36px',
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '500', '700', '900'],
    },
    {
      name: 'Libre Franklin',
      styles: ['400', '700', '900'],
    },
    {
      name: 'Cousine',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Libre Franklin', 'sans-serif'],
  bodyFontFamily: ['Roboto'],
  headerColor: 'black',
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export const { rhythm, scale } = typography
export default typography
