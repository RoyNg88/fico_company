import React, {useState, useEffect} from 'react';
import './Search.css';

const url = 'https://project-detail-default-rtdb.asia-southeast1.firebasedatabase.app/project-detail.json';

const Search = React.memo(props => {
  const {onloadedProjects} = props;
  const [filter, setFilter] = useState('');
 

  useEffect(() => {
    const timer = setTimeout(() => {

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const loadedIngredients = [];
          for (const key in data) {
            loadedIngredients.push({
              id: key,
              title: data[key].title,
              name: data[key].name,
              fundType: data[key].fundType,
              donate: data[key].donate
            });
          }
        
        onloadedProjects(loadedIngredients.filter((val) => val.name.toLowerCase().includes(filter.toLowerCase()) ||
        val.fundType.toLowerCase().includes(filter.toLowerCase()) ));
        });
        }, 500);

    return () => {
        clearTimeout(timer);
    };

  }, [filter, onloadedProjects]);

  return (
    <section className="search">
      
        <div className="search-input">
          <label>Search By Name</label>
          <input type="text"
          onChange={event => setFilter(event.target.value)} />
        </div>
     
    </section>
  );
});

export default Search;
