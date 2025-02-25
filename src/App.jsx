import React from 'react';

export const App = () => {
  const myName = "Сергій";
  const url = "https://st2.depositphotos.com/3545341/7451/i/450/depositphotos_74516317-stock-photo-ukrainian-girl-with-flag.jpg"
  const alt = "Urkraine"
  const favoriteSite={
    nameSite:"Youtube",
    urlSite:"https://www.youtube.com/"
  }
  const firstNumber= 5
  const lastNumber=10
  const sum=firstNumber+lastNumber
  const colors={"Білий","Голубий","Жовтий"}
  return (
    <div>
    <h1>Моє ім'я: {myName}</h1>
    <p>Ласкаво просимо до нашого сайту!</p>
    <img src={url} alt={alt} />
    <a href={favoriteSite.urlSite}>{favoriteSite.nameSite}</a>
    <p>{firstNumber}+{lastNumber}={sum}</p>
  </div>

  );
};
