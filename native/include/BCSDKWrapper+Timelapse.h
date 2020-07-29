#ifndef _BCSDK_WRAPPER_TIMELAPSE_H_
#define _BCSDK_WRAPPER_TIMELAPSE_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"

/* timelapse config
 *
 * callback with E_BC_CMD_GET_TIMELAPSE_CFG, E_BC_CMD_SET_TIMELAPSE_CFG
 */
int _BCSDK_ BCSDK_RemoteGetTimelapseCfg(H_BC_DEVICE hDevice, int channel);
int _BCSDK_ BCSDK_RemoteSetTimelapseCfg(H_BC_DEVICE hDevice,
                                        int channel,
                                        BC_TIMELAPSE_CFG_LIST *timelapseCfg);

        
/* search timelapse tasks
 *
 * callback with E_BC_CMD_TIMELAPSE_TASK_SEARCH
 */
int _BCSDK_ BCSDK_TimelapseTasksSearch(H_BC_DEVICE hDevice,
                                       int channel,
                                       const char *uid/*for NAS*/);


/* search timelapse date, only for jpeg task
 *
 * callback with E_BC_CMD_TIMELAPSE_DATE_SEARCH
 */
int _BCSDK_ BCSDK_TimelapseDateSearch(H_BC_DEVICE hDevice,
                                      int channel,
                                      const char *uid/*for NAS*/,
                                      BC_TIMELAPSE_TASK_DES *task);


/* search timelapse files
 *
 * callback with E_BC_CMD_TIMELAPSE_MP4_SEARCH_OPEN
 */
int _BCSDK_ BCSDK_TimelapseMP4Search(H_BC_DEVICE hDevice,
                                     int channel,
                                     const char *uid/*for NAS*/,
                                     const char *taskid,
                                     BC_TIME start,
                                     BC_TIME end,
                                     int seq);

/* search timelapse files
 *
 * callback with E_BC_CMD_TIMELAPSE_JPG_SEARCH_OPEN
 *
 * this fuction will callback search handle
 */
int _BCSDK_ BCSDK_TimelapseJPGSearchOpen(H_BC_DEVICE hDevice,
                                         int channel,
                                         const char *uid/*for NAS*/,
                                         const char *taskid,
                                         BC_TIME start,
                                         BC_TIME end,
                                         int seq);

/* search timelapse files
 *
 * callback with E_BC_CMD_TIMELAPSE_JPG_SEARCH_ONCE
 */
int _BCSDK_ BCSDK_TimelapseJPGSearchOnce(H_BC_DEVICE hDevice,
                                         int channel,
                                         const char *uid/*for NAS*/,
                                         const char *taskid,
                                         int searchHandle,
                                         int fromIndex,
                                         int seq);

/* search timelapse files
 *
 * callback with E_BC_CMD_TIMELAPSE_JPG_SEARCH_CLOSE
 */
int _BCSDK_ BCSDK_TimelapseJPGSearchClose(H_BC_DEVICE hDevice,
                                          int channel,
                                          const char *uid/*for NAS*/,
                                          int searchHandle);


/* timelapse file download
 *
 * callback with E_BC_CMD_TIMELAPSE_DOWNLOAD, E_BC_CMD_TIMELAPSE_DOWNLOAD_PROGRESS, E_BC_CMD_TIMELAPSE_DOWNLOAD_STOP
 */
int _BCSDK_ BCSDK_GetTimelapseIsDownloading(H_BC_DEVICE hDevice, bool *download);

int _BCSDK_ BCSDK_StartDownloadTimelapse(H_BC_DEVICE hDevice,
                                         BC_TIMELAPSE_TASK_TYPE_E taskType,
                                         BC_TIMELAPSE_FILE_INFO *file,
                                         const char *dstFile);

int _BCSDK_ BCSDK_StopDownloadTimelapse(H_BC_DEVICE hDevice);



/* covers get
 *
 * callback with E_BC_CMD_TIMELAPSE_FILE_COVER
 */
int _BCSDK_ BCSDK_TimelapseGetMp4Cover(H_BC_DEVICE hDevice, BC_GET_TIMELAPSE_COVER_CFG *cfg);



/* timelapse task/file delete
 *
 * callback with E_BC_CMD_TIMELAPSE_TASK_DELETE, E_BC_CMD_TIMELAPSE_FIlE_DELETE
 */

int _BCSDK_ BCSDK_TimelapseTaskDelete(H_BC_DEVICE hDevice, BC_TIMELAPSE_TASK_DELETE_PARAM *task);
int _BCSDK_ BCSDK_TimelapseFileDelete(H_BC_DEVICE hDevice, BC_TIMELAPSE_FILES_DELETE_PARAM *files);




#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_TIMELAPSE_H_ */
