/* 変更前！
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
*/

// 変更後！
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
