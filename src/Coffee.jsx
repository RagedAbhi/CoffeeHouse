/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 coffee.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/coffee.glb')
  return (
    <group {...props} dispose={null} scale={0.5} position={[0, -2, 0]}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.002']} scale={4} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.004']} scale={4} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.003']} scale={4} />
      <group position={[0.331, 0.922, -1.346]} scale={0.921}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.008']} position={[-0.435, 3.946, 0.572]} scale={1.106}>
          <mesh geometry={nodes.Circle001.geometry} material={materials['Material.008']} />
        </mesh>
        <mesh geometry={nodes.Plane003.geometry} material={materials['Material.004']} position={[-3.1, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.004']} position={[-2.031, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text001.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane012.geometry} material={materials['Material.004']} position={[-0.963, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text002.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.004']} position={[0.105, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text003.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane014.geometry} material={materials['Material.004']} position={[1.173, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text004.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane015.geometry} material={materials['Material.004']} position={[2.242, 4.418, 3.212]} rotation={[Math.PI / 2, 0, 0]} scale={0.922}>
          <mesh geometry={nodes.Text005.geometry} material={materials['Material.006']} position={[0, -0.097, 0]} />
        </mesh>
        <mesh geometry={nodes.Plane005.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane006.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane007.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.010']} scale={4} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.010']} scale={4} />
      <group position={[-2.893, 0.838, 3.395]} scale={0.778}>
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials['Material.007']} />
      </group>
      {/* <mesh geometry={nodes.Plane016.geometry} material={materials['Material.001']} scale={47.896} /> */}
      <mesh geometry={nodes.Plane017.geometry} material={materials['Material.004']} position={[0.331, 0.922, -1.346]} scale={0.921} />
    </group>
  )
}

useGLTF.preload('/coffee.glb')
