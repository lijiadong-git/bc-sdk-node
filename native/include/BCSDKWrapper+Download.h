#ifndef _BCSDK_WRAPPER_DOWNLOAD_H_
#define _BCSDK_WRAPPER_DOWNLOAD_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Download
     ******************************************************************************/
    
    int _BCSDK_ BCSDK_GetIsDownloading(H_BC_DEVICE hDevice, bool *download);
    
    int _BCSDK_ BCSDK_StartDownloadFile(H_BC_DEVICE hDevice,
                                        const char *uid,//for NAS
                                        const char *fileName,
                                        bool subStream,
                                        BC_FILE_TYPE_E type,
                                        const char *tempFolder,
                                        const char *dstFile);
    
    int _BCSDK_ BCSDK_StartDownloadByTime(H_BC_DEVICE hDevice,
                                          int channel,
                                          const char *uid,//for NAS
                                          BC_TIME startTime,
                                          BC_TIME endTime,
                                          bool subStream,
                                          const char *tempFolder,
                                          const char *dstFile);
    
    int _BCSDK_ BCSDK_StopDownload(H_BC_DEVICE hDevice, const char **file);
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_DOWNLOAD_H_ */
