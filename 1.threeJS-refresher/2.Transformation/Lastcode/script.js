// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

//Group
const group = new THREE.Group();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 1
// mesh.position.y = 1;
// mesh.position.z = 1;
// mesh.scale.x = 2
// mesh.scale.y = 3;
// mesh.rotation.x = Math.PI * 0.25  ==> 1/8 Turn
// mesh.rotation.x = Math.PI * 1.2;
mesh.position.z = 1;

//MeshTwo
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;

//adding the two meshes inside the Group Class
group.add(mesh, meshT);
group.position.x = 3;
scene.add(group);

//AxesHelper
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, and far value is 2000
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size
renderer.render(scene, camera); //display what the camera in the scene captured
