import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

const Remote2: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledEmojis = [...emojis, ...emojis].sort(
      () => Math.random() - 0.5
    );
    const newCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(newCards);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched)
      return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      checkForMatch(newFlippedCards);
    }
  };

  const checkForMatch = (flippedCardIds: number[]) => {
    const [firstCardId, secondCardId] = flippedCardIds;
    if (cards[firstCardId].emoji === cards[secondCardId].emoji) {
      const newCards = [...cards];
      newCards[firstCardId].isMatched = true;
      newCards[secondCardId].isMatched = true;
      setCards(newCards);
      setFlippedCards([]);

      if (newCards.every((card) => card.isMatched)) {
        setGameWon(true);
      }
    } else {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[firstCardId].isFlipped = false;
        newCards[secondCardId].isFlipped = false;
        setCards(newCards);
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-white"
    >
      <h3 className="text-3xl font-bold mb-4">Memory Card Game</h3>
      <p className="text-lg">Match the pairs of emoji cards!</p>
      <motion.div
        className="grid grid-cols-4 gap-4 max-w-md mx-auto"
        variants={{
          hidden: { opacity: 1, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-16 h-16 text-3xl flex items-center justify-center rounded-lg transition-all duration-300 ${
              card.isFlipped || card.isMatched
                ? 'bg-pink-500 text-white'
                : 'bg-indigo-500 bg-opacity-50 hover:bg-opacity-70'
            }`}
            disabled={card.isFlipped || card.isMatched}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            {card.isFlipped || card.isMatched ? card.emoji : ''}
          </motion.button>
        ))}
      </motion.div>
      <div className="text-center">
        <p className="text-lg font-semibold">Moves: {moves}</p>
        {gameWon && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-bold text-pink-300 mt-4"
          >
            Congratulations! You won in {moves} moves!
          </motion.p>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={initializeGame}
          className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
        >
          New Game
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Remote2;
