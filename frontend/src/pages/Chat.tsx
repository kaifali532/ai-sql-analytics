import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { Send, Sparkles, Database, Code2, LineChart, ChevronDown, ChevronUp, User } from 'lucide-react';
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
        content: insight ? `${insight}` : 'Query executed successfully.',
        sqlQuery,
        data,
        insight,
        suggestions,
        executionTime
      }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'AI', content: err.response?.data?.error || 'Sorry, I encountered an error analyzing your data.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] relative max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-black/[0.04] mb-8 shrink-0">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">Intelligence Active</span>
          </motion.div>
          <h2 className="text-3xl font-semibold text-text-base flex items-center gap-3 tracking-tight">
            <Database className="text-primary w-7 h-7" />
            {currentDataset?.originalName || 'Dataset Analytics'}
          </h2>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-2 md:px-6 space-y-10 pb-32">
        {messages.length === 0 && !isLoading && (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-80">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-primary/20">
              <Sparkles size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-text-base mb-4 tracking-tight">How can I help you?</h3>
            <p className="text-text-muted text-lg max-w-md font-light">Ask questions in natural language. I'll translate them into SQL, analyze your data, and provide clear insights.</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <ChatMessage key={idx} msg={msg} />
        ))}
        
        {isLoading && (
          <div className="flex gap-6 self-start mr-12 w-full max-w-3xl animate-pulse mt-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <div className="space-y-4 w-full pt-2">
              <div className="h-3 bg-black/5 rounded-full w-1/4"></div>
              <div className="h-3 bg-black/5 rounded-full w-1/2"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 pt-6 pb-6 bg-gradient-to-t from-bg-base via-bg-base to-transparent z-10 px-2 md:px-6">
        <form onSubmit={handleSubmit} className="relative glass-card shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-2 rounded-full flex items-center bg-white">
          <div className="pl-6 text-text-muted">
            <Sparkles size={20} />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your data..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-4 text-text-base text-lg outline-none font-light placeholder:text-text-muted/60"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-4 mr-1 bg-gradient-to-r from-primary to-primary-hover text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_25px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
          >
            <Send size={20} />
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`flex gap-4 md:gap-6 w-full ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
        isUser 
          ? 'bg-black/5 text-text-base border border-black/10' 
          : 'bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/20'
      }`}>
        {isUser ? <User size={20} /> : <Sparkles size={20} />}
      </div>
      
      <div className={`flex-1 overflow-hidden ${isUser ? 'flex flex-col items-end' : 'flex flex-col items-start'}`}>
        
        {/* Chat Bubble */}
        <div className={`inline-block max-w-[85%] rounded-3xl px-6 py-4 text-[15px] md:text-base leading-relaxed font-light ${
          isUser 
            ? 'bg-black text-white rounded-tr-sm shadow-md' 
            : 'bg-white border border-black/5 text-text-base rounded-tl-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
        }`}>
          {msg.content}
        </div>

        {/* AI Components */}
        {!isUser && (
          <div className="w-full mt-4 max-w-4xl space-y-6">
            
            {msg.sqlQuery && (
              <div className="border border-black/5 rounded-[24px] overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setShowSql(!showSql)}
                  className="flex justify-between items-center w-full p-4 hover:bg-black/[0.02] transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-text-muted uppercase tracking-wider">
                    <Code2 size={16} /> Generated SQL
                  </span>
                  {showSql ? <ChevronUp size={18} className="text-text-muted" /> : <ChevronDown size={18} className="text-text-muted" />}
                </button>
                <AnimatePresence>
                  {showSql && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-900 border-t border-black/5"
                    >
                      <pre className="p-6 text-sm text-blue-300 overflow-x-auto font-mono leading-relaxed">
                        <code>{msg.sqlQuery}</code>
                      </pre>
                      {msg.executionTime && (
                        <div className="px-6 pb-4 text-xs font-medium text-slate-500 text-right uppercase tracking-wider">
                          Executed in {msg.executionTime}ms
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {msg.data && msg.data.length > 0 && (
              <div className="border border-black/5 rounded-[24px] overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
                <div className="px-6 py-4 border-b border-black/5 bg-black/[0.01] flex items-center gap-2 text-sm font-semibold text-text-muted uppercase tracking-wider">
                  <LineChart size={18} className="text-primary" /> 
                  Data Result <span className="lowercase font-normal">({msg.data.length} rows)</span>
                </div>
                <div className="overflow-x-auto max-h-[400px]">
                  <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs font-medium text-text-muted uppercase bg-white sticky top-0 z-10 shadow-sm">
                      <tr>
                        {Object.keys(msg.data[0]).map((key) => (
                          <th key={key} scope="col" className="px-6 py-4 tracking-wider">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {msg.data.slice(0, 50).map((row, i) => (
                        <tr key={i} className="hover:bg-black/[0.02] transition-colors">
                          {Object.values(row).map((val: any, j) => (
                            <td key={j} className="px-6 py-3.5 font-light text-text-base">{String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {msg.suggestions && msg.suggestions.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {msg.suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    className="text-xs md:text-sm font-medium bg-black/[0.03] text-text-muted hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-colors border border-black/5"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Chat;
