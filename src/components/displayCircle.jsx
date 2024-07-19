import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const DisplayCircle = ({ tagInfo, tagTitle, critical }) => {
  const [classe, setClasse] = useState('');
  const [tagSize, setTagSize] = useState('');
  const [previousCritical, setPreviousCritical] = useState(null); // To track previous critical state

  useEffect(() => {
    let newClasse;
    if (critical === 0) {
      newClasse = 'tempDisplay';
    } else if (critical === 1) {
      newClasse = 'tempDisplayWarning';
    } else {
      newClasse = 'tempDisplayCritical';
      if (previousCritical !== 2) { // Show toast only if the previous state was not critical
        toast.warning(`${tagTitle} se encontra em estado crítico`);
      }
    }
    setClasse(newClasse);

    let newTagSize;
    if (tagInfo.length <= 4) {
      newTagSize = 'tagInfoLarge';
    } else {
      newTagSize = 'tagInfoSmall';
    }
    setTagSize(newTagSize);

    setPreviousCritical(critical); // Update the previous critical state

  }, [critical, tagInfo, tagTitle]);

  return (
    <div className={classe}>
      <p className={tagSize}>{tagInfo}</p>
      <p className='tagTitle'>{tagTitle}</p>
    </div>
  );
};

export default DisplayCircle;
