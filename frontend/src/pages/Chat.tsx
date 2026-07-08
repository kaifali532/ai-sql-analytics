import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { Send, Bot, User, Database, Code2, LineChart, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDatasetStore } from '../store/useDatasetStore';


interface Message {
  id?: string;
  role: 'USER' | 'AI';
  content: string;
  data?: any[];
  sqlQuery?: string;
  insight?: string;
  suggestions?: string[];
  executionTime?: number;
}

const fetchHistory = async (datasetId: string) => {
  const res = await api.get(`/ai/history/${datasetId}`);
  return res.data.chatHistory;
};

const Chat = () => {
  const { datasetId } = useParams<{ datasetId: string }>();
  const { currentDataset } = useDatasetStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: history } = useQuery({
    queryKey: ['chatHistory', datasetId],
    queryFn: () => fetchHistory(datasetId!),
    enabled: !!datasetId,
  });

  useEffect(() => {
    if (history) {
      setMessages(history);
    }
  }, [history]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !datasetId) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'USER', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await api.post('/ai/ask', { datasetId, prompt: userMessage });
      const { sqlQuery, data, insight, suggestions, executionTime } = res.data;
      
      setMessages(prev => [...prev, { 
        role: 'AI', 
        content: insight ? `Insight: ${insight}` : 'Query executed successfully.',
        sqlQuery,
        data,
        insight,
        suggestions,
        executionTime
      }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'AI', content: err.response?.data?.error || 'Sorry, I encountered an error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] relative">
      {/* Header */}
      <div className="glass-card p-4 mb-4 flex items-center justify-between z-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Database className="text-primary" size={20} />
            {currentDataset?.originalName || 'Dataset Analytics'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Ask questions in natural language to generate SQL and insights.</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6 pb-20">
        {messages.length === 0 && !isLoading && (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
            <Bot size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">How can I help you analyze this data?</h3>
            <p className="text-slate-500 max-w-md">Try asking: "Show top 10 rows", "What is the average of...", or "Group by category and show total."</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <ChatMessage key={idx} msg={msg} />
        ))}
        
        {isLoading && (
          <div className="flex gap-4 p-6 glass-card border-l-4 border-l-primary/50 self-start mr-12 w-full animate-pulse">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Bot size={18} className="text-primary" />
            </div>
            <div className="space-y-3 w-full">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 pt-4 z-10">
        <div className="bg-gradient-to-t from-slate-50 dark:from-slate-900 absolute -top-8 left-0 right-0 h-8 pointer-events-none"></div>
        <form onSubmit={handleSubmit} className="relative glass-card shadow-2xl p-2 rounded-2xl flex items-center bg-white dark:bg-slate-900">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your data..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-3 text-slate-900 dark:text-white outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

const ChatMessage = ({ msg }: { msg: Message }) => {
  const isUser = msg.role === 'USER';
  const [showSql, setShowSql] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-4 p-6 glass-card shadow-sm ${
        isUser 
          ? 'bg-primary/5 dark:bg-primary/10 border-r-4 border-r-primary ml-12' 
          : 'border-l-4 border-l-secondary mr-12'
      }`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
        isUser ? 'bg-primary text-white' : 'bg-secondary/20 text-secondary'
      }`}>
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>
      
      <div className="flex-1 overflow-hidden">
        <div className="prose dark:prose-invert max-w-none mb-4 whitespace-pre-wrap text-sm md:text-base text-slate-700 dark:text-slate-300">
          {msg.content}
        </div>

        {msg.sqlQuery && (
          <div className="mb-4 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            <button 
              onClick={() => setShowSql(!showSql)}
              className="flex justify-between items-center w-full p-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="flex items-center gap-2"><Code2 size={16} /> Generated SQL</span>
              {showSql ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {showSql && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <pre className="p-4 text-xs md:text-sm text-secondary overflow-x-auto">
                    <code>{msg.sqlQuery}</code>
                  </pre>
                  {msg.executionTime && (
                    <div className="px-4 pb-2 text-xs text-slate-500 text-right">
                      Executed in {msg.executionTime}ms
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {msg.data && msg.data.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2 font-medium text-slate-700 dark:text-slate-300">
              <LineChart size={18} /> Data Result ({msg.data.length} rows)
            </div>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl shadow-inner max-h-64">
              <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 whitespace-nowrap">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-400 sticky top-0 z-10">
                  <tr>
                    {Object.keys(msg.data[0]).map((key) => (
                      <th key={key} scope="col" className="px-6 py-3">{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {msg.data.slice(0, 50).map((row, i) => (
                    <tr key={i} className="bg-white dark:bg-slate-900 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                      {Object.values(row).map((val: any, j) => (
                        <td key={j} className="px-6 py-3">{String(val)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {msg.suggestions && msg.suggestions.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {msg.suggestions.map((s, i) => (
              <button key={i} className="text-xs bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary px-3 py-1.5 rounded-full transition-colors border border-slate-200 dark:border-slate-700">
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Chat;
