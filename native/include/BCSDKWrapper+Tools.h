#ifndef _BCSDK_WRAPPER_TOOL_H_
#define _BCSDK_WRAPPER_TOOL_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"

    
    // -------------------------------------------------------------------------------
    // total bitrate
    int _BCSDK_ BCSDK_GetTotalBitrates(long long *bitrate);
    
    void _BCSDK_ BCSDK_ReInitP2p();

    int _BCSDK_ BCSDK_GetP2PType(const char *uid, BC_P2P_TYPE_E *type);
    int _BCSDK_ BCSDK_GetSongP2PType(const char *uid, BC_SONG_P2P_TYPE_E *type);
    int _BCSDK_ BCSDK_GetSongDeviceInfo(const char *uid, BC_P2P_DEVICE_INFO *info);
    int _BCSDK_ BCSDK_SongP2PQuery();
    int _BCSDK_ BCSDK_SongP2PGetDebug(BC_P2P_DEBUG_INFO *pInfo);
    
    int _BCSDK_ BCSDK_XCUID2SongUID(const char *uid, BC_P2P_UID_INFO *info);
    
    int _BCSDK_ BCSDK_SongP2PGetDetail(BC_P2P_DETAIL_INFO *detailInfo);
    
    int _BCSDK_ BCSDK_GetDiagnoseLogs(BC_DIAGNOSE_LOGS_LIST *logsList);
    
    int _BCSDK_ BCSDK_Encrypt(BC_CRYPT_BUF *buf);
    int _BCSDK_ BCSDK_Decrypt(BC_CRYPT_BUF *buf);
    
    int _BCSDK_ BCSDK_SetSpeakerVolume(int volume);
    int _BCSDK_ BCSDK_GetSpeakerVolume(int *volume);

    int _BCSDK_ BCSDK_GetDiskFreeSize(const char *path, unsigned long long *size);

    int _BCSDK_ BCSDK_GetHasWritePermission(const char *path, bool *has);

    int _BCSDK_ BCSDK_SaveYUVToDisk(const char *path,
                                    int width,
                                    int height,
                                    BC_YUV_FORMAT_E format,
                                    RENDER_VIDEO_PLANE_DESC *plane0,
                                    RENDER_VIDEO_PLANE_DESC *plane1,
                                    RENDER_VIDEO_PLANE_DESC *plane2);
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_TOOL_H_ */
