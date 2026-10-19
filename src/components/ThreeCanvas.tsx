import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  sleepMode?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ sleepMode = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0016);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 42;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dual-colored lighting: Rich Crimson Red (#e11d48) & Deep Dark Blue (#1d4ed8)
    const ambientLight = new THREE.AmbientLight(0x030712, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x2563eb, 4.5, 110);
    blueLight.position.set(-30, 25, 25);
    scene.add(blueLight);

    const redLight = new THREE.PointLight(0xbe123c, 4.8, 110);
    redLight.position.set(30, -25, 25);
    scene.add(redLight);

    // Dynamic Starfield with multi-layer depth
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color('#38bdf8');
    const colorRed = new THREE.Color('#f43f5e');
    const colorGold = new THREE.Color('#fbbf24');
    const colorDim = new THREE.Color('#64748b');

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const x = (Math.random() - 0.5) * 180;
      const y = (Math.random() - 0.5) * 180;
      const z = (Math.random() - 0.5) * 140;

      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      originalPositions[idx] = x;
      originalPositions[idx + 1] = y;
      originalPositions[idx + 2] = z;

      const rand = Math.random();
      const chosenColor = rand < 0.4 ? colorBlue : rand < 0.75 ? colorRed : rand < 0.85 ? colorGold : colorDim;
      colors[idx] = chosenColor.r;
      colors[idx + 1] = chosenColor.g;
      colors[idx + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating 3D Geometric Group
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    // Crystal 1: Wireframe Icosahedron (Crimson)
    const icoGeo = new THREE.IcosahedronGeometry(7.5, 1);
    const wireframeMatRed = new THREE.MeshStandardMaterial({
      color: 0xbe123c,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x881337,
      emissiveIntensity: 0.8,
    });
    const icoMesh = new THREE.Mesh(icoGeo, wireframeMatRed);
    icoMesh.position.set(-24, 14, -8);
    shapesGroup.add(icoMesh);

    // Crystal 2: Wireframe Octahedron (Midnight Blue)
    const octGeo = new THREE.OctahedronGeometry(6.5, 0);
    const wireframeMatBlue = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.9,
    });
    const octMesh = new THREE.Mesh(octGeo, wireframeMatBlue);
    octMesh.position.set(26, -12, -4);
    shapesGroup.add(octMesh);

    // Crystal 3: Dual Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(8, 0.4, 12, 48);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x475569,
      wireframe: true,
      emissive: 0x1e293b,
      emissiveIntensity: 0.5,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.position.set(20, 18, -16);
    shapesGroup.add(ringMesh1);

    // Shooting Star / Meteor Line
    const meteorGeo = new THREE.BufferGeometry();
    const meteorPositions = new Float32Array([0, 0, 0, -8, -8, -8]);
    meteorGeo.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));
    const meteorMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const meteor = new THREE.Line(meteorGeo, meteorMat);
    scene.add(meteor);

    let meteorActive = false;
    let meteorProgress = 0;
    let meteorOrigin = new THREE.Vector3();

    const spawnMeteor = () => {
      meteorOrigin.set(
        (Math.random() - 0.5) * 80 + 20,
        (Math.random() - 0.5) * 40 + 30,
        (Math.random() - 0.5) * 20
      );
      meteor.position.copy(meteorOrigin);
      meteorMat.opacity = 0.9;
      meteorActive = true;
      meteorProgress = 0;
    };

    // Pointer Move handler
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      mousePos.current.targetX = (clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.targetY = -(clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();
    let meteorTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse lerping
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Parallax camera drift
      camera.position.x = mousePos.current.x * 7;
      camera.position.y = mousePos.current.y * 7;
      camera.lookAt(scene.position);

      // Rotate star particles
      particles.rotation.y = elapsedTime * 0.025;
      particles.rotation.x = elapsedTime * 0.012;

      // Rotate crystals
      icoMesh.rotation.x = elapsedTime * 0.28;
      icoMesh.rotation.y = elapsedTime * 0.38;
      icoMesh.position.y = 14 + Math.sin(elapsedTime * 0.9) * 2.2;

      octMesh.rotation.x = -elapsedTime * 0.32;
      octMesh.rotation.z = elapsedTime * 0.28;
      octMesh.position.y = -12 + Math.cos(elapsedTime * 0.85) * 2.5;

      ringMesh1.rotation.x = elapsedTime * 0.25;
      ringMesh1.rotation.y = elapsedTime * 0.2;

      // Dynamic light movements
      blueLight.position.x = -30 + mousePos.current.x * 20;
      blueLight.position.y = 25 + mousePos.current.y * 20;

      redLight.position.x = 30 - mousePos.current.x * 20;
      redLight.position.y = -25 - mousePos.current.y * 20;

      // Periodic Shooting Star / Meteor
      meteorTimer += 0.016;
      if (meteorTimer > 4 && !meteorActive) {
        spawnMeteor();
        meteorTimer = 0;
      }

      if (meteorActive) {
        meteorProgress += 0.04;
        meteor.position.x -= 2.2;
        meteor.position.y -= 1.6;
        meteorMat.opacity = Math.max(0, 1 - meteorProgress);
        if (meteorProgress >= 1) {
          meteorActive = false;
          meteorMat.opacity = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      icoGeo.dispose();
      wireframeMatRed.dispose();
      octGeo.dispose();
      wireframeMatBlue.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      meteorGeo.dispose();
      meteorMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        sleepMode ? 'opacity-25' : 'opacity-85'
      }`}
      aria-hidden="true"
    />
  );
};
