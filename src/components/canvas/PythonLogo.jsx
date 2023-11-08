

import React, { useRef } from 'react'
import { Suspense } from "react";
import { useGLTF,OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";

import CanvasLoader from "../Loader";


export function PythonLogo(props) {
  const { nodes, materials } = useGLTF('./pythonLogo/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Python_Python_0.geometry}
         material={materials.Python} 
         rotation={[-Math.PI / 2, 0, 0]} scale={10}
         intensity={10}
         
         />
     
      </group>
      
    </group>
         
  )
}

useGLTF.preload('/pythonLogo.gltf')

const PythonCanvas=()=>{
  return(
    <div className='h-[250px] w-full'>
        <Canvas 
        camera={{
          zoom:1, 
          position:[-4,3,6]}}>

      <ambientLight intensity={0.5}/>
      <pointLight intensity={5}/>
      <pointLight position={[35,35,0]} intensity={5}/>
      <pointLight position={[-35,35,0]} intensity={5}/>

      <Suspense fallback={null}>
      <OrbitControls
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      />
      <PythonLogo/>
      </Suspense>
    </Canvas>
    </div>
  
  )
}

export default PythonCanvas
