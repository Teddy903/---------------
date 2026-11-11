import type { Config } from 'tailwindcss'

export default <Config>{
content: [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.{js,vue,ts}',
  './pages/**/*.{js,vue,ts}',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue'
],
theme: {
extend: {
colors: {
primary: {
DEFAULT: '#0a0a0a',
secondary: '#171717',
card: '#1a1a1a'
},
accent: {
DEFAULT: '#ffffff',
hover: '#e5e5e5',
dark: '#737373'
},
text: {
primary: '#ffffff',
secondary: '#a3a3a3'
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
display: ['Unbounded', 'system-ui', 'sans-serif']
},
letterSpacing: {
'tight-display': '-0.02em',
'display': '0.05em'
},
animation: {
'gradient': 'gradient 8s ease infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
},
keyframes: {
gradient: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' }
}
}
}
},
plugins: []
}