import React, {useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import './AddPage.css'

const AddPage = () => {

    const [rectangle, setRectangle] = useState(
        {name: "",
        width: "",
        height: "",
        color: ""
        })

    const history = useHistory();
    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.id == 'name'){
            setRectangle({
                ...rectangle, name: e.target.value
            })
        } else if(e.target.id == 'width'){
            setRectangle({
                ...rectangle, width: e.target.value
            })
        } else if(e.target.id == 'height'){
            setRectangle({
                ...rectangle, height: e.target.value
            })
        } else if(e.target.id == 'color'){
            setRectangle({
                ...rectangle, color: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        console.log("submitted")
        e.preventDefault();
        console.log(rectangle)
        axios.post('http://localhost:5000/rectangles/add', rectangle)
        .then(res => {
            alert('Rectangle added! Redirecting you to home page.')
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
        <Typography variant="h5" align="center">Add Rectangle</Typography>
        {/* <Link to="/">
        <button href="/">Back</button>
        </Link> */}
        <br />
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <br />
            <input placeholder="Bob" type="text" id="name" name="name" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Width:
            <br />
            <input placeholder="50" type="text" id="width" name="width" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Height:
            <br />
            <input placeholder="50" type="text" id="height" name="height" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Color:
            <br />
            <input placeholder="red" type="text" id="color" name="color" onChange={handleChange} />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
        </form>
        </Paper>
        </Container>
        </div>
    )
}

export default AddPage
