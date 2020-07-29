#ifndef _BCSDK_WRAPPER_DEVICE_H_
#define _BCSDK_WRAPPER_DEVICE_H_

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>    
#include "BCSDKCommon.h"
    
/*******************************************************************************
*
* MARK: SDK init
*
******************************************************************************/

/* sdk open
 *
 * this method must be called before add devies
 *
 * @param bexcept_server_cn     except p2p server in china
 *        bexcept_server_ru     except p2p server in russia
 *
 */
int _BCSDK_ BCSDK_Open(int bexcept_server_cn, int bexcept_server_ru);




/*******************************************************************************
 *
 * MARK: Device Manager
 *
 ******************************************************************************/


/* add an device
 *
 * @param error             E_NONE, success
 *                          E_ILLEGAL, repeat
 *
 * @return                  if failed H_BC_DEVICE_INVALID will be return
 *                          if repeated the repeated device handle will be return
 */
H_BC_DEVICE _BCSDK_ BCSDK_AddDevice(DEVICE_LOGIN_DESC       *login,
                                    DEVICE_CALLBACK_DESC    *callback,
                                    int                     *error);


/* modify an device
 *
 * @param error             E_NONE, success
 *                          E_NOT_FOUND, error handle
 *                          E_ILLEGAL, repeat
 *
 * @return                  if failed H_BC_DEVICE_INVALID will be returned
 *                          if success an new H_BC_DEVICE will be returned
 *                          if repeated the repeated device handle will be returned
 */
H_BC_DEVICE _BCSDK_ BCSDK_ModifyDevice(H_BC_DEVICE              hDevice,
                                       DEVICE_LOGIN_DESC        *login,
                                       DEVICE_CALLBACK_DESC     *callback,
                                       int                      *error);

/* remove an device
 *
 * @return                 E_NONE, success
 *                          E_NOT_FOUND, error handle
 */
int _BCSDK_ BCSDK_RemoveDevice(H_BC_DEVICE hDevice);


/* remove all devices
 *
 * @return                 E_NONE, success
 */
int _BCSDK_ BCSDK_RemoveAllDevices();


// ------------------------------------------------------------------------
// get device
int _BCSDK_ BCSDK_GetDeviceCount();
H_BC_DEVICE _BCSDK_ BCSDK_GetDevice(int index);





/******************************************************************************
 *
 * MARK: Device login about
 *
 ******************************************************************************/


/* set whether sdk is running in background
 *
 * if in background, all devices will be logout
 * and all the devices will not login
 */
int _BCSDK_ BCSDK_SetIsInBackground(bool background);


/* set network type to sdk
 *
 * if BCSDK_NET_TYPE_NONE is set, all devices will be logout
 * if Net type change to BCSDK_NET_TYPE_WIFI/BCSDK_NET_TYPE_3G4G
 * all devices will logout and relogin
 *
 * @param type              BCSDK_NET_TYPE_NONE (devices will logout and will not auto login)
 *                          BCSDK_NET_TYPE_ETHER
 *                          BCSDK_NET_TYPE_WIFI Default
 *                          BCSDK_NET_TYPE_3G4G
 */

int _BCSDK_ BCSDK_SetNetworkType(BCSDK_NET_TYPE_E type);


/* set device need auto open
 */
int _BCSDK_ BCSDK_SetDeviceNeedAutoOpen(H_BC_DEVICE hDevice, bool needAutoOpen);


/* set device max reconnect count
 * @param type              -1 (defalt) (device will always reconnect)
 */
int _BCSDK_ BCSDK_SetDeviceMaxReconnectCount(H_BC_DEVICE hDevice, int count);


/* start device auto login loop time
 *
 * this method will help bcsdk to manager devices's auto login
 *
 * callback with E_BC_CMD_LOGIN, E_BC_CMD_GET_ABILITY, E_BC_CMD_CONNECTION_STATE_CHANGE
 *
 * @param time              [10,30]
 *
 * @return                  E_NONE, success
 *                          E_ILLEGAL, time is out of [10,30]
 */
int _BCSDK_ BCSDK_StartDevicesAutoOpen(int time);

/* stop device auto login
 *
 * all devices will be logout
 * you should call this method when the application will terminate
 *
 * @return                  E_NONE, success
 */
int _BCSDK_ BCSDK_StopDevicesAutoOpen(bool logout);

/* login device once immediately
 *
 * callback with E_BC_CMD_LOGIN, E_BC_CMD_GET_ABILITY, E_BC_CMD_CONNECTION_STATE_CHANGE
 *
 * @param async             true, asynchronous, maybe device's state has not been changed when return
 *                          false, synchronous, it will wait for device open return, (timeout 20s)
 */
int _BCSDK_ BCSDK_DeviceForceOpen(H_BC_DEVICE hDevice, bool async);

/* logout device immediately
 *
 * if auto open is started, the device will open latter
 *
 * callback with E_BC_CMD_LOGIN, E_BC_CMD_GET_ABILITY, E_BC_CMD_CONNECTION_STATE_CHANGE
 *
 * @param async             true, asynchronous, maybe device's state is not changed when return
 *                          false, synchronous, it will wait for device close return
 */
int _BCSDK_ BCSDK_DeviceForceClose(H_BC_DEVICE hDevice, bool async);





/******************************************************************************
 *
 * MARK: Device properties
 *
 ******************************************************************************/


// device channel count
int _BCSDK_ BCSDK_GetDeviceChannelCount(H_BC_DEVICE hDevice, int *count);

// device basic properties
int _BCSDK_ BCSDK_GetDeviceLoginMessage(H_BC_DEVICE hDevice, DEVICE_LOGIN_DESC *login);

// device properties
int _BCSDK_ BCSDK_GetDeviceState(H_BC_DEVICE hDevice, BCSDK_DEVICE_STATE_E *state);


// ------------------------------------------------------------------------
// device extension
int _BCSDK_ BCSDK_SetDeviceExtension(H_BC_DEVICE hDevice, void *extension);
int _BCSDK_ BCSDK_GetDeviceExtension(H_BC_DEVICE hDevice, void **extension);




/******************************************************************************
 *
 * MARK: Device protocol data
 *
 ******************************************************************************/

int _BCSDK_ BCSDK_GetDeviceInfoXML(H_BC_DEVICE hDevice, BC_XML_DATA *data);
int _BCSDK_ BCSDK_GetDeviceAbilityXML(H_BC_DEVICE hDevice, BC_XML_DATA *data);
int _BCSDK_ BCSDK_GetDeviceSupportXML(H_BC_DEVICE hDevice, BC_XML_DATA *data);
int _BCSDK_ BCSDK_GetDeviceEncProfileXML(H_BC_DEVICE hDevice, BC_XML_DATA *data);


#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_WRAPPER_DEVICE_H_ */
