import React, {useContext, useEffect, useState} from 'react'
import { RectangleContext } from '../context/RectangleContext'
import { Link, useHistory } from 'react-router-dom'
import './AttributePage.css'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const AttributePage = () => {
    const {value, setValue} = useContext(RectangleContext)
    const history = useHistory()
    const handleDelete = (e) => {
      e.preventDefault()
      console.log("delete")
      axios.delete('http://localhost:5000/rectangles/' + value.id)
      .then(res => {
        alert('Rectangle deleted! Redirecting you to home page.')
        history.push("/")
    })
    .catch(err => {
        alert(err)
    })
    }
    return (
      <Container maxWidth="sm">
      <br />
      <Paper style={{padding: 8}} elevation={3}>
      <Typography variant="h5" align="center">Rectangle Attributes</Typography>
      <br />
        <div>
        
            <table>
  <tr>
    <th>Name</th>
    <td>{value.name}</td>
  </tr>
  <tr>
    <th>ID</th>
    <td>{value.id}</td>
  </tr>
  <tr>
    <th>Width</th>
    <td>{value.width}</td>
  </tr>
  <tr>
    <th>Height</th>
    <td>{value.height}</td>
  </tr>
  <tr>
    <th>Color</th>
    <td>{value.color}</td>
  </tr>
</table>
<br />
        <div class="wrapper">
            <Link to="/">
        <button className="button1" href="/">Back</button>
        </Link>
        <Link to="/editpage">
        <button className="button2" href="/editpage">Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
        </Paper>
        </Container>
    )
}

export default AttributePage
