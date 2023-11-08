import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";



const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf',true);

  return (
    //creamos el elemento 3d

    <mesh>
      <hemisphereLight intensity={2}
      groundColor='black'/>
      <pointLight intensity={5}/>
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
      penumbra={10}
      intensity={10}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
      object={computer.scene}
      scale={isMobile?0.7: 0.7}
      position={isMobile?[0,-3,-2.2]:[0,-2.7,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}


const ComputerCanvas =()=>{
  const[isMobile, setIsMobile] = useState(false)



  useEffect(()=>{
    //agregar un oyente para cambios en el tamaño de la pantalla
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // establece el valor inicial de la variable de estado 'isMobile'
    setIsMobile(mediaQuery.matches);

    // Definir una función de devolución de llamada para manejar el cambio en la consulta madia
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    };

    // Agrega la función de devolución de llamada un oyente para realizar cambios en la consulta de medios
    mediaQuery.addEventListener('change', 
    handleMediaQueryChange);

    // Elimina el oyente cuando el componente está desmontado
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
    
  },[]);



  return(
    <Canvas
    frameloop="demand"
    shadows
    camera = {{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}/>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      <Suspense/>

      <Preload all/>
    </Canvas>
    
  )
}

export default ComputerCanvas