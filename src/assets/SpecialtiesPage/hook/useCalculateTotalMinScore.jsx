import { useState, useEffect } from 'react';

const useCalculateTotalMinScore = (item1, item2, item3, subjects) => {
  const [totalMinScore, setTotalMinScore] = useState(null);

  useEffect(() => {
    const calculateMinScore = (items) => {
      if (!items) return Infinity;

      const itemsArray = items.split(',');
      let minScore = Infinity;

      itemsArray.forEach((item) => {
        const subjectIndex = getSubjectIndex(item, item1, item2, item3);
        const score = parseInt(subjects[subjectIndex]);

        if (!isNaN(score)) {
          minScore = Math.min(minScore, score);
        }
      });

      return minScore === Infinity ? null : minScore;
    };

    const getSubjectIndex = (item, item1, item2, item3) => {
      if (item1 === item) return 0;

      const item2Array = item2 ? item2.split(',') : [];
      if (item2Array.includes(item)) {
        return item2Array.indexOf(item) + 1; // +1, потому что item1 занимает индекс 0
      }

      const item3Array = item3 ? item3.split(',') : [];
      if (item3Array.includes(item)) {
        return 1 + item2Array.length + item3Array.indexOf(item); // item1 + item2.length
      }

      return -1; // Если предмет не найден, возвращаем -1
    };

    const minScoreItem1 = calculateMinScore(item1);
    const minScoreItem2 = calculateMinScore(item2);
    const minScoreItem3 = calculateMinScore(item3);

    let total = 0;
    if (minScoreItem1 !== null) total += minScoreItem1;
    if (minScoreItem2 !== null) total += minScoreItem2;
    if (minScoreItem3 !== null) total += minScoreItem3;

    setTotalMinScore(total);
  }, [item1, item2, item3, subjects]);

  return totalMinScore;
};

export default useCalculateTotalMinScore;
