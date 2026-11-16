
/*
**/
function point_camera_at_face(_camera, _head) {
  let _faceTarget = new THREE.Vector3()
  const _leftEye  = new THREE.Vector3()
  const _rightEye = new THREE.Vector3()
  _head.objectLeftEye.getWorldPosition(_leftEye)
  _head.objectRightEye.getWorldPosition(_rightEye)
  _faceTarget.copy(_leftEye).add(_rightEye).multiplyScalar(0.5)

  const _camPos = new THREE.Vector3(0, 0, 2)
  _camPos.applyQuaternion(_head.armature.quaternion)
  _camPos.add(_faceTarget)

  _camera.position.copy(_camPos)
  _camera.lookAt(_faceTarget)

  return _faceTarget
}


/*
**/
function put_feet_at_origin(_head) {
  // Put feet at the origin
  _head.armature.updateMatrixWorld(true)
  const leftToe = new THREE.Vector3()
  const rightToe = new THREE.Vector3()
  _head.objectLeftToeBase.getWorldPosition(leftToe)
  _head.objectRightToeBase.getWorldPosition(rightToe)
  _head.armature.position.set(
    -(leftToe.x + rightToe.x) / 2,
    -Math.min(leftToe.y, rightToe.y),
    -(leftToe.z + rightToe.z) / 2
  )
  _head.armature.updateMatrixWorld(true)
}
