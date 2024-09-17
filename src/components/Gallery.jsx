import React, { useEffect, useRef } from 'react';
// import { render } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import VirtualScroll from 'virtual-scroll'  

// const vertexShader = `
//     varying vec2 vUv;
//     void main() {
//         vUv = uv;
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
// `;

// const fragmentShader = `
//     varying vec2 vUv;
//     uniform vec3 uColor;
//     void main() {
//         gl_FragColor = vec4(uColor, 1.0);
//     }
// `;

function App() {
    const mountRef = useRef(null);
    const scrollSpeed = 0.01;
    let cubeMesh = null;
    let planeMesh = null;
    let sphereMesh = null;


    useEffect(() => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.shadowMap.enabled = true;
      renderer.setSize(window.innerWidth, window.innerHeight);
      // renderer.setClearColor(0xFFFFFF);
      const textureLoader = new THREE.TextureLoader();
      // scene.background = textureLoader.load(aroones);
      mountRef.current.appendChild(renderer.domElement);

      const orbits = new OrbitControls(camera, renderer.domElement);

      const axesHelper = new THREE.AxesHelper(10);
      scene.add(axesHelper);

      // Position the camera
      camera.position.set(-10,30,30);
      orbits.update();

      

      const cubeGeometry = new THREE.BoxGeometry(4,4,4);
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 }); // White color
      cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cubeMesh.position.set(0,0,0); // Position the cube
      scene.add(cubeMesh);
      
      const PlaneGeometry = new THREE.PlaneGeometry(30,30);
      const PlaneMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xFFFFFF,
        side: THREE.DoubleSide  
      });
      planeMesh = new THREE.Mesh(PlaneGeometry, PlaneMaterial);
      planeMesh.position.y =-4;
      scene.add(planeMesh);
      planeMesh.rotation.x = -0.5 * Math.PI;
      planeMesh.receiveShadow = true


      const sphereGeometry = new THREE.SphereGeometry(4,50,50);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x0000FF,
        wireframe: false,
      });
      sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphereMesh.position.set(7,0,0);
      scene.add(sphereMesh);
      sphereMesh.castShadow = true;

      const gridHelper = new THREE.GridHelper(30);
      scene.add(gridHelper);

      const ambientLight = new THREE.AmbientLight(0x333333);
      scene.add(ambientLight); 

      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
      scene.add(directionalLight);
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.top = 12;
      
      const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
      scene.add(directionalLightHelper);
      directionalLight.position.set(-8,50,0);

      const DirectionalLightShadowhelper = new THREE.CameraHelper(directionalLight.shadow.camera);
      scene.add(DirectionalLightShadowhelper);


      const gui = new dat.GUI();
      const options = {
        sphereColor : '#ffea00',
        wireframe: false,
        bouncespeed: 0.01
      }
      gui.addColor(options, 'sphereColor').onChange(function(e){
        sphereMesh.material.color.set(e);
      });
      gui.add(options, 'wireframe').onChange(function(e){
        sphereMesh.material.wireframe = e;
      });
      gui.add(options, 'bouncespeed', 0, 0.1);

      let step = 0; 
      let speed = 100000;
      const animate = (time) => {
        cubeMesh.rotation.y += time / speed;
        cubeMesh.rotation.x += time / speed;

        step += options.bouncespeed;
        sphereMesh.position.y = 10 * Math.abs(Math.sin(step));
        renderer.render(scene, camera);
      };
      renderer.setAnimationLoop(animate);

      // const scroller = new VirtualScroll();
      // scroller.on(event => {
      //     if (cubeMesh) {
      //       // Rotate the cube based on the scroll position
      //       cubeMesh.rotation.y = event.y * scrollSpeed;
      //       cubeMesh.rotation.x = event.y * scrollSpeed;
      //       planeMesh.position.x = Math.sin(event.y * scrollSpeed) * 10;
      //       planeMesh.position.z = Math.sin(event.y * scrollSpeed) * 1;
      //       planeMesh.lookAt(cubeMesh.position);
      //     }
      //   });
      // Handle resizing
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        mountRef.current.removeChild(renderer.domElement);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return <div ref={mountRef} className='w-screen h-screen m-0 p-0 overscroll-hidden ' />;
}

export default App;
