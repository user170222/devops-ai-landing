import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
      <h1 className="text-4xl font-bold mb-4">DevOps AI Помощник</h1>
      <p className="text-lg mb-6">
        Инструмент, который анализирует CI/CD ошибки, Docker/Kubernetes конфигурации и предлагает решения.
      </p>
      <a
        href="https://t.me/ТВОЙ_TELEGRAM_BOT"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Записаться в Beta
      </a>
    </div>
  );
};

export default App;
