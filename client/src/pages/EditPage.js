
import React, {useContext, useEffect, useState} from 'react'
import { RectangleContext } from '../context/RectangleContext'
import { Link, useHistory} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const EditPage = () => {
    const history = useHistory()
    const {value, setValue} = useContext(RectangleContext)
    const [rectangle, setRectangle] = useState(
        {name: "",
        width: "",
        height: "",
        color: ""
        })
    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.id == 'name'){
            setValue({
                ...value, name: e.target.value
            })
        } else if(e.target.id == 'width'){
            setValue({
                ...value, width: e.target.value
            })
        } else if(e.target.id == 'height'){
            setValue({
                ...value, height: e.target.value
            })
        } else if(e.target.id == 'color'){
            setValue({
                ...value, color: e.target.value
            })
        }
    }

    console.log(value)
    const handleSubmit = (e) => {
        console.log("submitted")
        e.preventDefault();
        console.log(value)
        axios.post('http://localhost:5000/rectangles/update/' + value.id, value)
        .then(res => {
            alert('Rectangle updated!')
            history.push("/")
        })
        .catch(err => {
            alert(err)
        })
    }
    return (
        <div>
        <br />
        <Container maxWidth="sm">
        <Paper style={{padding: 8}} elevation={3}>
        <Typography variant="h5" align="center">Edit Rectangle</Typography>
        {/* <Link to="/">
        <button href="/">Back</button>
        </Link> */}
        <br />
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <br />
            <input type="text" value={value.name} id="name" name="name" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Width:
            <br />
            <input type="text"  value={value.width} id="width" name="width" onChange={handleChange} />
        </label>
        <br />
        <label>
            Height:
            <br />
            <input type="text" id="height"  value={value.height} name="height" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Color:
            <br />
            <input type="text" id="color" value={value.color} name="color" onChange={handleChange}/>
        </label>
        <br />
        <br />
        <input type="submit" value="Update" />
        </form>
        </Paper>
        </Container>
        </div>
    )
}

export default EditPage
