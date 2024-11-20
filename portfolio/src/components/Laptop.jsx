import { Environment, Html, PresentationControls, useGLTF } from '@react-three/drei';
import React, { useState, useCallback } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import ReactPlayer from "react-player";



export default function Laptop() {
    const [laptopPosition, setLaptopPosition] = useState({ "x": -1.6, "y": -0.9, "z": -2.2, "rotation": 0 })

    const gltf = useLoader(GLTFLoader, 'scene.gltf')
    const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");

    // const fitCameraToObject = function ( camera, object, offset, controls ) {

    //     offset = offset || 1.25;
    
    //     const boundingBox = new THREE.Box3();
    
    //     // get bounding box of object - this will be used to setup controls and camera
    //     boundingBox.setFromObject( object );
    
    //     const center = boundingBox.getCenter();
    
    //     const size = boundingBox.getSize();
    
    //     // get the max side of the bounding box (fits to width OR height as needed )
    //     const maxDim = Math.max( size.x, size.y, size.z );
    //     const fov = camera.fov * ( Math.PI / 180 );
    //     let cameraZ = Math.abs( maxDim / 4 * Math.tan( fov * 2 ) );
    
    //     cameraZ *= offset; // zoom out a little so that objects don't fill the screen
    
    //     camera.position.z = cameraZ;
    
    //     const minZ = boundingBox.min.z;
    //     const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;
    
    //     camera.far = cameraToFarEdge * 3;
    //     camera.updateProjectionMatrix();
    
    //     if ( controls ) {
    
    //       // set camera to rotate around center of loaded object
    //       controls.target = center;
    
    //       // prevent camera from zooming out far enough to create far plane cutoff
    //       controls.maxDistance = cameraToFarEdge * 2;
    
    //       controls.saveState();
    
    //     } else {
    
    //         camera.lookAt( center )
    
    //    }
    // }

    const laptopClickHandler = useCallback((event) => {
        event.stopPropagation();
        setLaptopPosition(() => {
            return { "x": -2.65, "y": 0.55, "z": 3.55, "rotation": -0.65 }
        });
        fitCameraToObject( camera, laptop.scene, 1.25, controls);
        
    }, []);

    return (
        <>
            <Environment preset='apartment' background backgroundIntensity={0.3} environmentIntensity={0.9} />

            <PresentationControls polar={[0, 0]} azimuth={[-0.45, 0.7]}>
                <primitive object={gltf.scene} position-y={-0.8} scale={0.4} position-x={0.9} position-z={-0.67} rotation-y={-2.2}>

                    <Html wrapperClass='laptop' distanceFactor={2.1} position={[-1.4, 3.0, 3.0]} transform rotation-y={Math.PI*-1.5} >
                        <iframe origin="https://" title='video' src='https://www.youtube.com/embed/EGcXF0iG-2s?autoplay=1' allow='autoplay; encrypted-media' allowfullscreen />
                        
                    </Html>
                </primitive>
                <primitive onClick={laptopClickHandler} object={laptop.scene} position-y={laptopPosition.y} position-x={laptopPosition.x} position-z={laptopPosition.z} scale={0.4} rotation-y={laptopPosition.rotation} >
                    <Html wrapperClass='laptop' distanceFactor={1.16} position={[0, 1.5, -1.4]} transform rotation-x={-0.25}>
                        <iframe origin="https://" title='resume' src='https://www.mafzal.dev/' />
                    </Html>
                </primitive>
            </PresentationControls>

        </>

    );
}

// Default Laptop positioning position-y={-0.9} position-x={-1.6} position-z={-2.2} scale={0.4}
// clicked Laptop positioning position-y={0.55} position-x={-2.65} position-z={3.55} scale={0.4} rotation-y={-0.65}


// [-1.6, -0.9, -2.2]
// 