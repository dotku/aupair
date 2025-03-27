import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: t('chatbot.errorMessage'),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg transition-all duration-200"
          aria-label={t('chatbot.openChat')}
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div
          className="bg-white rounded-lg shadow-xl w-96 flex flex-col"
          style={{ height: "80vh", maxHeight: "800px" }}
        >
          <div className="p-4 border-b flex justify-between items-center bg-yellow-500 text-white rounded-t-lg">
            <h3 className="font-medium">{t('chatbot.title')}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-yellow-600 rounded-full p-1 transition-colors"
              aria-label={t('chatbot.closeChat')}
            >
              <X size={20} />
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.length === 0 && (
              <div className="text-center text-gray-600 py-8">
                <p className="mb-4">{t('chatbot.welcome')}</p>
                <p className="mb-2">{t('chatbot.helpTopics')}：</p>
                <ul className="space-y-2 text-sm">
                  <li>• {t('chatbot.topics.auPairProgram')}</li>
                  <li>• {t('chatbot.topics.familyRequirements')}</li>
                  <li>• {t('chatbot.topics.applicationProcess')}</li>
                  <li>• {t('chatbot.topics.culturalExchange')}</li>
                </ul>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-yellow-500 text-white"
                      : "bg-yellow-50 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-yellow-50 text-gray-800 rounded-lg p-3">
                  {t('chatbot.typing')}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t mt-auto">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chatbot.inputPlaceholder')}
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={t('chatbot.send')}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
