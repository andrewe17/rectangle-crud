import { React, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { RectangleContext } from '../context/RectangleContext'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import './DisplayPage.css'

const useStyles = makeStyles((theme) => {
    paper: {
        margin: theme.spacing(1)
    }
})

const DisplayPage = () => {
    const [rectangles, setRectangles] = useState();
    const {value, setValue} = useContext(RectangleContext)
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:5000/rectangles')
        .then(res => {
            setRectangles(res.data)
            drawRectangles(res.data)
            canvasListener(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const drawRectangles = (rec) => {
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        // ctx.strokeRect(0, 0, canvas.width, canvas.height);
        var recSpace = 0;

        for(var i = 0; i < rec.length; i++) {
            ctx.fillStyle = rec[i].color;
            ctx.fillRect(0,recSpace, rec[i].width -5, rec[i].height)
            recSpace = rec[i].height + 5 + recSpace
        }

    }

    const canvasListener = (rec) => {
        var canvas = document.getElementById('myCanvas');

        canvas.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("x coord: " + e.x)
            console.log("y coord: " + e.y)
            var space = 0;
            console.log(e.offsetX)
            console.log(e.offsetY)
            rec.forEach(element => {
                if((e.offsetX >= 0 && e.offsetX <= element.width) && (e.offsetY >= space && e.offsetY <= element.height + space)) {
                    // <Link to="/attributepage"></Link>
                    console.log(element)
                    setValue(
                        {
                            id: element._id,
                            width: element.width,
                            height: element.height,
                            color: element.color,
                            name: element.name,
                        }
                    )
                    localStorage.setItem("rectangle", element)
                    history.push("/attributepage")
                } else {
                    console.log('false')
                }
                space = element.height + space
                space += 5
            })

        })
    
    }
    return (
        <div className="wrapper">
        <br />
        <Typography align="center" variant="h5">Select a rectangle or <Link to="/addpage">add</Link> a new one!</Typography>
        <Container maxWidth="md">
        <br/>
        <Paper style={{padding: 8}} elevation={3}>
        <br/>
        <div className="scrollable">
        <canvas id="myCanvas" width="2000" height="5000"></canvas>
        </div>
        <br />
        </Paper>
        </Container>
        
        </div>
    )
}

export default DisplayPage
