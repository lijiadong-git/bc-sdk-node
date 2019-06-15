#ifndef _BCSDK_WRAPPER_PLAYBACK_H_
#define _BCSDK_WRAPPER_PLAYBACK_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Channel
     ******************************************************************************/
    
    // ------------------------------------------------------------------------------------------------------------
    // playback
    int _BCSDK_ BCSDK_RecordFilesSearch(H_BC_DEVICE hDevice, int channel, const char *uid/*for NAS*/, BC_TIME start, BC_TIME end, RECORD_TYPE type, BC_STREAM_TYPE_E streamType, int seq);
    int _BCSDK_ BCSDK_AlarmVideosSearch(H_BC_DEVICE hDevice, int channel, BC_TIME start, BC_TIME end, BC_STREAM_TYPE_E streamType, int seq);
    
    int _BCSDK_ BCSDK_PlaybackSeek(H_BC_DEVICE hDevice, BC_TIME *to);
    
    int _BCSDK_ BCSDK_GetPlaybackState(H_BC_DEVICE hDevice, int channel, BCSDK_MEDIA_STATE_E *state);
    
    int _BCSDK_ BCSDK_GetIsPlaybackOpen(H_BC_DEVICE hDevice, int channel, bool *open);
    
    int _BCSDK_ BCSDK_GetPlaybackStreamType(H_BC_DEVICE hDevice, int channel, BC_STREAM_TYPE_E *type);
    
    int _BCSDK_ BCSDK_PlaybackOpen(H_BC_DEVICE hDevice,
                                   int channel,
                                   const char *uid,//for NAS
                                   const char *fileNam,
                                   const char *cacheFile,
                                   bool subStream,
                                   float speedMultiple,
                                   OnRenderFrameCallback playbackFrameCallback,
                                   void *userData);
    int _BCSDK_ BCSDK_PlaybackOpen2(H_BC_DEVICE hDevice,
                                   int channel,
                                   const char *uid,//for NAS
                                   const char *fileNam,
                                   const char *cacheFile,
                                   bool subStream,
                                   float speedMultiple,
                                   OnDataFrameCallback playbackFrameCallback,
                                   void *userData);
    int _BCSDK_ BCSDK_PlaybackClose(H_BC_DEVICE hDevice, int channel);
   
    int _BCSDK_ BCSDK_PlaybackStart(H_BC_DEVICE hDevice, int channel);
    
    int _BCSDK_ BCSDK_PlaybackPause(H_BC_DEVICE hDevice, int channel);
    
    int _BCSDK_ BCSDK_PlaybackStop(H_BC_DEVICE hDevice, int channel);
    
    int _BCSDK_ BCSDK_PlaybackStep(H_BC_DEVICE hDevice, int channel);
    
    int _BCSDK_ BCSDK_PlaybackMute(H_BC_DEVICE hDevice, int channel, bool mute);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_H_ */
