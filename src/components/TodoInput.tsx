import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border-2 border-light-mint rounded-lg focus:outline-none focus:border-medium-green transition-colors duration-200 bg-white text-dark-teal placeholder-dark-teal/60"
          aria-label="New todo text"
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-medium-green text-white font-medium rounded-lg hover:bg-dark-teal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-medium-green focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Add todo"
        >
          Add
        </motion.button>
      </div>
    </motion.form>
  );
};
