#ifndef _SC_SDK_COMMON_H_
#define _SC_SDK_COMMON_H_

#ifdef _WIN32
#include "stdint_win32.h"
#else 
#include <stdint.h>
#endif

#include "BCNetSDK.h"

typedef int H_BC_DEVICE;                    /*device handle*/
#define H_BC_DEVICE_INVALID                 (-1)/*invalid device handle*/


#ifdef _WIN32
#   ifdef _DLL_
#       define _BCSDK_	__declspec(dllexport)
#   else
#       define _BCSDK_	__declspec(dllimport)
#   endif
#else
#   define _BCSDK_
#endif



#ifdef _WIN32
#   if (_MSC_VER >= 800) || defined(_STDCALL_SUPPORTED)
#       define CALLBACK     __stdcall
#       define WINAPI       __stdcall
#       define WINAPIV      __cdecl
#       define APIENTRY     WINAPI
#       define APIPRIVATE   __stdcall
#       define PASCAL       __stdcall
#   else
#       define CALLBACK
#       define WINAPI
#       define WINAPIV
#       define APIENTRY     WINAPI
#       define APIPRIVATE
#       define PASCAL       pascal
#   endif
#else//_WIN32
#   define CALLBACK         PASCAL
#   define WINAPI           CDECL
#   define WINAPIV          CDECL
#   define APIENTRY         WINAPI
#   define APIPRIVATE       CDECL
#
#   ifdef _68K_
#       define PASCAL      __pascal
#   else
#       define PASCAL
#   endif
#endif//_WIN32


#define SAFE_FREE(ptr) 		if (NULL != ptr) { free(ptr); ptr = NULL; }
#define SAFE_DELETE(ptr) 	if (NULL != ptr) { delete ptr; ptr = NULL;}


#define NET_MAX_SHELTERNUM			4
#define NET_MAX_ALARMOUT    		96
#define NET_MAX_DAYS                7
#define NET_MAX_TIMESEGMENT  		24
#define NET_MAX_CHANNEL_NUM			64
#define NET_MAX_ABILITY_BYTE_NUM    4

#define SDK_MAX_DEVICE_NUM          2048
#define SDK_MAX_NAME_LEN  			32
#define SDK_MAX_PASSWD_LEN  		32
#define SDK_MAX_HOSTNAME_LEN        1024
#define SDK_MAX_NORMAL_STR_LEN      256
#define SDK_MAX_UID_STR_LEN         128
#define SDK_MAX_MAC_STR_LEN         32

#define SDK_MAX_FILENAME_LEN        1024


///////////////
typedef enum {
    
    BCSDK_DEVICE_RF_STATE_UNKNOW = 0,
    BCSDK_DEVICE_RF_STATE_INHOME,
    BCSDK_DEVICE_RF_STATE_OUTHOME,
	BCSDK_DEVICE_RF_STATE_SLEEP,
	BCSDK_DEVICE_RF_STATE_DISARM,
    
} BCSDK_DEVICE_RF_STATE_E;


typedef enum {
    
    BCSDK_RECORD_STATE_CLOSED = 0,
    BCSDK_RECORD_STATE_OPENED,      // Opened but no file
    BCSDK_RECORD_STATE_STARTED,     // file has exist
    
} BCSDK_RECORD_STATE_E;


typedef enum {
    
    BCSDK_DEVICE_STATE_NOTREADY = 0,
    BCSDK_DEVICE_STATE_OPENING,
    BCSDK_DEVICE_STATE_OPENSUCCESS,
    BCSDK_DEVICE_STATE_OPENFAILED,
    BCSDK_DEVICE_STATE_OPENTIMEOUT,
    BCSDK_DEVICE_STATE_NOTONLINE,
    BCSDK_DEVICE_STATE_PASSWORDERROR,
    BCSDK_DEVICE_STATE_CLOSING,
    BCSDK_DEVICE_STATE_CLOSED,
    BCSDK_DEVICE_STATE_ABANDON
    
} BCSDK_DEVICE_STATE_E;


typedef enum {
    
    BCSDK_CONFIG_STATE_NOTREADY = 0,
    
    BCSDK_CONFIG_STATE_WAITING,
    BCSDK_CONFIG_STATE_SUCCESS,
    BCSDK_CONFIG_STATE_FAILED,
    BCSDK_CONFIG_STATE_TIMEOUT,
    
} BCSDK_CONFIG_STATE_E;


typedef enum {
   
    BCSDK_MEDIA_STATE_NONE = 0,
    BCSDK_MEDIA_STATE_OPENED,
    BCSDK_MEDIA_STATE_STARTED,
    BCSDK_MEDIA_STATE_PAUSED,
    BCSDK_MEDIA_STATE_CLOSED
    
} BCSDK_MEDIA_STATE_E;


typedef enum {
    
    BCSDK_TALK_STATE_NOTREADY = 0,
    
    BCSDK_TALK_STATE_OPENING,
    BCSDK_TALK_STATE_OPENSUCCESS,
    BCSDK_TALK_STATE_OPENFAILED,
    BCSDK_TALK_STATE_OPENTIMEOUT,
    BCSDK_TALK_STATE_CLOSED,
    
} BCSDK_TALK_STATE_E;

typedef enum {
    
    BCSDK_WARNINIG_DISK_ENOUGH = 0,
    BCSDK_WARNINIG_DISK_NOT_ENOUGH,
    BCSDK_WARNINIG_NO_WRITE_PERMISSION,
    BCSDK_WARNINIG_CREATE_FOLDER_FAILED,

} BCSDK_WARNINIG_E;

typedef enum {
    
    BCSDK_NET_TYPE_NONE = 0,
    BCSDK_NET_TYPE_ETHER,
    BCSDK_NET_TYPE_WIFI,
    BCSDK_NET_TYPE_3G4G,
    
} BCSDK_NET_TYPE_E;

typedef enum {
    
    BCSDK_REC_EVENT_NEW = 0,
    BCSDK_REC_EVENT_DELETE,
    BCSDK_REC_EVENT_CREATE,
    BCSDK_REC_EVENT_START,
    BCSDK_REC_EVENT_STOP
    
} BCSDK_REC_EVENT_E;


typedef enum {
    FS_MOD_IDX_MANUAL,
    FS_MOD_IDX_SCHED,
    FS_MOD_IDX_MD,
    FS_MOD_IDX_IO,
    FS_MOD_IDX_PEOPLE,
    FS_MOD_IDX_FACE,
    FS_MOD_IDX_VEHICLE,
} FS_MOD_E;

#define MODE(idx) (1<<(idx))

#define FS_MOD_MANUAL 	MODE(FS_MOD_IDX_MANUAL)
#define FS_MOD_SCHED  	MODE(FS_MOD_IDX_SCHED)
#define FS_MOD_MD 		MODE(FS_MOD_IDX_MD)
#define FS_MOD_IO 		MODE(FS_MOD_IDX_IO)
#define FS_MOD_PEOPLE   MODE(FS_MOD_IDX_PEOPLE)
#define FS_MOD_FACE     MODE(FS_MOD_IDX_FACE)
#define FS_MOD_VEHICLE  MODE(FS_MOD_IDX_VEHICLE)


///////////////


// Error Code define
#define E_NONE              0
#define E_UND               -1
#define E_OOM               -100
#define E_TYPE_UNKNOWN      -101
#define E_NULL_POINTER      -102
#define E_WRONG_STATE       -103
#define E_NOT_FOUND         -104
#define E_WRONG_FORMAT      -105
#define E_UNSUPPORTED       -106
#define E_OOR               -107
#define E_EOS               -108
#define E_ILLEGAL           -109
#define E_INIT_FAIL         -110
#define E_ALLOC_FAIL        -111
#define E_REPEAT            -112
#define E_BUSY              -113
#define E_NOT_READY         -114
#define E_NOT_ENOUGH        -115
#define E_LOGIN_FAIL        -200
#define E_AUTH_FAIL         -201
#define E_TASK_EXIST        -202
#define E_NETIO_FAIL        -203
#define E_CONN_FAIL         -204
#define E_SEND_FAIL         -205
#define E_RECV_FAIL         -206
#define E_INVALID           -207
#define E_OP_TIMEOUT        -208
#define E_FD_ERROR          -209

// media frame type define
#define MEDIA_FRAME_TYPE_VIDEO          (1 << 0) 
#define MEDIA_FRAME_TYPE_KEY            (1 << 1) 
#define MEDIA_FRAME_TYPE_FAST           (1 << 2) 
#define MEDIA_FRAME_TYPE_AUDIO          (1 << 3) 
#define MEDIA_FRAME_TYPE_AUDIO_AAC      (1 << 4) 
#define MEDIA_FRAME_TYPE_GPS            (1 << 5) 
#define MEDIA_FRAME_TYPE_HDR            (1 << 6) 
#define MEDIA_FRAME_TYPE_TAIL           (1 << 7) 
#define MEDIA_FRAME_TYPE_DATA           (1 << 8) 
#define MEDIA_FRAME_TYPE_NSTR           (1 << 9) 
#define MEDIA_FRAME_TYPE_EOS            (1 << 10)
#define MEDIA_FRAME_TYPE_INDEX          (1 << 11)


#pragma pack(1)
typedef struct {
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t score;
} BC_AI_AREA;
#pragma pack()


typedef struct {
    uint16_t length;
    BC_AI_AREA areas[BC_MAX_AI_AREA_LEN];
} BC_AI_DATA;



/// video frame description
typedef enum {
    /**
     * I420: YYYYYYYY UU VV     =>YUV420P
     * YV12: YYYYYYYY VV UU     =>YUV420P
     * NV12: YYYYYYYY UVUV      =>YUV420SP
     * NV21: YYYYYYYY VUVU      =>YUV420SP
     */
    BC_YUV_FORMAT_I420, /* 3 planes, YYYY/UU/VV */
    BC_YUV_FORMAT_YV12, /* 3 planes, YYYY/VV/UU */
    BC_YUV_FORMAT_NV12, /* 2 planes, YYYY/UVUV */
    BC_YUV_FORMAT_NV21, /* 2 planes, YYYY/VUVU */
} BC_YUV_FORMAT_E;

typedef struct {
    uint8_t*  address;              // plane base address of the picture
    uint32_t  width;                // The plane width of pixel
    uint32_t  height;               // The plane height of pixel
    uint32_t  stride;               // Luma plane stride in pixel
} RENDER_VIDEO_PLANE_DESC;

typedef struct {
    BC_YUV_FORMAT_E format;
    uint32_t        width;              // The width of output picture in pixel
    uint32_t        height;             // The height of output picture in pixel
    uint32_t        frameRate;          // Render frameRate
    RENDER_VIDEO_PLANE_DESC plane[3];   // YUV plane of the picture
    BC_AI_DATA      faceSet;
    BC_AI_DATA      peopleSet;
    BC_AI_DATA      vehicleSet;
} RENDER_VIDEO_FRAME_DESC;

typedef struct {
    
    uint32_t  width;
    uint32_t  height;
    
    uint32_t  frameRate;
    
} DATA_VIDEO_FRAME_DESC;

/// audio frame description
typedef struct {
    
    uint8_t         *media;
    uint32_t        length;
    
    //
    uint8_t         hasAAC;     
    uint32_t        sampleRate; 
    uint8_t         profile;    
    uint8_t         channels;
    
} RENDER_AUDIO_FRAME_DESC;

typedef struct {
    
    uint8_t         hasAAC;
    uint32_t        sampleRate;
    uint8_t         profile;
    uint8_t         channels;
    
} DATA_AUDIO_FRAME_DESC;

/// callback data frame description
typedef struct {
    
    int                         version;
    
    uint32_t                    type;
    uint64_t                    pts;
    uint64_t                    delay;/*ms*/
    
    RENDER_VIDEO_FRAME_DESC     video;
    RENDER_AUDIO_FRAME_DESC     audio;
    
} RENDER_FRAME_DESC;


/// callback data frame description
typedef struct {
    
    int                         version;
    
    uint32_t                    type;
    uint32_t                    length;
    uint8_t                     *media;
    uint64_t                    pts;
    
    DATA_VIDEO_FRAME_DESC       videoInfo;
    DATA_AUDIO_FRAME_DESC       audioInfo;
    
} DATA_FRAME_DESC;


/// sdk internal
typedef void (*OnSDKRenderFrameCallback)(RENDER_FRAME_DESC *frameDesc, void *userData);
typedef void (*OnSDKDataFrameCallback)(DATA_FRAME_DESC *frameDesc, void *userData);


/// device location description
typedef struct {
    char                name[SDK_MAX_NORMAL_STR_LEN];
    char                ip[SDK_MAX_NORMAL_STR_LEN];
    int                 port;
    char                uid[SDK_MAX_UID_STR_LEN];
    char                mac[SDK_MAX_MAC_STR_LEN];
    BC_DEVICE_TYPE_E    eDVRType;
    int                 iChanNum;
    
    int                 isSongDevice;
} DEVICE_LOCATION_DESC;


/// device state description
typedef struct {
    BCSDK_DEVICE_STATE_E eStateFrom;
    BCSDK_DEVICE_STATE_E eStateTo;
} DEVICE_STATE_CHANGE_DESC;


/// disk warning description
typedef struct {
    
    BCSDK_WARNINIG_E    warning;
    const char          *description;
    char                folder[SDK_MAX_FILENAME_LEN];
    uint64_t            folderFreeSize;
    uint64_t            diskFreeSize;

} BC_DISK_WARNINIG_DESC;


/// record file callback description
typedef struct {
    
    H_BC_DEVICE         hDevice;
    int                 channel;
    //
    BCSDK_REC_EVENT_E   event;
    const char          *description;
    char                file[SDK_MAX_FILENAME_LEN];
    
} BC_REC_EVENT_DESC;


/// device search callback function
typedef void (CALLBACK*OnDeviceFoundCallback)(DEVICE_LOCATION_DESC *locationDesc, void *userData);
/// record state callback function
typedef void (CALLBACK*OnRecordStatusCallback)(BC_REC_EVENT_DESC *desc, void *userData);
/// disk state callback function
typedef void (CALLBACK*OnDiskStatusCallback)(BC_DISK_WARNINIG_DESC *desc, void *userData);
/// device state callback function
typedef void (CALLBACK*OnDeviceStatusCallback)(H_BC_DEVICE hDevice, BC_CMD_DATA cmdData, void *userData);
/// render frame callback function
typedef void (CALLBACK*OnRenderFrameCallback)(H_BC_DEVICE hDevice, int channel, RENDER_FRAME_DESC *frameDesc, void *userData);
/// data frame callback function
typedef void (CALLBACK*OnDataFrameCallback)(H_BC_DEVICE hDevice, int channel, DATA_FRAME_DESC *frameDesc, void *userData);


/// device login properties description
typedef struct {
    
    char            name[SDK_MAX_NORMAL_STR_LEN];
    
    int             port;
    int             uidPort;
    char            host[SDK_MAX_HOSTNAME_LEN];
    char            uid[SDK_MAX_UID_STR_LEN];
    char            username[SDK_MAX_NAME_LEN];
    char            password[SDK_MAX_PASSWD_LEN];
    
} DEVICE_LOGIN_DESC;


typedef struct
{
    bool isBattery;
    bool qrCode;
    BC_SONG_P2P_TYPE_E type;
} DEVICE_ABILITY_ABOUT;


/// device callback description
typedef struct {
    
    OnDeviceStatusCallback  func;
    void                    *userData;
    
} DEVICE_CALLBACK_DESC;


typedef enum {
 
    BC_REC_SCHE_TYPE_NONE   = -1,
    BC_REC_SCHE_TYPE_NORMAL = 0,
    BC_REC_SCHE_TYPE_MD     = 1,
    
} BC_REC_SCHE_TYPE_E;


typedef struct {

    BC_REC_SCHE_TYPE_E  iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
    
} BC_REC_SCHE_TABLE_CFG;


typedef struct {
    // acceptance of the local record schedule
    bool bAccept[BC_MAX_CHANNEL];
} BC_REC_SCHE_DEVICE_CFG;



typedef struct {
    BC_COVER_PRE_INFO info;
    const char * bufferFile;
    OnRenderFrameCallback frameCallback;
    void *userData;
} BC_GET_FILE_COVERS_CFG;


typedef struct {
    BC_COMMON_COVER_INFO info;
    const char * bufferFile;
    OnRenderFrameCallback frameCallback;
    void *userData;
} BC_GET_TIMELAPSE_COVER_CFG;


typedef struct {
    char buf[BC_MAX_XML_SIZE];
} BC_XML_DATA;

#endif//_SC_SDK_COMMON_H_








