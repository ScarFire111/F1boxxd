import React,{useEffect, useState} from 'react';
import './newCollections.css';
import Item from '../Items/Item';

export const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((response) => response.json()) // fixed
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="new-Collections">
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((items, i) => {
          return (
            <Item 
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              alt=""
              new_price={items.new_price}
              old_price={items.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
