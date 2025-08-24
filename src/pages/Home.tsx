import { motion, AnimatePresence } from 'framer-motion';
import { TodoInput } from '../components/TodoInput';
import { TodoItem } from '../components/TodoItem';
import { FilterButtons } from '../components/FilterButtons';
import { useTodos } from '../hooks/useTodos';

export const Home = () => {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeCount,
    completedCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-light-mint py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-dark-teal mb-2">
            Todo App
          </h1>
          <p className="text-dark-teal/70 text-lg">
            Stay organized and productive
          </p>
        </motion.div>

        <TodoInput onAdd={addTodo} />

        <FilterButtons
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {todos.length === 0 ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 text-dark-teal/60"
              >
                <div className="text-6xl mb-4">📝</div>
                <p className="text-lg">
                  {filter === 'all'
                    ? 'No todos yet. Add one above!'
                    : `No ${filter} todos found.`}
                </p>
              </motion.div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {todos.length > 0 && (
          <motion.div
            className="mt-8 text-center text-sm text-dark-teal/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <p>
              {activeCount} active, {completedCount} completed
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
