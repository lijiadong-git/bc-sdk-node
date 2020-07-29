#ifndef _BCSDK_WRAPPER_TALK_H_
#define _BCSDK_WRAPPER_TALK_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
/*******************************************************************************
 * MARK: Talk
 ******************************************************************************/

int _BCSDK_ BCSDK_GetAudioTalkState(H_BC_DEVICE hDevice, int channel, BCSDK_TALK_STATE_E *state);

int _BCSDK_ BCSDK_AudioTalkOpen(H_BC_DEVICE hDevice, int channel, BC_TALK_CONFIG *talkConfig);

int _BCSDK_ BCSDK_AudioTalkOpen2(H_BC_DEVICE hDevice, int channel);

int _BCSDK_ BCSDK_AudioTalkSendStream(H_BC_DEVICE hDevice, int channel, BC_TALK_STREAM_DATA *streamData);

int _BCSDK_ BCSDK_AudioTalkClose(H_BC_DEVICE hDevice, int channel);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_TALK_H_ */
