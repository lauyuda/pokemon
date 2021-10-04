import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from "three"

import PokemonMap from "../../assets/textures/pokemonmap.png"
import PokemonCloudMap from "../../assets/textures/cloudmap.jpg"
import { TextureLoader } from 'three'

export function Globe() {
    const [pokemonMap, cloudsMap] = useLoader(TextureLoader, [PokemonMap, PokemonCloudMap])

    const earthRef = useRef()
    const cloudsRef = useRef()

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapsedTime / 6
        cloudsRef.current.rotation.y = elapsedTime / 6
    })

    return (
        <>
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={0.8} />
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[2.41, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.3}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef}>
                <sphereGeometry args={[2.4, 32, 32]} />
                <meshStandardMaterial map={pokemonMap} roughness={0.4} />
            </mesh>
        </>
    )
}