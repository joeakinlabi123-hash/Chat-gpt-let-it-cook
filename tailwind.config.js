/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#f8f7f5',
        mist: '#efefee',
        platinum: '#e4e7ee',
        ink: '#10131a',
        slate: '#5f6574',
        electric: '#4b73ff',
        gold: '#c8ab73'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(75, 115, 255, 0.22)',
        soft: '0 20px 60px rgba(16, 19, 26, 0.08)'
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.7), transparent 40%), radial-gradient(circle at 80% 20%, rgba(75,115,255,0.16), transparent 35%), radial-gradient(circle at 50% 80%, rgba(200,171,115,0.14), transparent 45%)"
      }
    }
  },
  plugins: []
};
