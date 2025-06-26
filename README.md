# 🌾 FarmChatbot - Agricultural Learning Assistant

An intelligent chatbot designed to help farmers and agricultural enthusiasts learn about modern farming techniques, crop management, and agricultural best practices. Built with React, Vite, and powered by Google's Gemini AI.

## 🚀 Features

- **AI-Powered Conversations**: Get expert agricultural advice using Google's Gemini AI
- **Modern UI**: Beautiful, responsive interface with farming-themed design
- **Real-time Chat**: Interactive chat experience with markdown support
- **Video Background**: Immersive farming video background
- **Mobile Responsive**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Styling**: Tailwind CSS 3.4.17
- **AI Integration**: Google Gemini API
- **HTTP Client**: Axios 1.7.9
- **Icons**: React Icons 5.4.0
- **Markdown Rendering**: React Markdown 9.0.3

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd farmchatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Google API key:
   ```env
   VITE_GOOGLE_API_KEY=your_google_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🌱 Usage

1. Open the application in your browser
2. Type your agricultural questions in the chat input
3. Get AI-powered responses about farming techniques, crop care, soil management, and more
4. Engage in interactive conversations to learn about modern agriculture

## 🎯 Project Structure

```
farmchatbot/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── video/
│   │   └── farming.mp4
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔑 API Configuration

This project uses Google's Gemini AI API. To get started:

1. Visit [Google AI Studio](https://makersuite.google.com/)
2. Create an API key
3. Add the key to your `.env` file as `VITE_GOOGLE_API_KEY`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 TODO

- [ ] Add user authentication
- [ ] Implement conversation history
- [ ] Add more agricultural domain-specific prompts
- [ ] Include crop disease identification
- [ ] Add weather integration
- [ ] Implement voice chat functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the chatbot
- React team for the amazing framework
- Vite for the fast build tool
- Tailwind CSS for the utility-first styling

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for the farming community
