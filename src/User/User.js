import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from '../images/user.png';
import './User.css';


function List(props) {

  const [isFavoriteAdded, setisFavoriteAdded] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToFavouriteHandler = (e, id) => {
    e.stopPropagation();
    setisFavoriteAdded(!isFavoriteAdded);
    props.addToFavourite(id);   
  }

  const navigateDetails = () => {
    dispatch({type:"USER_DETAIL", data: props.user})
    navigate(`/user-details/${props.user.id}`);
  }

  const editUser = (e) => {
    e.stopPropagation();
    dispatch({type:"USER_DETAIL", data: props.user})
    navigate(`/edit-user/${props.user.id}`);
  }
  

  const favoriteClasses = isFavoriteAdded ? 'fa fa-heart' : 'fa fa-heart-o';

  return (
    <div className='User' onClick={() => navigateDetails(props.user.id)}>
        <div className="img-wrap">
          <img src={user}></img>
        </div>
        <div className='user-content'>
          <h4>{props.user.name}</h4>
        </div>
        <div className='footer'>
          <button onClick={(e) => addToFavouriteHandler(e, props.user.id)} className='btn'><i className={favoriteClasses}></i></button>
          <button onClick={(e) => editUser(e)} className='btn'><i className="fa fa-pencil"></i></button>
          <button onClick={(e) => props.deleteHandler(e, props.user.id)} className='btn'><i className="fa fa-trash"></i></button>
        </div>
    </div>
  );
}

export default List;