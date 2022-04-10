import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './User';
import UsersData from './UsersData';

function Users() {

  const dispatch = useDispatch();

  const usersData = useSelector(state => state.userData);

  const [favouriteData, setfavouriteData] = useState([]);

  const deleteHandler = (e, id) => {
    e.stopPropagation();
    const newUserData = usersData.filter(user => user.id != id);
    dispatch({type:"DElETE_USER", users: newUserData})
  }

  useEffect(() => {
    dispatch({type:"USER_DATA", users: UsersData});
  }, [])

  const addToFavourite = (id) => { 
    const favouriteUser = usersData.find(user => user.id == id);
    favouriteUser.isFavourite = !favouriteUser.isFavourite;
    favouriteData.push(favouriteUser);

    const favouriteUserData = [...new Set(favouriteData)].filter(user => user.isFavourite);
    setfavouriteData(favouriteUserData);
    
    console.log("favouriteData", favouriteUserData);
  }

  return (
    <div className="Card">
        {
          usersData && usersData.map((user) => (
            <List key={user.id} user={user} deleteHandler={deleteHandler}
              addToFavourite={addToFavourite} />
          ))
        }
    </div>
  );
}

export default Users;
