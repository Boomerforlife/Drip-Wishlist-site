Take this element as the reference which we need in the hero section, 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Particles Swarm Export</title>
    <style>body { margin: 0; overflow: hidden; background: #000; }</style>
    <script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
        }
    }
    </script>
</head>
<body>
    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // CONFIG
        const COUNT = 20000;
        const SPEED_MULT = 1;
        const AUTO_SPIN = true;

        // SETUP
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.01);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.set(0, 0, 100);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = AUTO_SPIN;
        controls.autoRotateSpeed = 2.0;

        // POST PROCESSING
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.strength = 1.8; bloomPass.radius = 0.4; bloomPass.threshold = 0;
        composer.addPass(bloomPass);

        // SWARM OBJECTS
        const dummy = new THREE.Object3D();
        const color = new THREE.Color();
        const target = new THREE.Vector3();
        const pColor = new THREE.Color(); // Kept for safety, for potential references
        
        // INSTANCED MESH
        const geometry = new THREE.TetrahedronGeometry(0.25);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        const instancedMesh = new THREE.InstancedMesh(geometry, material, COUNT);
        instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        scene.add(instancedMesh);

        // DATA ARRAYS
        const positions = [];
        for(let i=0; i<COUNT; i++) {
            positions.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
            instancedMesh.setColorAt(i, color.setHex(0x00ff88)); // Init Color
        }

        // CONTROL STUBS
        const PARAMS = {"arms":4,"swirl":0.35,"radius":60,"thickness":4,"core":1.5,"twinkle":2};
        const addControl = (id, label, min, max, val) => {
            return PARAMS[id] !== undefined ? PARAMS[id] : val;
        };
        const setInfo = () => {};
        const annotate = () => {};

        // ANIMATION LOOP
        const clock = new THREE.Clock();
        
        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            const time = clock.getElapsedTime() * SPEED_MULT;
            
            // Shader Time Update
            if(material.uniforms && material.uniforms.uTime) {
                material.uniforms.uTime.value = time;
            }

            controls.update();

            // SWARM LOGIC
            const count = COUNT; // Alias for user code compatibility
            for(let i=0; i<COUNT; i++) {
                 // USER CODE INJECTION START
                 const armCount = addControl("arms", "Spiral Arms", 2, 8, 4);
                 const swirl = addControl("swirl", "Rotation Speed", 0, 2, 0.35);
                 const galaxyR = addControl("radius", "Galaxy Radius", 20, 120, 60);
                 const thickness = addControl("thickness", "Disk Thickness", 0.5, 20, 4);
                 const coreGlow = addControl("core", "Core Brightness", 0, 3, 1.5);
                 const twinkle = addControl("twinkle", "Star Twinkle", 0, 5, 2);
                 
                 const safeCount = count > 1 ? count : 2;
                 const fi = i / safeCount;
                 
                 const armIndex = i % Math.max(1, Math.floor(armCount));
                 const armAngleOffset = (armIndex / armCount) * Math.PI * 2;
                 
                 const dist = Math.pow(fi, 0.5) * galaxyR + 0.001;
                 const spin = dist * 0.05 + time * swirl;
                 const angle = armAngleOffset + spin;
                 
                 const scatter = Math.sin(i * 12.9898) * 43758.5453;
                 const scatterFrac = scatter - Math.floor(scatter);
                 const jitter = (scatterFrac - 0.5) * 6;
                 
                 const yWave = Math.sin(dist * 0.15 - time * 0.4 + armIndex) * thickness * (1 - fi * 0.7);
                 
                 target.set(
                   Math.cos(angle) * dist + jitter,
                   yWave + jitter * 0.3,
                   Math.sin(angle) * dist + jitter
                 );
                 
                 const coreFactor = 1.0 - Math.min(dist / galaxyR, 1.0);
                 const flicker = 0.5 + 0.5 * Math.sin(time * twinkle + i * 0.37);
                 const hue = 0.58 - coreFactor * 0.4 + fi * 0.05;
                 const lightness = 0.35 + coreFactor * coreGlow * 0.25 + flicker * 0.15;
                 
                 color.setHSL(hue < 0 ? hue + 1 : hue, 0.75, Math.min(lightness, 0.95));
                 
                 if (i === 0) {
                   setInfo("Spiral Galaxy", "A rotating star field with glowing core and sweeping spiral arms.");
                   annotate("core", new THREE.Vector3(0, 0, 0), "Galactic Core");
                 }
                 // USER CODE INJECTION END

                 // LERP & UPDATE
                 positions[i].lerp(target, 0.1);
                 dummy.position.copy(positions[i]);
                 dummy.updateMatrix();
                 instancedMesh.setMatrixAt(i, dummy.matrix);
                 instancedMesh.setColorAt(i, color); // Fix: Use 'color' which user modifies
            }
            instancedMesh.instanceMatrix.needsUpdate = true;
            instancedMesh.instanceColor.needsUpdate = true;

            composer.render();
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>