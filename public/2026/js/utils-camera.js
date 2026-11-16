
function cut_to(key) {
  const radio = document.querySelector(`input[name=camera][value="${key}"]`)
  if (radio) radio.checked = true
  setActiveCamera(key, true)
}

function move_camera(config) {
  const fromKey = String(config.from)
  const toKey = String(config.to)
  const duration = Number(config.duration) > 0 ? Number(config.duration) : CAMERA_BLEND_MS
  const src = cameras_fn(fromKey)
  const dest = cameras_fn(toKey)
  const startTarget = (cameraTargets[fromKey] || cameraTargets.wide).clone()
  const destTarget = (cameraTargets[toKey] || cameraTargets.wide).clone()

  persistCameraControl(toKey)
  const radio = document.querySelector(`input[name=camera][value="${toKey}"]`)
  if (radio) radio.checked = true

  ;[camera_wide, camera_1, camera_2, camera_3, camera].forEach((cam) => {
    if (cam) {
      cam.aspect = width / height
      cam.updateProjectionMatrix()
    }
  })

  src.updateMatrixWorld()
  dest.updateMatrixWorld()

  camera.position.copy(src.position)
  camera.quaternion.copy(src.quaternion)
  camera.fov = src.fov
  camera.near = dest.near
  camera.far = dest.far
  camera.updateProjectionMatrix()
  faceTarget.copy(startTarget)
  if (controls) {
    controls.target.copy(startTarget)
    controls.enabled = false
  }

  cameraTransition = {
    startPos: src.position.clone(),
    startQuat: src.quaternion.clone(),
    startFov: src.fov,
    startTarget: startTarget,
    endPos: dest.position.clone(),
    endQuat: dest.quaternion.clone(),
    endFov: dest.fov,
    endTarget: destTarget,
    elapsed: 0,
    duration: duration,
  }
}
