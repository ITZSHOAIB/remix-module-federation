import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Remote1: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  const handleGuess = () => {
    const guessNumber = Number.parseInt(guess);
    setAttempts(attempts + 1);

    if (Number.isNaN(guessNumber)) {
      setMessage('Please enter a valid number.');
    } else if (guessNumber === targetNumber) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts + 1} attempts.`
      );
    } else if (guessNumber < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-white"
    >
      <h3 className="text-3xl font-bold mb-4">Guess the Number</h3>
      <p className="text-lg">Try to guess the number between 1 and 100!</p>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full max-w-xs px-4 py-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-white placeholder-opacity-70"
          placeholder="Enter your guess"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGuess}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
        >
          Submit Guess
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateNewNumber}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
        >
          New Game
        </motion.button>
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold mt-4"
          >
            {message}
          </motion.p>
        )}
        <p className="text-sm mt-4">Attempts: {attempts}</p>
      </div>
    </motion.div>
  );
};

export default Remote1;
