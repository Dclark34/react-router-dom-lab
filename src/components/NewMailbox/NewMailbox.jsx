import { useState } from "react";
import { useNavigate } from "react-router";


const initialState = {
    boxOwner: '',
    boxSize: '', 
}

const NewMailbox = (props) => {
    const [formData, setFormData] = useState(initialState);

const navigate = useNavigate();


const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes')
};

const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Owner: </label>
        <input 
        type="text" 
        id="boxOwner" 
        name="boxOwner" 
        value={formData.boxOwner} 
        onChange={handleChange}
        />
        <label>Box Size: </label>
        <select name="boxSize" 
        id="boxSize" 
        value={formData.boxSize} 
        onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
    </form>
 )
}


export default NewMailbox;


//!Question for Jan. Do we not need enums when selecting a box size? I remember that including that
//! in the object limited inputs to only things specified in ennums. But maybe that was for a diferent
//! type of input field? Just curious as to why we wouldn't need it for our drop down menu for our
//! boxSize property. 