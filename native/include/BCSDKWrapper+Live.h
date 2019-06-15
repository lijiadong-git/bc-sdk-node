#ifndef _BCSDK_WRAPPER_LIVE_H_
#define _BCSDK_WRAPPER_LIVE_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Channel
     ******************************************************************************/

    int _BCSDK_ BCSDK_GetIsLiveOpen(H_BC_DEVICE hDevice, int channel, bool *open);
    
    int _BCSDK_ BCSDK_GetLiveStreamType(H_BC_DEVICE hDevice, int channel, BC_STREAM_TYPE_E *type);
    
    int _BCSDK_ BCSDK_LiveOpen(H_BC_DEVICE hDevice,
                               int channel,
                               BC_STREAM_TYPE_E streamType,
                               OnRenderFrameCallback liveFrameCallback,
                               void *userData);
    
    int _BCSDK_ BCSDK_LiveOpen2(H_BC_DEVICE hDevice,
                                int channel,
                                BC_STREAM_TYPE_E streamType,
                                OnDataFrameCallback liveFrameCallback,
                                void *userData);
    
    int _BCSDK_ BCSDK_LiveClose(H_BC_DEVICE hDevice, int channel);
    
    int _BCSDK_ BCSDK_LiveMute(H_BC_DEVICE hDevice, int channel, bool mute);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_LIVE_H_ */
