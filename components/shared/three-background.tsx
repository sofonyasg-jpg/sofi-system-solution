'use client'

import { useEffect, useRef } from 'react'
// @ts-ignore
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    
    // ለደህንነት ሲባል ቀድሞ ያለውን domElement እናጸዳለን
    const currentContainer = containerRef.current
    currentContainer.appendChild(renderer.domElement)

    // Lighting
    const light1 = new THREE.PointLight(0x3f51b5, 1, 30)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x03a9f4, 0.5, 30)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    scene.add(new THREE.AmbientLight(0x404060))

    // Animated Cubes
    const cubes: any[] = [] // TypeScript 'Mesh' ላይ እንዳያስቸግር 'any' ተጠቅመናል
    const colors = [0x3f51b5, 0x1a237e, 0x03a9f4]

    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 0.5 + 0.2
      const color = colors[Math.floor(Math.random() * 3)]
      
      const material = new THREE.MeshPhongMaterial({ 
        color, 
        emissive: 0x112233, 
        transparent: true, 
        opacity: 0.6 + Math.random() * 0.3 
      })

      const cube = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material)
      
      cube.position.set(
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 15 - 5
      )
      
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      
      scene.add(cube)
      cubes.push(cube)
    }

    let frame: number
    const animate = () => {
      frame = requestAnimationFrame(animate)
      cubes.forEach(cube => { 
        cube.rotation.x += 0.001
        cube.rotation.y += 0.002 
      })
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      
      cubes.forEach(cube => { 
        cube.geometry.dispose()
        cube.material.dispose() 
      })
      
      renderer.dispose()
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />
}