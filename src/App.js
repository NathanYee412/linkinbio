import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Postdata from './components/Postdata';

function App() {
  return (
    <div>
      <Header />
      {Postdata.map(data => (
        <Posts 
          alt={data.alt}
          image={data.image}
          link={data.link}
          key={data.key}
        />
      ))}
    </div>
  );
}

export default App;
