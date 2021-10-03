import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three"

import PokemonMap from "../../assets/textures/pokemonmap.png"
import PokemonCloudMap from "../../assets/textures/cloudmap.jpg"
import { TextureLoader } from 'three'

export function Earth(props) {
    const [pokemonMap, cloudsMap] = useLoader(TextureLoader, [PokemonMap, PokemonCloudMap])

    const earthRef = useRef()
    const cloudsRef = useRef()

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapsedTime / 12
        cloudsRef.current.rotation.y = elapsedTime / 12
    })

    return (
        <>
            <ambientLight intensity={0.05} />
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={0.8} />
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[2.41, 32, 32]} position={[0, 0, 3]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.3}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}

                />
            </mesh>
            <mesh ref={earthRef}>
                <sphereGeometry args={[2.4, 32, 32]} position={[0, 0, 3]} />
                <meshStandardMaterial map={pokemonMap} metalness={0.2} roughness={0.4} />
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.5}
                    panSpeed={0.5}
                    rotateSpeed={0.5}
                />
            </mesh>
        </>
    )
}