


function sync_shadows() {
  const on = $('#is_shadows').prop('checked')
  if (lights.keyLight) lights.keyLight.castShadow = on
}

function set_shadows(root, cast, receive) {
  root.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = cast
      obj.receiveShadow = receive
    }
  })
}


/*
**/
function setup_light(scene) {
  lights.ambientLight = new THREE.AmbientLight( 0xffffff, 0.6 )
  scene.add( lights.ambientLight )

  lights.hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 1.2 )
  lights.hemiLight.position.set( 0, 20, 0 )
  scene.add( lights.hemiLight )

  lights.keyLight = new THREE.DirectionalLight( 0xffffff, 2.5 )
  lights.keyLight.position.set( 5, 10, 7 )
  lights.keyLight.castShadow = true
  lights.keyLight.shadow.mapSize.set( 2048, 2048 )
  lights.keyLight.shadow.camera.near = 0.5
  lights.keyLight.shadow.camera.far = 40
  lights.keyLight.shadow.camera.left = -10
  lights.keyLight.shadow.camera.right = 10
  lights.keyLight.shadow.camera.top = 10
  lights.keyLight.shadow.camera.bottom = -10
  lights.keyLight.shadow.bias = -0.0001
  scene.add( lights.keyLight )

  lights.fillLight = new THREE.DirectionalLight( 0xffffff, 1.2 )
  lights.fillLight.position.set( -5, 4, -2 )
  scene.add( lights.fillLight )

  lights.rimLight = new THREE.DirectionalLight( 0xffffff, 0.8 )
  lights.rimLight.position.set( 0, 6, -8 )
  scene.add( lights.rimLight )

  restoreLightControls()
  syncLightsFromControls()
}