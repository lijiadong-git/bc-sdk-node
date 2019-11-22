#ifndef _BCSDK_WRAPPER_RECORD_H_
#define _BCSDK_WRAPPER_RECORD_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Record
     ******************************************************************************/
    
    // -------------------------------------------------------------------------------
    // Record Callback
    int _BCSDK_ BCSDK_SetDiskCallbacks(OnDiskStatusCallback diskStatusCallback, void *userData);
    int _BCSDK_ BCSDK_SetRecordCallback(OnRecordStatusCallback recordCallback, void *userData);
    
    
    // -------------------------------------------------------------------------------
    // Record Folder
    int _BCSDK_ BCSDK_SetRecordFolder(const char *tempFolder,
                                      const char *folder,
                                      uint64_t folderMaxSize/*Byte*/,
                                      uint64_t sizeForWarning/*Byte*/);
    
    
    // -------------------------------------------------------------------------------
    // Set Channel Record File Prefixion
    // Default is "DeviceName"CH"ChannelIndex"
    int _BCSDK_ BCSDK_SetRecordFilePrefixion(H_BC_DEVICE hDevice, int channel, const char *prefixion);
    
    
    // -------------------------------------------------------------------------------
    // Local Record Schedule
    int _BCSDK_ BCSDK_SetLocalRecordSchedule(BC_REC_SCHE_TABLE_CFG scheduleTable,
                                             BC_STREAM_TYPE_E streamType,
                                             int fileDuration/*second*/,
                                             int postDuration/*second*/);
    int _BCSDK_ BCSDK_OpenLocalRecordSchedule();
    int _BCSDK_ BCSDK_CloseLocalRecordSchedule();
    
    // -------------------------------------------------------------------------------
    // Device should record with schedule
    // Default is false
    int _BCSDK_ BCSDK_SetDeviceAcceptLocalRecordSchedule(H_BC_DEVICE hDevice, BC_REC_SCHE_DEVICE_CFG acceptCfg);
    
    // -------------------------------------------------------------------------------
    // Recording
    int _BCSDK_ BCSDK_GetIsRecording(H_BC_DEVICE hDevice, int channel, bool *recording);
    
    // -------------------------------------------------------------------------------
    // Manual Record
    int _BCSDK_ BCSDK_GetIsManualRecordOpened(H_BC_DEVICE hDevice, int channel, bool *open);
    int _BCSDK_ BCSDK_OpenManualRecord(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_CloseManualRecord(H_BC_DEVICE hDevice, int channel);
    
    // -------------------------------------------------------------------------------
    // Local Record
    int _BCSDK_ BCSDK_GetLocalRecordState(H_BC_DEVICE hDevice, int channel, BCSDK_RECORD_STATE_E *state);
    
    // -------------------------------------------------------------------------------
    // Live Record (IOS/Android Use)
    int _BCSDK_ BCSDK_StartLiveRecord(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_GetLiveRecordState(H_BC_DEVICE hDevice, int channel, BCSDK_RECORD_STATE_E *state);
    int _BCSDK_ BCSDK_CutLiveRecord(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_StopLiveRecord(H_BC_DEVICE hDevice, int channel);
    
    // -------------------------------------------------------------------------------
    // Playback Record (IOS/Android Use)
    int _BCSDK_ BCSDK_StartPlaybackRecord(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_GetPlaybackRecordState(H_BC_DEVICE hDevice, int channel, BCSDK_RECORD_STATE_E *state);
    int _BCSDK_ BCSDK_CutPlaybackRecord(H_BC_DEVICE hDevice, int channel);
    int _BCSDK_ BCSDK_StopPlaybackRecord(H_BC_DEVICE hDevice, int channel);
    

#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_RECORD_H_ */
