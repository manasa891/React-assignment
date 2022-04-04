import { useState } from 'react';
import List from './User';
import UsersData from './UsersData';

function Users() {

  const [usersData, setUsersData] = useState(UsersData);
  const [favouriteData, setfavouriteData] = useState([]);

  const deleteHandler = (id) => {
    const newUserData = usersData.filter(user => user.id != id);
    setUsersData(newUserData)
  }

  const addToFavourite = (id) => { 
    const favouriteUser = usersData.find(user => user.id == id);
    favouriteUser.isFavourite = !favouriteUser.isFavourite;
    favouriteData.push(favouriteUser);

    const favouriteUserData = [...new Set(favouriteData)].filter(user => user.isFavourite);
    setfavouriteData(favouriteUserData);
    
    console.log("favouriteData", favouriteUserData);
  }

  return (
    <>
        {
          usersData.map((user) => (
            <List key={user.id} user={user} deleteHandler={deleteHandler}
              addToFavourite={addToFavourite} />
          ))
        }
    </>
  );
}

export default Users;
