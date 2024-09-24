import React from 'react';
import Event from './Event';

const Festivals = () => {
  // Define your festival data with image URLs
  const festivals = [
    { name: 'Japan Fes', date: 'September 2024', location: 'New York, NY, USA', color: 'blue', image: '/src/assets/img/japanfes.jpg', link: 'https://www.japanfes.com/' },
    { name: 'Smorgasburg', date: 'April - October (Saturdays & Sundays)', location: 'Brooklyn, NY, USA', color: 'green', image: '/src/assets/img/SMORGASBURG.jpg', link: 'https://www.smorgasburg.com/' },
    { name: 'The Queens Night Market', date: 'May 6 - October 28, 2023', location: 'Queens, NY, USA', color: 'red', image: '/src/assets/img/queensnight.jpeg', link: 'https://www.queensnightmarket.com/' },
    { name: 'Bronx Night Market', date: 'May - October (once a month)', location: 'Bronx, NY, USA', color: 'purple', image: '/src/assets/img/bronxnight.jpg', link: 'https://www.bronxnightmarket.com/' },
    { name: 'The Feast of San Gennaro', date: 'September 12-22, 2024', location: 'Little Italy, NYC, NY, USA', color: 'pink', image: '/src/assets/img/LittleItaly.jpg', link: 'https://sangennaronyc.org/' },
    { name: 'NYC Wine & Food Festival', date: 'October 17-20, 2024', location: 'New York, NY, USA', color: 'blue', image: '/src/assets/img/NYCFF.jpg', link: 'https://nycwff.org/' },
    { name: 'The Great Big Bacon Picnic', date: 'September 23-24, 2024', location: 'New York, NY, USA', color: 'orange', image: '/src/assets/img/pigblanket.jpg', link: 'https://donyc.com/great-big-bacon-picnic' },
    { name: 'NYC Hot Sauce Expo', date: 'September 21-22, 2024', location: 'Brooklyn, NY, USA', color: 'yellow', image: '/src/assets/img/hotsauce.jpg', link: 'https://nychotsauceexpo.com/' },
    { name: 'NY BagelFest', date: 'September 28, 2024', location: 'Queens, NY, USA', color: 'green', image: '/src/assets/img/bagel.jpeg', link: 'https://www.bagelfest.com/' },
    { name: 'Anime Food NYC Festival', date: 'October 25, 2024', location: 'Brooklyn, NY, USA', color: 'purple', image: '/src/assets/img/animefood.jpeg', link: 'https://www.eventcreate.com/e/anime-food-festival-oct24' }
  ];

  return (
    <div className="Festivals">
      <div className="festival-grid">
        {festivals.map((festival, index) => (
          <Event
            key={index} // Consider using a unique identifier if available
            name={festival.name}
            date={festival.date}
            location={festival.location}
            color={festival.color}
            image={festival.image} // Pass the image URL to the Event component
            link={festival.link} // Pass the link to the Event component
          />
        ))}
      </div>
    </div>
  );
};

export default Festivals;
