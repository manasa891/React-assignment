import { useState } from 'react';
import user from '../images/user.png';
import './User.css';


function List(props) {

  const [isFavoriteAdded, setisFavoriteAdded] = useState(false);

  const addToFavouriteHandler = (id) => {
    setisFavoriteAdded(!isFavoriteAdded);
    props.addToFavourite(id);
    
  }

  const favoriteClasses = isFavoriteAdded ? 'fa fa-heart' : 'fa fa-heart-o';

  return (
    <li className='User'>
      <div className="img-wrap">
        <img src={user}></img>
      </div>
      <div className='user-content'>
        <h4>{props.user.name}</h4>
      </div>
      <div className='footer'>
        <button onClick={() => addToFavouriteHandler(props.user.id)} className='btn'><i className={favoriteClasses}></i></button>
        <button className='btn'><i className="fa fa-pencil"></i></button>
        <button onClick={() => props.deleteHandler(props.user.id)} className='btn'><i className="fa fa-trash"></i></button>
      </div>
    </li>
  );
}

export default List;