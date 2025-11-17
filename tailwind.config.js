module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0d0f16'
      },
      boxShadow: {
        'neon-cyan': '0 6px 30px rgba(0,200,255,0.15)',
        'neon-purple': '0 10px 40px rgba(150,50,255,0.12)'
      }
    }
  },
  plugins: [],
}
