import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import parseMarkdown from "../utils/markdownParser";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Chatbot = () => {
  const { t } = useTranslation("chatbot");
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

  // 当聊天窗口打开时禁用页面滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          content: t('errorMessage'),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed md:bottom-4 md:right-4 z-50 md:w-96">
      {!isOpen ? (
        <div className="md:block">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 ml-auto block fixed bottom-4 right-4"
            aria-label={t('openChat')}
          >
            <MessageCircle size={24} />
          </button>
        </div>
      ) : (
        <div
          className={`bg-white shadow-xl flex flex-col w-full md:w-96 md:rounded-lg
            fixed md:relative top-0 left-0 h-full md:h-[80vh] md:max-h-[800px]`}
        >
          <div className="p-4 border-b flex justify-between items-center bg-yellow-500 text-white md:rounded-t-lg sticky top-0 z-10">
            <h3 className="font-medium">{t('title')}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-yellow-600 rounded-full p-1.5 transition-colors"
              aria-label={t('closeChat')}
            >
              <X size={20} />
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain"
          >
            {messages.length === 0 && (
              <div className="text-center text-gray-600 py-8">
                <p className="mb-4">{t('welcome')}</p>
                <p className="mb-2">{t('helpTopics')}：</p>
                <ul className="space-y-2 text-sm">
                  <li>• {t('topics.auPairProgram')}</li>
                  <li>• {t('topics.familyRequirements')}</li>
                  <li>• {t('topics.applicationProcess')}</li>
                  <li>• {t('topics.culturalExchange')}</li>
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
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-yellow-500 text-white"
                      : "bg-yellow-50 text-gray-800 prose prose-sm max-w-none prose-pre:bg-gray-800 prose-pre:text-white prose-pre:p-3 prose-pre:rounded prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: message.role === "assistant" 
                      ? parseMarkdown(message.content)
                      : message.content
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-yellow-50 text-gray-800 rounded-lg p-3">
                  {t('typing')}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t mt-auto sticky bottom-0 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('inputPlaceholder')}
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label={t('send')}
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
