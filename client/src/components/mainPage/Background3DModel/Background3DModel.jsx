import React, { Suspense } from 'react';
import './Background3DModel.scss';
import { Canvas } from '@react-three/fiber';
import Model from '../../models3D/Scene';
import { Stars } from '@react-three/drei';

export default function Background3DModel() {
    return (
        <div className="background3DModel">
            <Canvas className="background3DModel__canvas">
                <spotLight intensity={0.25} position={[0, 0, 1]}/>
                <Stars />
                <Suspense fallback={null}>
                    <Model position={[-80, -90, -150]} rotation={[-Math.PI/16, .5, 0]} />
                </Suspense>
            </Canvas>
        </div>
    )
}
