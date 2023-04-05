import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Canvas, extend, useThree } from '@react-three/fiber'

import Floor from '@/components/Floor'
import Box from '@/components/Box'
import LightBulb from '@/components/Lightbulb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const inter = Inter({ subsets: ['latin'] })
function Controls() {
	const controls = useRef()
	const { camera, gl } = useThree()
	useFrame(() => controls.current.update())
	return (
		<orbitControls
			ref={controls}
			args={[camera, gl.domElement]}
			enableDamping
			dampingFactor={0.1}
			rotateSpeed={0.5}
		/>
	)
}
export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [-6, 7, 7],
				}}
			>
				<Floor position={[0, -1, 0]} />
				<LightBulb position={[0, 3, 0]} />
				<Box rotateX={3} rotateY={0.2} />
				<Controls />
				<ambientLight color={'white'} intensity={0.3} />
			</Canvas>
		</div>
	)
}