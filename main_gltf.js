import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(1, 1, 1);
camera.lookAt(0, 0, 0);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ELEMENTS: glTF
const loader = new GLTFLoader();

loader.load('assets/fountine.glb', function (glb) {

    scene.add(glb.scene);

}, function (xhr) {

    console.log((xhr.loaded / xhr.total * 100) + "% loaded")

}, function (error) {

    console.error(error);

});

// LIGHT ADDED
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
scene.add(light)

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

animate();