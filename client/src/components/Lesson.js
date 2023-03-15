import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  canvasContainer: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    height: '40vh',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

function Lesson() {
  const [data, setData] = useState({});
  const [socket, setSocket] = useState(null);
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1, 1, 1]);
  const classes = useStyles();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => console.log('WebSocket connected');
    socket.onmessage = (event) => {
      const { type, payload } = JSON.parse(event.data);
      switch (type) {
        case 'position':
          setPosition(payload);
          break;
        case 'rotation':
          setRotation(payload);
          break;
        case 'scale':
          setScale(payload);
          break;
        default:
          break;
      }
    };
    setSocket(socket);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/lesson/1');
      setData(response.data);
    }
    fetchData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = '/lesson1';
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <div className={classes.canvasContainer}>
            <Canvas>
              <ambientLight intensity={0.5} />
              <mesh position={[0, -1, 0]}>
                <planeBufferGeometry attach="geometry" args={[10, 10]} />
                <meshStandardMaterial attach="material" color="gray" />
              </mesh>
              <mesh position={position} rotation={rotation} scale={scale}>
                <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
                <meshStandardMaterial attach="material" color="orange" />
              </mesh>
            </Canvas>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.buttonContainer}>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="body1">{data.description}</Typography>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Go to Lesson 1
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Lesson;
