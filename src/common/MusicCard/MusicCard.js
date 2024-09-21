import React from 'react';
import './MusicCard.style.css'
import { useNavigate } from 'react-router-dom';

const MusicCard = ({ music }) => {
  const navigate = useNavigate();
  const secondImage = music.images && music.images[0] ? music.images[0].url : '';


  const goToDetailPage = (id) => {
    if (music) {
      navigate(`/albums/${music.id}`);
  } else {
        console.error('Error: Missing album id in music data');
    }
  }

  return (
    <div className='music_card_Releases'>
    {music ? (
      <img src={secondImage} alt={music.name} onClick={()=>goToDetailPage(music.id)} />
    ) : (
      <p>No music data available</p>
    )}
  </div>
  );
};

export default MusicCard;