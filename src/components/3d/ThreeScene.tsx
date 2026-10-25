"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. Gyroscope Reactor System
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Outer Gyro Ring 1 (Radiant Beam Glow & Titanium)
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.02, 16, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xDBECFE,
      metalness: 0.9,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat1);
    masterGroup.add(ring1);

    // Mid Gyro Ring 2 (Orthogonal counter-rotation)
    const ring2Geo = new THREE.TorusGeometry(2.35, 0.025, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xCBD5E1,
      metalness: 0.85,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ringMat2);
    ring2.rotation.x = Math.PI / 2.5;
    masterGroup.add(ring2);

    // Inner Gyro Ring 3 (Equatorial Polar Steel)
    const ring3Geo = new THREE.TorusGeometry(1.95, 0.02, 16, 100);
    const ringMat3 = new THREE.MeshStandardMaterial({
      color: 0x7892A9,
      metalness: 0.95,
      roughness: 0.1,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ringMat3);
    ring3.rotation.y = Math.PI / 3;
    masterGroup.add(ring3);

    // Central Monolithic Prismatic Core (Deep Petrol)
    const coreGeo = new THREE.DodecahedronGeometry(1.15, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x081319,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // Core Wireframe Cage Overlay for Technical Detail
    const coreWireGeo = new THREE.WireframeGeometry(coreGeo);
    const coreWireMat = new THREE.LineBasicMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 0.4,
    });
    const coreWireMesh = new THREE.LineSegments(coreWireGeo, coreWireMat);
    masterGroup.add(coreWireMesh);

    // Ambient floating stardust field
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xDBECFE,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Cinematic Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keyLight.position.set(6, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x6B8C9D, 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.35);
    scene.add(ambientLight);

    // 4. Smooth Mouse Interaction with Spring Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width - 0.5) * 1.5;
      mouseY = ((event.clientY - rect.top) / height - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 5. Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 6. Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth lag-free spring damping
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      masterGroup.rotation.y = targetX * 0.6;
      masterGroup.rotation.x = -targetY * 0.5;

      // Independent rotational velocities (Gyroscope feel)
      ring1.rotation.z += 0.003;
      ring1.rotation.x += 0.0015;

      ring2.rotation.y -= 0.004;
      ring2.rotation.z += 0.002;

      ring3.rotation.x += 0.0035;
      ring3.rotation.y += 0.0025;

      coreMesh.rotation.y += 0.002;
      coreMesh.rotation.x += 0.001;
      coreWireMesh.rotation.copy(coreMesh.rotation);

      particles.rotation.y += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      ring1Geo.dispose();
      ring2Geo.dispose();
      ring3Geo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
    />
  );
}
