#ifndef _BCSDK_WRAPPER_PTZ_H_
#define _BCSDK_WRAPPER_PTZ_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    // ------------------------------------------------------------------------
    // PTZ  Speed: 1 - 64
    
    //
    int _BCSDK_ BCSDK_PTZStop(H_BC_DEVICE hDevice, int channel);
    
    //
    int _BCSDK_ BCSDK_PTZUp(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZDown(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZLeft(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZRight(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZUpLeft(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZUpRight(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZDownLeft(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZDownRight(H_BC_DEVICE hDevice, int channel, int speed);
    
    // zoom
    int _BCSDK_ BCSDK_PTZZoomIn(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZZoomOut(H_BC_DEVICE hDevice, int channel, int speed);
    
    // focus
    int _BCSDK_ BCSDK_PTZFocusFar(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZFocusNear(H_BC_DEVICE hDevice, int channel, int speed);
    
    // iris
    int _BCSDK_ BCSDK_PTZIrisOpen(H_BC_DEVICE hDevice, int channel, int speed);
    
    int _BCSDK_ BCSDK_PTZIrisClose(H_BC_DEVICE hDevice, int channel, int speed);
    
    // auto
    int _BCSDK_ BCSDK_PTZScanAuto(H_BC_DEVICE hDevice, int channel, int speed);
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_PTZ_H_ */
