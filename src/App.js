import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Postdata from './components/Postdata';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {Postdata.map(data => (
          <Posts 
            alt={data.alt}
            image={data.image}
            link={data.link}
            key={data.key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
