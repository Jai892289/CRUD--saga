import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsRequest, fetchItemsRequestDelete, updateItemRequest, deleteData } from './redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import Home from './Component/Home';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemsReducer.items);
  const loading = useSelector((state) => state.itemsReducer.loading);
  const error = useSelector((state) => state.itemsReducer.error);

  const [editStates, setEditStates] = useState({});
  const [editData, setEditData] = useState({}); // To store edited data

  useEffect(() => {
    dispatch(fetchItemsRequest());
  }, []);

  const reversedItems = [...items].reverse().slice(0, 6);

  const handleDelete = (id) => {
    console.log("id", id);
    dispatch(fetchItemsRequestDelete(id))
  };

  // const handleUpdate = () =>{
  //   const itemData = {
  //     name:"test",
  //     email:"j@fewf"
  //   }
  //   dispatch(fetchItemsRequestPost(itemData))
  // }

  const handleToggleEdit = (id, name) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [id]: !prevEditStates[id],
    }));

    setEditData({ [id]: name });
  };

  const handleUpdateItem = (itemId) => {
    const updatedName = editData[itemId];
    if (updatedName !== undefined) {
      dispatch(updateItemRequest(itemId, { name: updatedName }));
      setEditStates((prevEditStates) => ({
        ...prevEditStates,
        [itemId]: false,
      }));
    }
  };

const handleDeletes  = (id)=>{
  console.log("click")
  dispatch(deleteData(id))
}


  return (
    <div>
      <Home />


      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error.message}</p> : null}
      <h1>All data are listed here</h1>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>email</td>
            <td>Status</td>

          </tr>
        </thead>

        {/* <tbody>
          {reversedItems.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              {editStates[item._id] ? (
                <input
                  type="text"
                  value={editData[item._id]}
                  onChange={(e) => setEditData({ [item._id]: e.target.value })}
                />
              ) : (
                item.name
              )}

              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faTrash} color='red' onClick={() => handleDelete(item._id)} />
                {editStates[item._id] ? (
                  <button onClick={() => handleUpdateItem(item._id)}>
                    Resave
                  </button>
                ) : (
                  <FontAwesomeIcon icon={faPencil} color='black' onClick={() => handleToggleEdit(item._id, item.name)} />
                )}
              </td>

            </tr>
          ))}
        </tbody> */}

        <tbody>
          {reversedItems.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>
                {editStates[item._id] ? (
                  <input
                    type="text"
                    value={editData[item._id]}
                    onChange={(e) => setEditData({ [item._id]: e.target.value })}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>{item.email}</td>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faTrash} color='red' onClick={() => handleDelete(item._id)} />
                {editStates[item._id] ? (
                  <div style={{ marginLeft: 'auto' }}>
                    <button onClick={() => handleUpdateItem(item._id)}>Resave</button>
                  </div>
                ) : (
                  <FontAwesomeIcon icon={faPencil} color='black' onClick={() => handleToggleEdit(item._id, item.name)} />
                  
                )}

              </td>
            </tr>
          ))}
        </tbody>



      </table>



    </div>
  );
};

export default App;
