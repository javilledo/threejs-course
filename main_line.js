import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ELEMENTS: LINE
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

// ADD ELEMENTS TO SCENE
scene.add(line);

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

if (WebGL.isWebGLAvailable()) {

    animate();

} else {

    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}