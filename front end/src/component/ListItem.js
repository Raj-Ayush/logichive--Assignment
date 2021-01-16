import React, {useState} from 'react';

/**
* @author
* @function ListItem
**/

const ListItem = (props) => {
    const [editMode,setEditMode]= useState(false)
    const [editData, setEditData ]= useState(props.item);
    const editedItemChanged= (ev)=>{
        setEditData(ev.target.value)
    }
    const saveEdit = ()=>{
        props.editHandler(editData, props.idx);
        setEditMode(false);
    }
  return(
      <div className="list">
          {(editMode?
            <>
            <div className="listItem">
              <input type="text" 
                onChange={(ev) => editedItemChanged(ev) }
                value = {editData}
                placeholder="Edit Task"
              />  
            </div>
            <div clasname= "action">
                <button 
                    className="save" 
                    onClick={saveEdit}
                    disabled={editData.trim().length === 0}
                >
                    Save
                </button>
          </div>
          </>
          :
          <>
            <div className="listItem">
                {props.item}
            </div>
            <div clasname= "action">
                <button className="edit" onClick={() =>setEditMode(true)}>Edit</button>
                <button className="edit" onClick={() =>props.deleteHandler(props.idx)}>Delete</button>
            </div>
            </>
        )}
          

        

      </div>
   )

 }

export default ListItem