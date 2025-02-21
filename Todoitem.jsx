import { useState } from "react";
import PropTypes from "prop-types";
import { MdEdit,MdDelete,MdOutlineSave } from "react-icons/md";
function Todoitem({id,item,onDelete,onEdit}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(item);
    const [status, setStatus] = useState(false);
    const handleEdit = () => {
        if (isEditing) {
            onEdit(id, editedItem);
        }
        setIsEditing(!isEditing);
    };
    const save=<MdOutlineSave/>
    const edit=<MdEdit/>
    const Delete=<MdDelete/>
    return (
        <div className="container">
             <div className="task">
                <div className="content">
                    {isEditing ? (
                        <input className="MI"
                            type="text"
                            value={editedItem}
                            onChange={(e) => setEditedItem(e.target.value)}
                        />
                    ) : (
                        <p>{item}</p>
                    )}
                <div>
                    <button className="status" onClick={() => (setStatus(!status))}> {status ? "✔️": "❌"} </button>
                </div>
                <div className="actions">
                    <button  className="status" onClick={handleEdit}>{isEditing ? save : edit }</button>
                    <button  className="status" onClick={() => onDelete(id)}>{Delete}</button>
                </div>
                </div>
            </div>
            </div>
        
    );
}
Todoitem.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Todoitem;