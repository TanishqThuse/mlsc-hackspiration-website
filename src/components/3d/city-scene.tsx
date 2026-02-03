"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.cjs"

function Stars(props: any) {
    const ref = useRef<any>(null)
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00E5FF"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

function CameraRig() {
    useFrame((state) => {
        state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
        state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.2
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

function SceneController({ setOpacity }: { setOpacity: (opacity: number) => void }) {
    useFrame(() => {
        const scrollY = window.scrollY
        const viewportHeight = window.innerHeight
        // Fade out starts after 2 screens (Hero + Spacer + Prizes approx)
        const startFade = viewportHeight * 1.5
        const endFade = viewportHeight * 2.5
        const newOpacity = 1 - Math.max(0, Math.min(1, (scrollY - startFade) / (endFade - startFade)))
        setOpacity(newOpacity)
    })
    return null
}

export function CityScene() {
    const [opacity, setOpacity] = useState(1)

    return (
        <div className="fixed inset-0 z-[-2] bg-black/20" style={{ opacity, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <SceneController setOpacity={setOpacity} />
                <CameraRig />
                <Stars />
                <ambientLight intensity={0.5} />
                {/* Cyberpunk Grid */}
                <gridHelper args={[20, 20, 0xff00ff, 0x00E5FF]} position={[0, -0.5, 0]} rotation={[Math.PI / 2.5, 0, 0]} />
            </Canvas>
        </div>
    )
}
