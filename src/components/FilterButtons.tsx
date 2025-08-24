import { motion } from 'framer-motion';
import { FilterType } from '../types/todo';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
}

export const FilterButtons = ({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
}: FilterButtonsProps) => {
  const filters: { type: FilterType; label: string; count: number }[] = [
    { type: 'all', label: 'All', count: activeCount + completedCount },
    { type: 'active', label: 'Active', count: activeCount },
    { type: 'completed', label: 'Completed', count: completedCount },
  ];

  return (
    <motion.div
      className="flex justify-center gap-2 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {filters.map(({ type, label, count }) => (
        <motion.button
          key={type}
          onClick={() => onFilterChange(type)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentFilter === type
              ? 'bg-medium-green text-white shadow-md'
              : 'bg-light-mint text-dark-teal hover:bg-medium-green hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Show ${label.toLowerCase()} todos`}
        >
          {label}
          <span className="ml-2 text-sm opacity-80">({count})</span>
        </motion.button>
      ))}
    </motion.div>
  );
};
