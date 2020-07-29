#ifndef _BCSDK_WRAPPER_SERACH_H_
#define _BCSDK_WRAPPER_SERACH_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    
/*******************************************************************************
 * MARK: Search
 ******************************************************************************/

int _BCSDK_ BCSDK_AddSearchCallback(OnDeviceFoundCallback searchCallback, void *userData);
int _BCSDK_ BCSDK_RemoveSearchCallback(OnDeviceFoundCallback searchCallback, void *userData);

/* start device search loop with loop time
 *
 * @param time              [2,10]
 *
 * @return                  E_NONE, success
 *                          E_ILLEGAL, time is out of [2,10]
 */
int _BCSDK_ BCSDK_StartDeviceSearchLoop(int time);

/* stop device search loop
 *
 */
int _BCSDK_ BCSDK_StopDeviceSearchLoop();

/* start device search once immediately
 *
 * @return                  E_NONE, success
 *                          E_UND, failed
 */
int _BCSDK_ BCSDK_DeviceSearchOnce();

/* start Song P2P device search once immediately
 *
 * @return                  E_NONE, success
 *                          E_UND, failed
 */
int _BCSDK_ BCSDK_SongP2PDeviceSearchOnce();
    
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_SERACH_H_ */
