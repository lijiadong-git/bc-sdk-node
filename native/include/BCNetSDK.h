/************************************************************
 Copyright (C), 2010-2020, BaiChuan. Co., Ltd.
 
 FileName: BCNetSDK.h
 
 Author: lzk,ylsong
 
 Description: SDK for NVR,DVR,IPC and pc
 
 Version: 2.0
 
 History:
 <author>        <time>        <version >        <desc>
 ylsong          2010-08-15    1.0               first create
 lzk,ylsong      2013-09-16    2.0
 ***********************************************************/

#ifndef __BCNETSDK_H__
#define __BCNETSDK_H__

//#include <list>
//using namespace std;

#define BC_SDK_API extern "C" __declspec(dllexport)

#ifndef _WIN32
#include <stdint.h>
//typedef uint64_t ULONGLONG;
#endif

#define BC_USER_NUM                        32
#define BC_PORT_STR_LEN                    10
#define BC_MAX_NAME_LEN                    32
#define BC_MAX_PWD_LEN                     32
#define BC_SERIALNO_LEN                    32
#define BC_MACADDR_LEN                     6
#define BC_MAX_ADDR_LEN                    128
#define BC_MAX_NICKNAME_LEN                128
#define BC_TYPE_INFO_LEN                   32
#define BC_BUILD_INFO_LEN                  32
#define BC_VERSION_INFO_LEN                32
#define BC_DETAIL_INFO_LEN                 32
#define BC_MAX_ALARMOUT                    96
#define BC_MAX_ALARMIN                     64
#define BC_MAX_CHANNEL                     32
#define BC_MAX_RF_NUM_V20                  64
#define BC_MAX_DISKNUM                     64
#define BC_MAX_ENC_PROFILE_NUM             32

#define BC_LOG_INFO_LEN             4096
#define BC_MAX_FRAME_SIZE           1000000
#define BC_MAX_CONFIG_BUF_SIZE      50000

#define BC_MAX_DAYS             7
#define BC_MAX_TIMESEGMENT      24
#define BC_MAX_COVER_AREA_NUM   4
#define BC_MAX_MOTION_SENS_NUM  4
#define BC_MAX_FRAME_RATE_NUM   25
#define BC_MAX_BIT_RATE_NUM     16
#define BC_MAX_UID_LEN          32

#define BC_MAX_DDNS_NUM         10
#define BC_MAX_IPFILTER_NUM     64
#define BC_MAX_FILE_LEN         256
#define BC_MAX_RESOLUTION_NUM   32
#define BC_MAX_DWELL_NUM        16
#define BC_MAX_AUTHORITY_NUM    32

#define BC_MAX_POS_NUM          64
#define BC_MAX_KEY_POS          16
#define BC_MAX_CRUISE_NUM       6
#define BC_MAX_TRACK_NUM        1
#define BC_MAX_TRACK_SIZE       128

#define BC_WIFI_UDID_MAX_NUM    128

#define MAX_UINT32_NUM          4294967295lu
#define MAX_INT32_NUM           2147483647l


#define BC_MODE(idx) (1<<(idx))

#define ROUND_TO_8(x) (((x) + 7) / 8 * 8)


#define       CFG_PERM_REC_CFG                		 1
#define		  CFG_PERM_UNIVERSAL_CFG 			(CFG_PERM_REC_CFG<<1)
#define       CFG_PERM_CHN_CFG                 	(CFG_PERM_REC_CFG<<2)
#define       CFG_PERM_NET_CFG                 	(CFG_PERM_REC_CFG<<3)
#define       CFG_PERM_PTZ_CFG                 	(CFG_PERM_REC_CFG<<4)
#define       CFG_PERM_ALARM_CFG               	(CFG_PERM_REC_CFG<<5)
#define		  CFG_PERM_PREVIEW_CFG				(CFG_PERM_REC_CFG<<6)
#define       CFG_PERM_EXCEPT_CFG                	(CFG_PERM_REC_CFG<<7)
#define       CFG_PERM_USER_CFG                	(CFG_PERM_REC_CFG<<8)
#define       CFG_PERM_WIZARD_CFG                (CFG_PERM_REC_CFG<<9)
#define		  CFG_PERM_FTP_CFG				  		(CFG_PERM_REC_CFG<<10)
#define       CFG_PERM_SYSTEM_CFG         		(CFG_PERM_REC_CFG<<11)
#define       CFG_PERM_ISP_CFG        				(CFG_PERM_REC_CFG<<12)

/**/
#define	OP_PERM_LIVE 		1
#define	OP_PERM_MAN_REC 	(OP_PERM_LIVE<<1)
#define	OP_PERM_PLAYBACK 	(OP_PERM_LIVE<<2)
#define	OP_PERM_PTZ 		(OP_PERM_LIVE<<3)
#define	OP_PERM_BACKUP 		(OP_PERM_LIVE<<4)
#define	OP_PERM_MAN_ALARM 	(OP_PERM_LIVE<<5)

//
#define	OP_PERM_VER_UPGRADE (OP_PERM_LIVE<<6)
#define	OP_PERM_CFG_OP 		(OP_PERM_LIVE<<7)
#define	OP_PERM_DEFAULT_CFG (OP_PERM_LIVE<<8)
#define	OP_PERM_LOG_QUERY 	(OP_PERM_LIVE<<9)
#define	OP_PERM_SYS_INFO 	(OP_PERM_LIVE<<10)
#define	OP_PERM_HD_MGR 		(OP_PERM_LIVE<<11)
#define	OP_PERM_POWEROFF 	(OP_PERM_LIVE<<12)

#define OP_USE_PWD_LOGIN	(OP_PERM_LIVE<<13)




/*------------------------SDK return code------------------------*/

typedef enum
{
    E_BC_CMD_GET_OSD                        = 2001,
    E_BC_CMD_SET_OSD                        = 2002,
    E_BC_CMD_GET_COLOR                      = 2003,
    E_BC_CMD_SET_COLOR                      = 2004,
    E_BC_CMD_GET_VILOST                     = 2005,
    E_BC_CMD_SET_VILOST                     = 2006,
    E_BC_CMD_GET_MOTION                     = 2007,
    E_BC_CMD_SET_MOTION                     = 2008,
    E_BC_CMD_GET_BLIND                      = 2009,
    E_BC_CMD_SET_BLIND                      = 2010,
    E_BC_CMD_GET_COVER                      = 2011,
    E_BC_CMD_SET_COVER                      = 2012,
    E_BC_CMD_GET_CAMERA                     = 2013,
    E_BC_CMD_SET_CAMERA                     = 2014,
    E_BC_CMD_GET_DST                        = 2015,
    E_BC_CMD_SET_DST                        = 2016,
    E_BC_CMD_GET_EMAIL                      = 2017,
    E_BC_CMD_SET_EMAIL                      = 2018,
    E_BC_CMD_GET_COMPRESS                   = 2019,
    E_BC_CMD_SET_COMPRESS                   = 2020,
    E_BC_CMD_GET_SYS                        = 2021,
    E_BC_CMD_SET_SYS                        = 2022,
    E_BC_CMD_GET_VERSION                    = 2023,
    E_BC_CMD_GET_ENC_PROFILE                = 2024,
    E_BC_CMD_GET_OUTPUT                     = 2025,
    E_BC_CMD_SET_OUTPUT                     = 2026,
    E_BC_CMD_GET_ADVRECORD                  = 2027,
    E_BC_CMD_SET_ADVRECORD                  = 2028,
    E_BC_CMD_GET_RECORDSCHED                = 2029,
    E_BC_CMD_SET_RECORDSCHED                = 2030,
    E_BC_CMD_GET_LINKTYPE                   = 2033,
    E_BC_CMD_SET_LINKTYPE                   = 2034,
    E_BC_CMD_GET_PPPOECFG                   = 2035,
    E_BC_CMD_SET_PPPOECFG                   = 2036,
    E_BC_CMD_GET_LOCAL                      = 2037,
    E_BC_CMD_SET_LOCAL                      = 2038,
    E_BC_CMD_GET_UPNPSTATE                  = 2039,
    E_BC_CMD_SET_UPNPSTATE                  = 2040,
    E_BC_CMD_GET_NORMAL_PORT                = 2041,
    E_BC_CMD_SET_NORMAL_PORT                = 2042,
    E_BC_CMD_GET_NTPCFG                     = 2043,
    E_BC_CMD_SET_NTPCFG                     = 2044,
    E_BC_CMD_GET_DDNSCFG                    = 2045,
    E_BC_CMD_SET_DDNSCFG                    = 2046,
    E_BC_CMD_GET_IPFILTER                   = 2047,
    E_BC_CMD_SET_IPFILTER                   = 2048,
    E_BC_CMD_GET_HDDFULL_EXPCFG             = 2049,
    E_BC_CMD_SET_HDDFULL_EXPCFG             = 2050,
    E_BC_CMD_GET_HDDERR_EXPCFG              = 2051,
    E_BC_CMD_SET_HDDERR_EXPCFG              = 2052,
    E_BC_CMD_GET_NETDISCONNECT_EXPCFG       = 2053,
    E_BC_CMD_SET_NETDISCONNECT_EXPCFG       = 2054,
    E_BC_CMD_GET_IPCONFLICT_EXPCFG          = 2055,
    E_BC_CMD_SET_IPCONFLICT_EXPCFG          = 2056,
    E_BC_CMD_GET_PTZCFG                     = 2057,
    E_BC_CMD_SET_PTZCFG                     = 2058,
    E_BC_CMD_INIT_HDD                       = 2059,
    E_BC_CMD_GET_HDD_CFG                    = 2060,
    E_BC_CMD_GET_AUTOREBOOT_CFG             = 2061,
    E_BC_CMD_SET_AUTOREBOOT_CFG             = 2062,
    E_BC_CMD_GET_PERFORMANCE                = 2063,
    E_BC_CMD_GET_FTPCFG                     = 2064,
    E_BC_CMD_SET_FTPCFG                     = 2065,
    E_BC_CMD_GET_FTPTASK                    = 2066,
    E_BC_CMD_SET_FTPTASK                    = 2067,
    E_BC_CMD_GET_USERCFG                    = 2068,
    E_BC_CMD_SET_USERCFG                    = 2069,
    E_BC_CMD_GET_USER_ONLINE                = 2070,
    E_BC_CMD_SET_USER_ONLINE                = 2071,
    E_BC_CMD_REPLAY_SEEK_TIME				= 2072,
    E_BC_CMD_GET_WIFI_INFO					= 2073,
    E_BC_CMD_SET_WIFI_INFO					= 2074,
    E_BC_CMD_GET_ALARMINCFG    				= 2075,
    E_BC_CMD_SET_ALARMINCFG                 = 2076,
    E_BC_CMD_GET_ALARMOUTCFG    			= 2077,
    E_BC_CMD_SET_ALARMOUTCFG                = 2078,
    E_BC_CMD_GET_BOOTPWD_STATE              = 2079,
    E_BC_CMD_SET_BOOTPWD_STATE              = 2080,
    E_BC_CMD_GET_VTALARMIN                  = 2081,
    E_BC_CMD_SET_VTALARMIN                  = 2082,
    E_BC_CMD_GET_FDALARMIN                  = 2083,
    E_BC_CMD_SET_FDALARMIN                  = 2084,
    E_BC_CMD_GET_IDALARMIN                  = 2085,
    E_BC_CMD_SET_IDALARMIN                  = 2086,
    E_BC_CMD_LOGIN							= 2087,
    E_BC_CMD_LOGOUT							= 2088,
    E_BC_CMD_REALPLAY						= 2089,
    E_BC_CMD_STOPREALPLAY					= 2090,
    E_BC_CMD_UPGRADE					  	= 2091,
    E_BC_CMD_PLAYBACKBYNAME					= 2092,
    E_BC_CMD_STOPPLAYBACKBYNAME				= 2093,
    E_BC_CMD_PLAYBACKBYTIME					= 2094,
    E_BC_CMD_STOPPLAYBACKBYTIME				= 2095,
    E_BC_CMD_DOWNLOAD					 	= 2096,
    E_BC_CMD_DOWNLOAD_STOP				 	= 2097,
    E_BC_CMD_GETLOG					 		= 2098,
    E_BC_CMD_EXPORT				 			= 2099,
    E_BC_CMD_IMPORT				 			= 2100,
    E_BC_CMD_REBOOT				 			= 2101,
    E_BC_CMD_GET_RECFILEDATE				= 2102,
    E_BC_CMD_RESTORE				  		= 2103,
    E_BC_CMD_EMAILTEST				  		= 2104,
    E_BC_CMD_SHUTDOWN				  		= 2105,
    E_BC_CMD_GET_MANALARM				  	= 2106,
    E_BC_CMD_SET_MANALARM				  	= 2107,
    E_BC_CMD_PTZ_CONTROL                    = 2108,
    E_BC_CMD_PUSH_ADD                       = 2109,
    E_BC_CMD_PUSH_DEL                       = 2110,
    E_BC_CMD_GET_RFSENSOR                   = 2111,
    E_BC_CMD_SET_RFSENSOR                   = 2112,
    E_BC_CMD_SEARCH_RECFILES                = 2113,
    E_BC_CMD_CONNECTION_TEST                = 2114,
    E_BC_CMD_RECONNECT                      = 2115,
    E_BC_CMD_GET_ABILITY				  	= 2116,
    E_BC_CMD_IFRAME_PREVIEW                 = 2117,
    E_BC_CMD_IFRAME_REPLAY                  = 2118,
    E_BC_CMD_CAMERA_STATE                   = 2119,
    E_BC_CMD_GET_ADVANCED_PORTS             = 2120,
    E_BC_CMD_SET_ADVANCED_PORTS             = 2121,
    E_BC_CMD_GET_UID                        = 2122,
    E_BC_CMD_ONLINE_UPDATE                  = 2123,
    E_BC_CMD_FORCE_PASSWORD                 = 2124,
    E_BC_CMD_SET_ABILITY				  	= 2125,
    E_BC_CMD_GET_PRESET                     = 2126,
    E_BC_CMD_SET_PRESET                     = 2127,
    E_BC_CMD_GET_CRUISE                     = 2128,
    E_BC_CMD_SET_CRUISE                     = 2129,
    E_BC_CMD_GET_DEFAULT_CAMERA             = 2130,
    E_BC_CMD_UPGRADE_PROGRESS               = 2131,
    E_BC_CMD_WIFI_TEST                      = 2133,
    E_BC_CMD_FTP_TEST                       = 2134,
    E_BC_CMD_GET_SCAN_AP                    = 2135,
    E_BC_CMD_EXPORT_PROGRESS                = 2136,
    E_BC_CMD_IMPORT_PROGRESS                = 2137,
    E_BC_CMD_LOCAL_RECORD                   = 2138,
    E_BC_CMD_STOP_LOCAL_RECORD              = 2139,
    E_BC_CMD_CONFIG_LIVE                    = 2140,
    E_BC_CMD_STOP_CONFIG_LIVE               = 2141,
    E_BC_CMD_START_ALARM_REPORT             = 2142,
    E_BC_CMD_STOP_ALARM_REPORT              = 2143,
    E_BC_CMD_ALARM_REPORT                   = 2144,
    E_BC_CMD_DOWNLOAD_CUT                   = 2145,
    E_BC_CMD_DOWNLOAD_CUT_STOP              = 2146,
    E_BC_CMD_DOWNLOAD_PROGRESS              = 2147,
    E_BC_CMD_DOWNLOAD_CUT_PROGRESS          = 2148,
    E_BC_CMD_GET_CAMERA_CFG                 = 2149, //get eCameraMode
    E_BC_CMD_SET_CAMERA_CFG                 = 2150, //set eCameraMode
    E_BC_CMD_GET_LED_STATE                  = 2151,
    E_BC_CMD_SET_LED_STATE                  = 2152,
    E_BC_CMD_GET_PTOP_CFG                   = 2153,
    E_BC_CMD_SET_PTOP_CFG                   = 2154,
    E_BC_CMD_TALK_OPEN                      = 2155,
    E_BC_CMD_TALK_CLOSE                     = 2156,
    E_BC_CMD_GET_TALK_ABILITY               = 2157,
    E_BC_CMD_TALK_FDX_STREAM                = 2158,
    E_BC_CMD_SNAP                           = 2159,
    E_BC_CMD_GOTO_PRESET                    = 2160,
    E_BC_CMD_SET_USER_ALL_ABILITY           = 2161,
    E_BC_CMD_GET_WIFI_SIGNAL                = 2162,
    E_BC_CMD_GET_AUTO_UPDATE                = 2163,
    E_BC_CMD_SET_AUTO_UPDATE                = 2164,
    E_BC_CMD_GET_ONLINE_NEW_FIRMWARE        = 2165,
    E_BC_CMD_RTMP_START                     = 2166,
    E_BC_CMD_RTMP_STOP                      = 2167,
    E_BC_CMD_GET_EMAIL_TASK                 = 2168,
    E_BC_CMD_SET_EMAIL_TASK                 = 2169,
    E_BC_CMD_GET_PUSH_TASK                  = 2170,
    E_BC_CMD_SET_PUSH_TASK                  = 2171,
    E_BC_CMD_GET_RF_CFG                     = 2172,
    E_BC_CMD_SET_RF_CFG                     = 2173,
    E_BC_CMD_GET_BATTERY_ELECTRICITY        = 2174,
    E_BC_CMD_SET_RF_ALARM_STATUS            = 2175,
    E_BC_CMD_GET_ONLINE_UPDATE_STATUS       = 2176,
    E_BC_CMD_GET_AUTO_FOCUS                 = 2177,
    E_BC_CMD_SET_AUTO_FOCUS                 = 2178,
    E_BC_CMD_GET_CROP_CFG                   = 2179,
    E_BC_CMD_SET_CROP_CFG                   = 2180,
    E_BC_CMD_CROP_SNAP                      = 2181,
    E_BC_CMD_DEVICE_SLEEP                   = 2182,
    E_BC_CMD_GET_AUDIO_TASK                 = 2183,
    E_BC_CMD_SET_AUDIO_TASK                 = 2184,
    E_BC_CMD_BATTERY_HEARTBEAT_RSP          = 2185,
    /*delete 2186 ~ 2190 cmd*/
    E_BC_CMD_GET_AP_MODE_INFO               = 2191,
    E_BC_CMD_REPORT_DEVICE_EXCEPTION        = 2192,
    E_BC_CMD_BASE_REPORT_ONLINE_DEVICE      = 2193,
    E_BC_CMD_BASE_DELETE_ONLINE_DEVICE      = 2194,
    E_BC_CMD_BASE_GET_RF_CFG                = 2195,
    E_BC_CMD_BASE_SET_RF_CFG                = 2196,
    E_BC_CMD_BASE_GET_WIFI_QRCODE           = 2197,
    E_BC_CMD_BASE_RESPONSE_LIVE_TIME        = 2198,
    E_BC_CMD_BASE_SET_RF_ALARM_STATUS       = 2199,
    E_BC_CMD_REPORT_BATTERY_INFO_LIST       = 2200,
    E_BC_CMD_GET_BATTERY_INFO               = 2201,
    E_BC_CMD_SET_DEVICE_NAME                = 2202,
    E_BC_CMD_SET_ISP_DAY_NIGHT_MODE         = 2203,
    E_BC_CMD_BASE_SET_WIFI_QRCODE           = 2204,
    E_BC_CMD_GET_3G_4G_INFO                 = 2205,
    E_BC_CMD_REPORT_3G_4G_INFO              = 2206,
    E_BC_CMD_GET_SIM_MODULE_INFO            = 2207,
    E_BC_CMD_SET_SIM_MODULE_INFO            = 2208,
    E_BC_CMD_GET_BATTERY_ANALYSIS           = 2209,
    E_BC_CMD_GET_CLOUD_INFO                 = 2210,
    E_BC_CMD_BIND_CLOUD                     = 2211,
    E_BC_CMD_GET_CLOUD_CFG                  = 2212,
    E_BC_CMD_SET_CLOUD_CFG                  = 2213,
    E_BC_CMD_GET_RINGTONE_FILE_INFO         = 2214,
    E_BC_CMD_IMPORT_RINGTONE                = 2215,
    E_BC_CMD_IMPORT_RINGTONE_PROGRESS       = 2216,
    E_BC_CMD_SAVE_RINGTONE                  = 2217,
    E_BC_CMD_MANUAL_RING_DOWN               = 2218,
    E_BC_CMD_GET_RINGTONE_CFG               = 2219,
    E_BC_CMD_SET_RINGTONE_CFG               = 2220,
    E_BC_CMD_MUTE_ALARM_AUDIO               = 2221,
    E_BC_CMD_GET_RINGTONE_ABILITY           = 2222,
    E_BC_CMD_SEARCH_ALARM_VIDEOS            = 2223,
    
    
    // sdk up layer callback use
    E_BC_CMD_CONNECTION_STATE_CHANGE        = 3001,
    E_BC_CMD_LOGIN_INFO_CHANGE              = 3002,
    
    E_BC_CMD_BUTT
} BC_CMD_E;


typedef enum
{
    E_BC_RSP_OK                             = 0,
    E_BC_RSP_NOT_INIT                       = 1,
    E_BC_RSP_HOST_ERR                       = 2,
    E_BC_RSP_USER_LIMIT                     = 3,
    E_BC_RSP_USER_NOT_EXIST                 = 4,
    E_BC_RSP_TIMEOUT                        = 5,
    E_BC_RSP_SEND_ERR                       = 6,
    E_BC_RSP_SESSION_LIMIT                  = 7,
    E_BC_RSP_MALLOC_FAILED                  = 8,
    E_BC_RSP_CREATE_THREAD_FAILED           = 9,
    E_BC_RSP_AUTH_FAILED                    = 10,
    E_BC_RSP_INVALID_SESSIONID              = 11,
    E_BC_RSP_INVALID_HANDLE                 = 12,
    E_BC_RSP_INVALID_CHNID                  = 13,
    E_BC_RSP_INVALID_USERID                 = 14,
    E_BC_RSP_MISS_PARA                      = 15,
    E_BC_RSP_FILE_CHECK_ERR                 = 16,
    E_BC_RSP_FILE_ACCESS_ERR                = 17,
    E_BC_RSP_SYS_BUSY                       = 18,
    E_BC_RSP_SDK_ERR                        = 19,
    E_BC_RSP_PARA_IS_NULL                   = 20,
    E_BC_RSP_CONNECT_FAILED                 = 21,
    E_BC_RSP_OLD_VERSION                    = 1001,      //return code from device begin
    E_BC_RSP_WRITE_FAILED                   = 1002,
    E_BC_RSP_NOT_EXIST                      = 1003,
    E_BC_RSP_TEMPORARILY_UNAVAILABLE        = 1004,
    E_BC_RSP_FILE_NOFIND			        = 1005,
    E_BC_RSP_FILE_NOMOREFILE                = 1006,
    E_BC_RSP_FILE_EXCEPTION		            = 1007,
    E_BC_RSP_CMD_NOT_SUPPORT                = 1008,
    
    E_BC_RSP_CMD_UPGRADE_SAME_VER           = 2001,
    E_BC_RSP_CMD_UPGRADE_CHECK_FAILED       = 2002,
    E_BC_RSP_CMD_UPGRADE_BUSY               = 2003,
    E_BC_RSP_CMD_UPGRADE_OOM                = 2004,
    
    E_BC_RSP_CMD_FTP_TEST_UNKNOWN_FAILED    = 4001,
    E_BC_RSP_CMD_FTP_TEST_LOGIN_FAILED      = 4002,
    E_BC_RSP_CMD_FTP_TEST_CREATE_FAILED     = 4003,
    E_BC_RSP_CMD_FTP_TEST_UPLOAD_FAILED     = 4004,
    
    E_BC_RSP_INVALID                                //The end. Add return code in the above
} BC_RSP_CODE_E;


//
typedef enum {
    E_BC_SWITCH_KEY_PREVIEW_I                   = 1,
    E_BC_SWITCH_KEY_REPLAY_I                    = 2,
    E_BC_SWITCH_KEY_REPLAY_SEEK_I               = 3,
    E_BC_SWITCH_KEY_DOWNLOAD_RSP_I              = 4,
    E_BC_SWITCH_KEY_DOWNLOAD_CUT_RSP_I          = 5,
    E_BC_SWITCH_KEY_ALARM_REPORT                = 6,
    E_BC_SWITCH_KEY_REPORT_DEVICE_EXCEPTION     = 7,
    E_BC_SWITCH_KEY_REPORT_ONLINE_DEVICE        = 8,
    E_BC_SWITCH_KEY_CAMERA_STATE                = 9,
    E_BC_SWITCH_KEY_SNAP                        = 10,
    E_BC_SWITCH_KEY_REPORT_BATTERY_INFO_LIST    = 11,
    E_BC_SWITCH_KEY_REPORT_3G_4G_INFO           = 12,
    
    E_BC_SWITCH_KEY_INVALID             = 255
    
} BC_SWITCH_KEY_VALUE;



typedef enum
{
    BC_PLAYSTART		= 1,
    BC_PLAYSTOP			= 2,
    BC_PLAYPAUSE		= 3,
    BC_PLAYRESTART		= 4,
    BC_PLAYFAST			= 5,
    BC_PLAYSLOW			= 6,
    BC_PLAYNORMAL	    = 7,
    BC_PLAYFRAME	    = 8,
    BC_PLAYSTARTAUDIO	= 9,
    BC_PLAYSTOPAUDIO	= 10,
    BC_PLAYAUDIOVOLUME	= 11,
    BC_PLAYGETTIME	    = 12,
    BC_PLAYGETFRAME	     =13,
    BC_PLAYSETPOS		= 14,
    BC_PLAYGETPOS		= 15,
    BC_GETTOTALTIME		= 16,
    BC_GETTOTALFRAMES	= 17
} BC_LOCAL_PLAYBACK_CMD_E;




typedef enum
{
    PTZ_STOP,
    
    PTZ_LEFT,
    PTZ_RIGHT,
    PTZ_UP,
    PTZ_DOWN,
    
    PTZ_LEFT_UP,
    PTZ_LEFT_DOWN,
    PTZ_RIGHT_UP,
    PTZ_RIGHT_DOWN,
    
    PTZ_IRISDEC,
    PTZ_IRISINC,
    PTZ_ZOOMDEC,
    PTZ_ZOOMINC,
    PTZ_FOCUSDEC,
    PTZ_FOCUSINC,
    
    /*set pos*/
    PTZ_SETPOS,
    PTZ_TOPOS,
    PTZ_DELPOS,
    
    PTZ_AUTO,
    PTZ_HSPEED,
    
    /*cruise*/
    PTZ_STARTCRUISE,
    PTZ_STOPCRUISE,
    PTZ_BEGINSAVECRUISE,
    PTZ_SETCRUISEPOS,
    PTZ_ENDSAVECRUISE,
    PTZ_CLEARCRUISE,
    
    /*track*/
    PTZ_ENABLETRACK,
    PTZ_STARTTRACK,
    PTZ_STOPTRACK,
    PTZ_STARTSAVETRACK,
    PTZ_STOPSAVETRACK,
    PTZ_CLEANTRACK,
    
}PTZ_CMD_E;


typedef enum
{
    E_BC_RESO_D1         = 0,          /*PAL:704*576  NTSC:704*480*/
    E_BC_RESO_HD1         = 1,         /*PAL:704*288  NTSC:704*240*/
    E_BC_RESO_2CIF         = 2,        /*PAL:352*576  NTSC:352*480*/
    E_BC_RESO_CIF         = 3,         /*PAL:352*288  NTSC:352*240*/
    E_BC_RESO_QCIF         = 4,        /*PAL:176*144  NTSC:176*120*/
    
    E_BC_RESO_1024_768     = 5,
    E_BC_RESO_1280_720     = 6,
    E_BC_RESO_1280_800     = 7,
    E_BC_RESO_1280_1024     = 8,
    E_BC_RESO_1366_768     = 9,
    E_BC_RESO_1400_1050     = 10,
    E_BC_RESO_1440_900     = 11,
    E_BC_RESO_1600_900     = 12,
    E_BC_RESO_1600_1200     = 13,
    E_BC_RESO_1680_1050     = 14,
    E_BC_RESO_1920_1080     = 15,
    E_BC_RESO_1920_1200     = 16,
    E_BC_RESO_2048_1152     = 17,
    
    E_BC_RESO_960P         = 18,
    E_BC_RESO_960_540     = 19,
    E_BC_RESO_800_600     = 20,
    E_BC_RESO_640_360     = 21,
    E_BC_RESO_960P_SUB     = 22,
    E_BC_RESO_480_270     = 23,
    E_BC_RESO_480_256     = 24,
    E_BC_RESO_320_180     = 25,
    E_BC_RESO_320_240     = 26,
    E_BC_RESO_854_480     = 27,
    E_BC_RESO_640_480     = 28,
    E_BC_RESO_640_352     = 29,
    E_BC_RESO_2560_1600     = 30,
    E_BC_RESO_1280_960     = 31,
    E_BC_RESO_2048_1536     = 32,
    E_BC_RESO_512_384     = 33,
    E_BC_RESO_2304_1296    = 34,
    E_BC_RESO_1152_648   = 35,
    E_BC_RESO_768_432    = 36,
    E_BC_RESO_2512_1520    = 37,
    E_BC_RESO_1536_1536  = 38,
    E_BC_RESO_1024_576   = 39,
    E_BC_RESO_928_512    = 40,
    E_BC_RESO_2560_1440  = 41,
    E_BC_RESO_896_512     = 42,
    E_BC_RESO_720_416     = 43,
    E_BC_RESO_1280_720_V2   = 44,
    E_BC_RESO_2560_1944  = 45,
    E_BC_RESO_960P_V2    = 46,
    E_BC_RESO_960P_V3    = 47,
    E_BC_RESO_1280_720_v3= 48,
    E_BC_RESO_1920_1080_v2= 49,
    E_BC_RESO_3072_2048  = 50,
    E_BC_RESO_3840_2160   = 51,
    E_BC_RESO_3072_1728   = 52,
    E_BC_RESO_2592_1944   = 53,
    E_BC_RESO_2560_1920   = 54,
    E_BC_RESO_1440_1080   = 55,
    E_BC_RESO_896_672     = 56,
    E_BC_RESO_BUTT
} BC_RESOLUTION_E;


static inline const char* reso2str(BC_RESOLUTION_E reso)
{
    switch(reso)
    {
        case E_BC_RESO_D1:
            return "D1";
            
        case E_BC_RESO_HD1:
            return "HD1";
            
        case E_BC_RESO_2CIF:
            return "2CIF";
            
        case E_BC_RESO_CIF:
            return "CIF";
            
        case E_BC_RESO_QCIF:
            return "QCIF";
            
        case E_BC_RESO_1024_768:
            return "1024*768";
            
        case E_BC_RESO_1280_720:
            return "720P";
            
        case E_BC_RESO_1280_800:
            return "1280*800";
            
        case E_BC_RESO_1280_1024:
            return "1280*1024";
            
        case E_BC_RESO_1366_768:
            return "1366*768";
            
        case E_BC_RESO_1400_1050:
            return "1400*1050";
            
        case E_BC_RESO_1440_900:
            return "1440*900";
            
        case E_BC_RESO_1600_900:
            return "1600*900";
            
        case E_BC_RESO_1600_1200:
            return "1600*1200";
            
        case E_BC_RESO_1680_1050:
            return "1680*1050";
            
        case E_BC_RESO_1920_1080:
            return "1080P";
            
        case E_BC_RESO_1920_1200:
            return "1920*1200";
            
        case E_BC_RESO_2048_1152:
            return "2048*1152";
            
        case E_BC_RESO_960P:
            return "960H";
            
        case E_BC_RESO_960_540:
            return "960*540";
            
        case E_BC_RESO_800_600:
            return "800*600";
            
        case E_BC_RESO_640_360:
            return "640*360";
            
        case E_BC_RESO_960P_SUB:
            return "960P_SUB";
            
        case E_BC_RESO_480_270:
            return "480*270";
            
        case E_BC_RESO_480_256:
            return "480*256";
            
        case E_BC_RESO_320_180:
            return "320*180";
            
        case E_BC_RESO_320_240:
            return "320*240";
            
        case E_BC_RESO_854_480:
            return "854*480";
            
        case E_BC_RESO_640_480:
            return "640*480";
            
        case E_BC_RESO_640_352:
            return "640*352";
            
        case E_BC_RESO_2560_1600:
            return "2560*1600";
            
        case E_BC_RESO_1280_960:
            return "960P";
            
        case E_BC_RESO_2048_1536:
            return "2048*1536";
            
        case E_BC_RESO_512_384:
            return "512*384";
            
        case E_BC_RESO_2304_1296:
            return "2304*1296";
            
        case E_BC_RESO_1152_648:
            return "1152*648";
            
        case E_BC_RESO_768_432:
            return "768*432";
            
        case E_BC_RESO_2512_1520:
            return "2512*1520";
            
        case E_BC_RESO_1536_1536:
            return "1536*1536";
            
        case E_BC_RESO_1024_576:
            return "1024*576";
            
        case E_BC_RESO_928_512:
            return "928*512";
            
        case E_BC_RESO_2560_1440:
            return "2560*1440";
            
        case E_BC_RESO_896_512:
            return "896*512";
            
        case E_BC_RESO_720_416:
            return "720*416";
            
        case E_BC_RESO_1280_720_V2:
            return "1280*720";
            
        case E_BC_RESO_2560_1944:
            return "2560*1944";
            
        case E_BC_RESO_960P_V2:
            return "960P";
            
        case E_BC_RESO_960P_V3:
            return "960P";
            
        case E_BC_RESO_1280_720_v3:
            return "1280*720";
            
        case E_BC_RESO_1920_1080_v2:
            return "1920*1080";
            
        case E_BC_RESO_3072_2048:
            return "3072*2048";
            
        case E_BC_RESO_3840_2160:
            return "3840*2160";
            
        case E_BC_RESO_3072_1728:
            return "3072*1728";
            
        case E_BC_RESO_2592_1944:
            return "2592*1944";
            
        case E_BC_RESO_2560_1920:
            return "2560*1920";
            
        case E_BC_RESO_1440_1080:
            return "1440*1080";
            
        case E_BC_RESO_896_672:
            return "896*672";
            
        default:
            return "";
    }
}


typedef enum
{
    E_BC_TS_PAL = 0,
    E_BC_TS_NTSC,
    E_BC_TS_INVALID
} BC_TVSYSTEM_E;

typedef enum
{
    E_BC_OSD_MDY = 0,
    E_BC_OSD_YMD,
    E_BC_OSD_DMY
} BC_DATE_TYPE_E;

typedef enum
{
    OSD_TIME_24 = 0,
    OSD_TIME_12,
    OSD_TIME_BUTT,
} BC_TIME_FMT_E;

typedef enum
{
    E_BC_OSD_SIZE_16 = 0,
    E_BC_OSD_SIZE_32,
    E_BC_OSD_SIZE_BUTT
} BC_OSD_SIZE_E;

typedef enum
{
    E_BC_LANGUAGE_CHINESE = 0,
    E_BC_LANGUAGE_ENGLISH,
    E_BC_LANGUAGE_JAPANESE,
    E_BC_LANGUAGE_RUSSIAN,
    E_BC_LANGUAGE_ITALIAN,
    E_BC_LANGUAGE_CZECH,
    E_BC_LANGUAGE_ROMANIA,
    E_BC_LANGUAGE_HUNGRARY,
    E_BC_LANGUAGE_FRANCE,
    E_BC_LANGUAGE_SPANISH,
    E_BC_LANGUAGE_PORTUGAL,
    E_BC_LANGUAGE_KOREAN,
    E_BC_LANGUAGE_BIGCHN,
    E_BC_LANGUAGE_POLISH,
    E_BC_LANGUAGE_BULGARIAN,
    E_BC_LANGUAGE_GERMAN,
    E_BC_LANGUAGE_PERSIAN,
    E_BC_LANGUAGE_THAI,
    E_BC_LANGUAGE_BUTT
} BC_LANGUAGE_E;

typedef enum
{
    E_BC_STREAM_MAIN = 0,
    E_BC_STREAM_SUB,
    E_BC_STREAM_MOBILE,
    E_BC_STREAM_EXTERN = 4,
    E_BC_STREAM_BUTT
} BC_STREAM_TYPE_E;

#define INVALID_VALUE 1024

typedef enum
{
    E_RECORD_NORMAL = 0,
    E_RECORD_MOTION = 1,
    E_RECORD_ALARM  = 4,
    E_RECORD_MA     = 5,
    E_RECORD_RF     = 256,
    E_RECORD_NONE   = INVALID_VALUE
}E_RECORD_TYPE_E;


typedef enum
{
    E_BC_PROTOCOL_BC = 0,
    E_BC_PROTOCOL_ONVIF,
    E_BC_PROTOCOL_BUTT
} BC_PROTOCOL_E;


typedef enum
{
    E_BC_DEVICE_TYPE_DVR = 1,
    E_BC_DEVICE_TYPE_IPC = 2,
    E_BC_DEVICE_TYPE_NVR = 3,
    E_BC_DEVICE_TYPE_WIFI_IPC = 4,
    E_BC_DEVICE_TYPE_WIFI_NVR = 5,
    E_BC_DEVICE_TYPE_NXP_IPC = 6,
    E_BC_DEVICE_TYPE_WIFI_SOLO_IPC = 7,
    E_BC_DEVICE_TYPE_BASE = 8,
    E_BC_DEVICE_TYPE_UNKNOW = 126,
    E_BC_DEVICE_TYPE_BUTT = 127
} BC_DEVICE_TYPE_E;

typedef enum
{
    BC_DEVICE_NORM_UNKNOW       = -1,
    BC_DEVICE_NORM_PAL          = 0,
    BC_DEVICE_NORM_NTSC         = 1,

} BC_DEVICE_NORM_E;

typedef enum
{
    E_BC_ENC_TYPE_H264 = 0,
    E_BC_ENC_TYPE_MPEG4,
    E_BC_ENC_TYPE_MPEG2,
    E_BC_ENC_TYPE_BUTT
} BC_ENC_TYPE_E;

typedef enum
{
    E_BC_DAY_NIGHT_MODE_AUTO,
    E_BC_DAY_NIGHT_MODE_DAY,
    E_BC_DAY_NIGHT_MODE_NIGHT,
    E_BC_DAY_NIGHT_MODE_BUTT
} BC_DAY_NIGHT_MODE_E;

typedef enum
{
    E_BC_AWB_SCENC_MODE_AUTO,
    E_BC_AWB_SCENC_MODE_INDOOR,
    E_BC_AWB_SCENC_MODE_OUTDOOR,
    E_BC_AWB_SCENC_MODE_BUTT
} BC_AWB_SCENC_MODE_E;

typedef enum
{
    E_BC_IR_CUT_TYPE_AUTO,
    E_BC_IR_CUT_TYPE_IR,
    E_BC_IR_CUT_TYPE_BUTT
} BC_IR_CUT_TYPE_E;

typedef enum
{
    E_BC_BLC_MODE_CLOSE,       //Close
    E_BC_BLC_MODE_BLC,         //BLC
    E_BC_BLC_MODE_DRC,         //DRC
    E_BC_BLC_BUTT
} BC_BLC_MODE_E;

typedef enum
{
    E_BC_ANTIFLICK_TYPE_UNKOWN,   //Outdoor
    E_BC_ANTIFLICK_TYPE_50HZ,     //50HZ
    E_BC_ANTIFLICK_TYPE_60HZ,     //60HZ
    E_BC_ANTIFLICK_TYPE_DISABLE,  //Disable
    E_BC_ANTIFLICK_TYPE_BUTT
} BC_ANTIFLICK_TYPE_E;

typedef enum
{
    E_BC_EXPOSURE_TYPE_AUTO,         // Auto
    E_BC_EXPOSURE_TYPE_LOWNOISE,     // Low noise
    E_BC_EXPOSURE_TYPE_FRAMERATE,    // Anti-smearing
    E_BC_EXPOSURE_TYPE_MANUAL,       // Manual
    E_BC_EXPOSURE_TYPE_BUTT
} BC_EXPOSURE_TYPE_E;

typedef enum
{
    E_BC_SHUTTER_AJUST_3,            // 1/3 S
    E_BC_SHUTTER_AJUST_4,            // 1/4 S
    E_BC_SHUTTER_AJUST_5,            // 1/5 S
    E_BC_SHUTTER_AJUST_6,            // 1/6 S
    E_BC_SHUTTER_AJUST_8,            // 1/8 S
    E_BC_SHUTTER_AJUST_12,           // 1/12 S
    E_BC_SHUTTER_AJUST_15,           // 1/15 S
    E_BC_SHUTTER_AJUST_25,           // 1/25 S
    E_BC_SHUTTER_AJUST_30,           // 1/30 S
    E_BC_SHUTTER_AJUST_50,           // 1/50 S
    E_BC_SHUTTER_AJUST_60,           // 1/60 S
    E_BC_SHUTTER_AJUST_100,          // 1/100 S
    E_BC_SHUTTER_AJUST_120,          // 1/120 S
    E_BC_SHUTTER_AJUST_250,          // 1/250 S
    E_BC_SHUTTER_AJUST_500,          // 1/500 S
    E_BC_SHUTTER_AJUST_1000,         // 1/1000 S
    E_BC_SHUTTER_AJUST_2000,         // 1/2000 S
    E_BC_SHUTTER_AJUST_4000,         // 1/4000 S
    E_BC_SHUTTER_AJUST_10000,        // 1/10000 S
    E_BC_SHUTTER_AJUST_BUTT
} BC_SHUTTER_AJUST_E;

typedef enum
{
    E_BC_ALARM_IN_MD = 0,
    E_BC_ALARM_IN_VL,
    E_BC_ALARM_IN_IO,
    E_BC_ALARM_IN_BLIND,
    E_BC_ALARM_IN_HDEXP,
    E_BC_ALARM_IN_HDFULL,
    E_BC_ALARM_IN_IPCONFLICT,
    E_BC_ALARM_IN_NETCONNECT,
    E_BC_ALARM_IN_RF,
    E_BC_ALARM_IN_FD,
    E_BC_ALARM_IN_VS,
    E_BC_ALARM_IN_ID,
    E_BC_ALARM_IN_RFSENSO_LOW_POWER,
    E_BC_ALARM_IN_RFSENSO_TAMPER,
    E_BC_ALARM_IN_DONGLE_LOST,
    E_BC_ALARM_IN_BUTT
} BC_ALARM_IN_E;

typedef enum
{
    E_BC_ALARM_OUT_IO = 0,
    E_BC_ALARM_OUT_SNAP,
    E_BC_ALARM_OUT_REC,
    E_BC_ALARM_OUT_LED,
    E_BC_ALARM_OUT_BUZZ,
    E_BC_ALARM_OUT_PTZ,
    E_BC_ALARM_OUT_FTP,
    E_BC_ALARM_OUT_SCREEN,
    E_BC_ALARM_OUT_RFSPEAKER,
    E_BC_ALARM_OUT_PUSH,
    E_BC_ALARM_OUT_AUDIO,
    E_BC_ALARM_OUT_BUTT
} BC_ALARM_OUT_E;

typedef enum
{
    E_BC_EXCEPTION_NET_DISCON = 0,   //Network connection is lost
    E_BC_EXCEPTION_BUTT
} BC_EXCEPTION_TYPE_E;

//typedef enum
//{
//    E_BC_FT_IFRAME,
//    E_BC_FT_PFRAME,
//    E_BC_FT_AFRAME,
//    E_BC_FT_ALLFRAME,
//    E_BC_FT_INVALID
//} BC_FRAME_TYPE_E;

typedef enum
{
    E_BC_NT_STATIC = 0,
    E_BC_NT_DHCP   = 1
} BC_IP_OBTAIN_E;

typedef enum
{
    E_BC_LT_LAN,    //E_BC_NETWORK_STATIC or E_BC_NETWORK_DHCP
    E_BC_LT_PPPOE,
    E_BC_LT_CDMA
} BC_LINK_TYPE_E;

typedef enum
{
    E_BC_DT_STATIC,
    E_BC_DT_AUTO
} BC_DNS_TYPE_E;

typedef enum
{
    E_BC_PT_NONE,
    E_BC_PT_ODD,
    E_BC_PT_EVEN
} BC_PARITY_TYPE_E;

typedef enum
{
    E_BC_FT_NONE,
    E_BC_FT_HARD,
    E_BC_FT_XON_XOFF,
} BC_FLOWCONTROL_TYPE_E;

typedef enum
{
    E_BC_DT_TC_PELCO_D,
    E_BC_DT_TC_PELCO_P,
    E_BC_DT_TC_PELCO_C,
} BC_DECODE_TYPE_E;

typedef enum
{
    E_BC_RA_EVERY_DAY,
    E_BC_RA_EVERY_SUNDAY,
    E_BC_RA_EVERY_MONDAY,
    E_BC_RA_EVERY_TUESDAY,
    E_BC_RA_EVERY_WEDNESDAY,
    E_BC_RA_EVERY_THURSDAY,
    E_BC_RA_EVERY_FRIDAY,
    E_BC_RA_EVERY_SATURDAY
} BC_REBOOT_AT_E;


typedef enum
{
    E_BC_IT_NONE,
    E_BC_IT_WHITE,
    E_BC_IT_BLACK
} BC_IPFILTER_TYPE_E;

typedef enum
{
    E_BC_DT_SWANN,
    E_BC_DT_DYNDNS,
    E_BC_DT_PEATNUTS,
    E_BC_DT_3322,
    E_BC_DT_NOIP,
    E_BC_DT_BUTT,
} BC_DDNS_TYPE_E;

#define BC_ALARM_IN_NONE        0
#define BC_ALARM_IN_MD          BC_MODE(E_BC_ALARM_IN_MD)
#define BC_ALARM_IN_VL          BC_MODE(E_BC_ALARM_IN_VL)
#define BC_ALARM_IN_IO          BC_MODE(E_BC_ALARM_IN_IO)
#define BC_ALARM_IN_BLIND       BC_MODE(E_BC_ALARM_IN_BLIND)
#define BC_ALARM_IN_HDEXP       BC_MODE(E_BC_ALARM_IN_HDEXP)
#define BC_ALARM_IN_HDFULL      BC_MODE(E_BC_ALARM_IN_HDFULL)
#define BC_ALARM_IN_IPCONFLICT  BC_MODE(E_BC_ALARM_IN_IPCONFLICT)
#define BC_ALARM_IN_NETCONNECT  BC_MODE(E_BC_ALARM_IN_NETCONNECT)
#define BC_ALARM_IN_RF          BC_MODE(E_BC_ALARM_IN_RF)
#define BC_ALARM_IN_FD          BC_MODE(E_BC_ALARM_IN_FD)
#define BC_ALARM_IN_VS          BC_MODE(E_BC_ALARM_IN_VS)
#define BC_ALARM_IN_ID          BC_MODE(E_BC_ALARM_IN_ID)
#define BC_ALARM_IN_RFLPWR      BC_MODE(E_BC_ALARM_IN_RFSENSO_LOW_POWER)
#define BC_ALARM_IN_RFTAMPER    BC_MODE(E_BC_ALARM_IN_RFSENSO_TAMPER)
#define BC_ALARM_IN_DONGLELOST  BC_MODE(E_BC_ALARM_IN_DONGLE_LOST)
#define BC_ALARM_IN_BUTT  		BC_MODE(E_BC_ALARM_IN_BUTT)


#define BC_ALARM_OUT_NONE       0
#define BC_ALARM_OUT_IO         BC_MODE(E_BC_ALARM_OUT_IO)
#define BC_ALARM_OUT_SNAP       BC_MODE(E_BC_ALARM_OUT_SNAP)
#define BC_ALARM_OUT_REC        BC_MODE(E_BC_ALARM_OUT_REC)
#define BC_ALARM_OUT_LED        BC_MODE(E_BC_ALARM_OUT_LED)
#define BC_ALARM_OUT_BUZZ       BC_MODE(E_BC_ALARM_OUT_BUZZ)
#define BC_ALARM_OUT_PTZ        BC_MODE(E_BC_ALARM_OUT_PTZ)
#define BC_ALARM_OUT_FTP        BC_MODE(E_BC_ALARM_OUT_FTP)
#define BC_ALARM_OUT_SCREEN     BC_MODE(E_BC_ALARM_OUT_SCREEN)
#define BC_ALARM_OUT_RFSPEAKER  BC_MODE(E_BC_ALARM_OUT_RFSPEAKER)
#define BC_ALARM_OUT_PUSH   	BC_MODE(E_BC_ALARM_OUT_PUSH)
#define BC_ALARM_OUT_AUDIO      BC_MODE(E_BC_ALARM_OUT_AUDIO)

/*------------------------ STRUCTURE define------------------------*/

typedef struct tagBC_TIME{
    int      iYear;
    int      iMonth;
    int      iDay;
    int      iHour;
    int      iMinute;
    int      iSecond;
} BC_TIME, *LPBC_TIME;


typedef struct tagBC_DEVICE_OPEN_INFO {
    
    char cHost[BC_MAX_ADDR_LEN];
    char cPort[BC_PORT_STR_LEN];
    bool bP2P;
    BC_PROTOCOL_E  eProtocol;
} BC_DEVICE_OPEN_INFO,*LPBC_DEVICE_OPEN_INFO;


typedef struct tagBC_LOGIN_INFO {

    char cUserName[BC_MAX_NAME_LEN+32];
    char cPassword[BC_MAX_PWD_LEN+32];
    
    unsigned int delayCallbackTime; //ms,   0:no delay
    
} BC_LOGIN_INFO,*LPBC_LOGIN_INFO;

typedef struct tagBC_LOGIN_DIAGNOSE_INFO {
    char    cShortUid[BC_MAX_UID_LEN];
    int     iNetType; // = g_sdk_net_type
    
    int     iConnectType;       //-1:NONE  0:TUTK  1:ZHANG  2:SONG  3:IP
    int     iConnectRspCode;
    int     iSongConnType;
    int     iSongTransType;
    int     iCmdRspCode;
    long    iConnectTime; //ms
    
    int     iHasAbility;
    int     iIsLossConnect;
    unsigned long long durationOfNoData;
    int     iLiveStream;
    unsigned long long durationOfLive;
    unsigned long long liveDataSize;
    int     iSndCount;
    int     iSndCode;
    unsigned long long revCount;
} BC_LOGIN_DIAGNOSE_INFO, *LPBC_LOGIN_DIAGNOSE_INFO;

typedef struct tagBC_DEVICE_INFO{
    char    cSerialNumber[BC_SERIALNO_LEN];
    int     iAlarmInPortNum;
    int     iAlarmOutPortNum;
    int     iDiskNum;
    int     iChannelNum;
    int     iAnalogChnNum;
    int     iStartChannel;
    int     iAudioChannelNum;
    int     iIPChannelNum;
    BC_DEVICE_TYPE_E  eType;
    bool              bSDCard;
    int     iPtzMode;   //0:none,1:af, 2:ptz, 3:pt
    unsigned int channelTypes[4];
    int     iNorm;//PAL:0 NTSC:1
    int     i485;
    int     iIframePreview;
    int     iIframeReplay;
    int     iFDAbaility;
    int     iVTAbaility;
    int     iIDAbaility;
    int     iEmailTestAbality;
    int     iRecFileScheduleAbility;
    int     iDownloadCutAbility;
    int     iNotransFrame;
    int     iRfAlarmAbility;
    int     iSupportAutoUpdate;
    int     iUserVerion;
    int     iRfNumber;
    
    int     iIsRelayConnection;
    int     iMaxReconnectTimes;    
} BC_DEVICE_INFO,*LPBC_DEVICE_INFO;


typedef struct
{
    int             iBaseVersion;   // base device version. 0: not base device
    int             iRfVersion[BC_MAX_CHANNEL];
    int             iRfNumber[BC_MAX_CHANNEL];
} BC_BASE_ABILITY_INFO;

typedef struct tagBC_ABILITY_INFO{
    char     cUserName[BC_MAX_NAME_LEN];
    bool     bIframePreview;
    bool     bIframeReplay;
    bool     bFDAbaility;
    bool     bVTAbaility;
    bool     bIDAbaility;
    bool     bEmailTestAbality;
    bool     bRecFileScheduleAbility;
    bool     bDownloadCutAbility;
    bool     bNotransFrame;
    bool     bRfAlarmAbility;
    bool     bSubStreamRecord;
    bool     bPtop;
    bool     bPolling;
    bool     bAutoNtp;
    bool     bCameraMode[BC_MAX_CHANNEL];
    bool     bLedState[BC_MAX_CHANNEL];
    
    int      iUseReboot;
    int      iReboot; // 1:support, 0:not
    int      iUseVideoStandard;
    int      iVideoStandard; // 1:support, 0:not
    int      iUseUpnp;
    int      iUpnp; // 1:support, 0:not
    int      iUseExceptionCfg;
    int      iExceptionCfg; // 1:support, 0:not
    int      iUseLogSearch;
    int      iLogSearch; // 1:support, 0:not
    int      iUseNetPortCfg;
    int      iNetPortCfg; //bit0: media port,bit1: http port,bit2: https port
    int      iUseNtp;
    int      iNtp; // 1:support, 0:not
    int      iUseP2pCfg;
    int      iP2pCfg; //bit0: domain name cfg  bit1:server port cfg, bit2: enable p2p
    
    int      iAutoUpdate;
    int      iPushAlarm;
    int      iFtp; // bit0:support ftp, bit1:support subStream and pic, bit2:support extension stream and pic.
    int      iFtpTest;
    int      iEmail;
    int      iWifi;
    int      iWifiVersion; //bit0: init wifi after logining success first time
    int      iRecord;     //  bit0: 1-md record  bit1: 1-normal record
    int      iUseRecordCfg;
    int 	 iRecordCfg;  //bit0:post record  bit1:pre record  bit2:overwrite  bit3:packet time bit4:post record time list
    int      iWifiTest;
    int      iRtsp;
    int      iOnvif;
    int      iRtmp;
    
// rfVersion:   0 -> no support;
//              1 -> old,suppport 3 buttons;
//              2 -> support RF Remote Config;
//              3 -> support 4 buttons;
//              4 -> support RF Remote Config with Sensitivity
    int      iRfVersion;
    int      iNoExternStream;
    int      iTimeFormat;
    
/*   iDDnsVersion
     0:3322+dyndns
     1:dyndns+noip
     2:3322
     3:dyndns
     4:3322+swann
     5:dyndns+swann
     6:swann
     7:3322+swann+dyndns
     8:noip
*/
    int      iDDnsVersion;       // 0: old, 1: new
    int      iUseDDNSCfg;
    int      iDDNSCfg; // 1:support ddns, 0:not
    int      iEmailVersion;// 0:old, bit0: 1-task, bit1: 1-nickname, bit2:1-bit3 valid, bit3:1-support email interval
    int      iPushVersion;       // 1:new, has push task. 0:old, no
    int      iSupportUpgrade;    // 1: support upgrade online  0:not
    int      iSupportAudioTask;  // 1: support audio task. 0:not
    int      iPushType;          // 0 :udp push  1:http push
    int      iCloudVersion; // bit0:cloud task cfg, bit1:bind & get bind info, bit2:upload cfg
    int      iApMode;    // 0: not support  1: ap wifi wizard
    int      iReplayVersion; // bit0: 1-replay fast forward, bit1:support mark alarm video
    int      i4gDevVersion; // bit0: 3g/4g net info  bit1: SIM module Info
    
    int      iSupportAutoFocus[BC_MAX_CHANNEL]; // 1: support auto focus  0:not
    int      iSupportCrop[BC_MAX_CHANNEL];      // 1: support crop live stream
    int      iUsePtzType;
    int      iPtzType[BC_MAX_CHANNEL];//0:none,1:af,2:ptz,3:pt,4:analog ptz,5:8136S_ptz_without_speed, 6:pt_witho ut_preset
    int      iUseAutoPt;
    int      iAutoPt[BC_MAX_CHANNEL];
    int      iNoAudio[BC_MAX_CHANNEL];          // 1: no audio  0:got some audio
    int      iExStreamCfg[BC_MAX_CHANNEL];      // 1: support extend stream cfg   0: not
    bool     bIndicatorLight[BC_MAX_CHANNEL];
    bool     bSupportAudioTalk[BC_MAX_CHANNEL]; // 1: support audio talk,  0:not
    int      iUseMotion;
    bool     iMotionVersion[BC_MAX_CHANNEL]; // 1:support MD, 2:support MD with PIR
    int      iUseBattery;
    int      iBattery[BC_MAX_CHANNEL]; // 0:not, 1:dry battery, 2:charge battery
    int      iUseBatAnalysis;
    int      iBatAnalysis[BC_MAX_CHANNEL]; //bit0: dump energy analysis
    int      iUseShelterCfg;
    int      bShelterCfg[BC_MAX_CHANNEL]; // 1:battery, 0:not
    int      iUseAudioVersion;
    int      iAudioVersion[BC_MAX_CHANNEL]; // bit0: support audio task, bit1:audio alarm schedule, bit2:manual ring down bit3:custom ringtone
    int      iUseOsdCfg;
    int      iOsdCfg[BC_MAX_CHANNEL]; // bit0: support watermark, bit1: support padding
    
    /*  iIspCfg
     *  bit0:   day/night cfg
     *  bit1:   antiFlick
     *  bit2:   exposure mode cfg
     *  bit3:   white balance
     *  bit4:   Backlight compensation
     *  bit5:   3dnr
     *  bit6:   mirror
     *  bit7:   flip
     *  bit8:   bright
     *  bit9:   contrast
     *  bit10:  satruation
     *  bit11:  hue
     *  bit12:  sharpen
     */
    int     iUseIspCfg;
    int     iIspCfg[BC_MAX_CHANNEL];
    
    BC_BASE_ABILITY_INFO    baseAbility;
} BC_ABILITY_INFO;


typedef struct {
    
    char     cMyUserName[BC_MAX_NAME_LEN];
    char     cUserNameForSet[BC_MAX_NAME_LEN];
} BC_USER_FOR_ABILITY;


typedef struct tagBC_IFRAME_PREVIEW_T {
    int iChannel;
    int iIframeMainStream;                      //0-no 1-use iFrame preview
    int iIframeSubStream;                       //0-no 1-use iFrame preview
    int iIframeExtenStream;                     //0-no 1-use iFrame preview
    int iIframeMobileStream;                    //0-no 1-use iFrame preview
    int iRes[2];
} BC_IFRAME_PREVIEW;

typedef struct tagBC_IFRAME_PREVIEW_ALL {
    BC_IFRAME_PREVIEW iframePreview[BC_MAX_CHANNEL];
} BC_IFRAME_PREVIEW_ALL;

typedef struct tagBC_IFRAME_REPLAY_T {
    int iChannel;
    int iIframeReplay;
} BC_IFRAME_REPLAY;

typedef struct tagBC_IFRAME_REPLAY_ALL {
    BC_IFRAME_REPLAY iframeReplay[BC_MAX_CHANNEL];
} BC_IFRAME_REPLAY_ALL;


typedef struct tagBC_STREAM_PARAM {
    int               iChannel;
    BC_STREAM_TYPE_E  eStreamType;
    int               iHwnd;
    bool              bPreRecord;
} BC_STREAM_PARAM, *LPBC_STREAM_PARAM;

typedef struct {
    int channel;
    char fileName[BC_MAX_FILE_LEN];
    int iUseSubStream;
    float iMultiple; // the speed of playback
} BC_PLAYBACK_INFO;


typedef struct {
    int iChannel;
    char cSourceFileName[BC_MAX_FILE_LEN];
    char cSaveFileName[BC_MAX_FILE_LEN];
    char cTempFileName[BC_MAX_FILE_LEN];
    long long fileSize;
    long long curSize;
    int iUseSubStream;
} BC_DOWNLOAD_BY_NAME_INFO;


typedef struct {
    int iChannel;
    BC_TIME startTime;
    BC_TIME endTime;
    char cSaveFileName[BC_MAX_FILE_LEN];
    long long fileSize;
    long long curSize;
    int iUseSubStream;
    unsigned int width;
    unsigned int height;
} BC_DOWNLOAD_BY_TIME_INFO;


typedef struct tagBC_ALARMER{
    long  lUserID;
    int   iDeviceVersion;
    char  cSerialNumber[BC_SERIALNO_LEN];
    char  cDeviceName[BC_MAX_NAME_LEN];
    char  cMacAddr[BC_MACADDR_LEN];
    char  cDeviceIP[BC_MAX_ADDR_LEN];
    char  cSocketIP[BC_MAX_ADDR_LEN];
    bool  bIpV6;
    int   iLinkPort;
    char  byRes[2];
} BC_ALARMER,*LPBC_ALARMER;

typedef struct tagBC_ALARM_INFO
{
    int   iAlarmType;
    int   iAlarmInputNumber;                      // alarm IO input port
    char  byAlarmOutputNumber[BC_MAX_ALARMOUT];    // alarm output port for the dwAlarmType
    char  byAlarmRelateChannel[BC_MAX_CHANNEL];    // record channel for the dwAlarmType
    char  byChannel[BC_MAX_CHANNEL];               // alarm channels (valid when MD,VLOST,BLIND)
    char  byDiskNumber[BC_MAX_DISKNUM];            // HDs when BC_ALARM_HD_FULL or BC_ALARM_HD_ERR
} BC_ALARM_INFO, *LPBC_ALARM_INFO;

typedef struct tagBC_RESTORE_CFG
{
    bool bDisplay;
    bool bRecording;
    bool bNetwork;
    bool bAlarm;
    bool bDevice;
    bool bSystem;
    bool bIPC;
    bool bWifi;
} BC_RESTORE_CFG,*LPBC_RESTORE_CFG;

typedef struct tagBC_MANUAL_ALARMOUT_STATUS{
    bool  bOutput[BC_MAX_ALARMOUT];
} BC_MANUAL_ALARMOUT_STATUS,*LPBC_MANUAL_ALARMOUT_STATUS;

// total len = sizeof(BC_VIDEO_HEADER) + pVideo->wExtenlen + (pVideo->dwFramelen+7)/8*8;
// raw H264 data start_addr = pVideo + sizeof(BC_VIDEO_HEADER) + pVideo->wExtenlen;
typedef struct tagBC_VIDEO_HEADER
{
    char  byChannel;
    char  byFrametype;
    char  byRes[2];
    int   iStreamtype;
    int   iFramelen;
    int   iExtenlen;
    int   iExternmod;
    int   iPtshigh;
    int   iPtslow;
} BC_VIDEO_HEADER,*LPBC_VIDEO_HEADER;

// raw audio data start_addr = pAudio + sizeof(BC_AUDIO_HEADER)
typedef struct tagBC_AUDIO_HEADER
{
    unsigned char channel;
    unsigned char frametype;
    unsigned char resv0;
    unsigned char resv1;
    unsigned short framelen;
    unsigned short datalen;
} BC_AUDIO_HEADER,*LPBC_AUDIO_HEADER;

typedef struct tagBC_FILE_HEADER{
    char  byVer[4];
    int   iLen;
    int   iWidth;
    int   iHight;
    char  byType;
    char  byFrameRate;
    char  byBeginYear;
    char  byBeginMonth;
    char  byBeginDay;
    char  byBeginHour;
    char  byBeginMinute;
    char  byBegSecond;
    char  byEndYear;
    char  byEndMonth;
    char  byEndDay;
    char  byEndHour;
    char  byEndMinute;
    char  byEndSecond;
    char  byRes[2];       // reserve bytes
} BC_FILE_HEADER,*LPBC_FILE_HEADER;

typedef struct tagBC_COLOR_CFG{
    char    byBrightness; //range:0~0xff,default: 0x80
    char    byContrast;   //range:0~0xff,default: 0x80
    char    bySaturation; //range:0~0xff,default: 0x80
    char    byHue;        //range:0~0xff,default: 0x80
} BC_COLOR_CFG, *LPBC_COLOR_CFG;

typedef struct tagBC_ALARM_OUT{
    int      iType;                     // BC_ALARM_OUT_NONE  ~  BC_ALARM_OUT_SCREEN
    bool     bAlarmout[BC_MAX_ALARMOUT]; // alarmout channel, 0: disable, 1: enable
} BC_ALARM_OUT, *LPBC_ALARM_OUT;

typedef struct tagBC_VILOST_CFG{
    bool          bEnable;                     // 0:disable, 1:enable
    BC_ALARM_OUT  alarmOut;
    int  		  iInvalid;
    int           iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_VILOST_CFG, *LPBC_VILOST_CFG;

typedef struct tagBC_SENSITIVITY_INFO
{
    char byBeginHour;    // begin time: hour
    char byBeginMinute;  // begin time: minute
    char byEndHour;      // endtime: hour
    char byEndMinute;    // endtime: minute
    int   iSensitivity;  // 1 ~ 50
} BC_SENSITIVITY_INFO;

typedef struct tagBC_HANDLEEXCEPTION
{
    int      iHandleType;
    char     byRelAlarmOut[96];
} BC_HANDLEEXCEPTION;

typedef struct tagBC_MOTION_CFG
{
    bool                 isCopyTo;
    bool                 bEnable;                         // FALSE: disable, TRUE:enable
    int                  iWidth;   // video image width, max:96
    int                  iHeight;   // video image hight, max:64
    bool                 bMotionScope[64][96];           // 1: set to motion, 0: not set
    BC_SENSITIVITY_INFO  sensitivityInfo[BC_MAX_MOTION_SENS_NUM];
    BC_ALARM_OUT         alarmOut;
    char                 byRelRecordChannel[BC_MAX_CHANNEL];     // 0: not set, 1:set
    int                  iInvalid;
    int                  iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
    
    int                  iUsePir;
} BC_MOTION_CFG, *LPBC_MOTION_CFG;

typedef struct {
    
    int                  iWidth;   // video image width, max:96
    int                  iHeight;   // video image hight, max:64
    bool                 bMotionScope[64][96];// 1: set to motion, 0: not set
} BC_MD_SCOPE;

typedef struct tagBC_BLIND_CFG{
    bool                bEnable;    // FALSE: disable, TRUE:enable
    BC_ALARM_OUT        alarmOut;
    int                 iInvalid;
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];// 0: not set, 1:set
} BC_BLIND_CFG, *LPBC_BLIND_CFG;

typedef struct tagBC_EXCEPTION_CFG
{
    BC_ALARM_OUT alarmOut;
    
} BC_EXCEPTION_CFG, *LPBC_EXCEPTION_CFG;

typedef struct tagBC_ALARM_IN_CFG
{
    int                              iInputId;
    bool                             bCopyTo;
    char                             sAlarmInName[32];
    char                             byAlarmType;
    char                             byAlarmInHandle;
    BC_HANDLEEXCEPTION               struAlarmHandleType;
    int                 			 iInvalid;
    int                 			 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
    char				 			 byRelRecordChannel[BC_MAX_CHANNEL]; 	// 0: not set, 1:set
    char                             byEnablePreset[64];
    char                             byPresetNo[64];
    char                             byEnableCruise[16];
    char                             byCruiseNo[16];
    char                             byEnablePtzTrack[16];
    char                             byPTZTrack[16];
} BC_ALARM_IN_CFG;

typedef struct tagBC_ALARM_OUT_CFG
{
    int                     iOutputId;
    char                    cAlarmOutName[32];
    int                     iAlarmOutDelay;
    int                 	iInvalid;
    int                 	iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_ALARM_OUT_CFG;


/*
 image_w
 |---------------------------|
 |     (x,y) cover_w         |
 |      |----------|         |
 |      |  cover   |cover_h  | image_h
 |      |----------|         |
 |                           |
 |---------------------------|
 
 x: cover left_top coordinate x
 y: cover left_top coordinate y
 
 dwX = ((x<<16)&0xffff0000)|(image_w&0xffff);
 dwY = ((y<<16)&0xffff0000)|(image_h&0xffff);
 dwWidth    = ((cover_w<<16)&0xffff0000)|(image_w&0xffff);
 dwHeight   = ((cover_h<<16)&0xffff0000)|(image_h&0xffff);
 */
typedef struct tagBC_COVER_AREA{
    int      iX;
    int      iY;
    int      iWidth;
    int      iHeight;
} BC_COVER_AREA, *LPBC_COVER_AREA;

typedef struct tagBC_COVER_CFG{
    bool                bEnable;    // FALSE: disable, TRUE:enable
    BC_COVER_AREA       area[BC_MAX_COVER_AREA_NUM];
    char     byRes[64];
} BC_COVER_CFG, *LPBC_COVER_CFG;

typedef enum
{
    BC_CAMERA_MODE_AUTO,
    BC_CAMERA_MODE_TVI,
    BC_CAMERA_MODE_AHD,
    BC_CAMERA_MODE_BUTT = 255
} BC_CAMERA_MODE_E;


typedef struct tagBC_CAMERA_CFG{
    
    BC_CAMERA_MODE_E    eCameraMode;
} BC_CAMERA_CFG, *LPBC_CAMERA_CFG;




/*
 image_w
 |--------------------------|
 |           h1             |
 |       |----------|       |
 |<-w1-> |   osd    |<-w2-> | image_h
 |       |----------|       |
 |           h2             |
 |--------------------------|
 
 w1: the distance from osd to the left
 w2: the distance from osd to the right
 
 h1: the distance from osd to the top
 h2: the distance from osd to the bottom
 
 dwX = ((w1<<16)&0xffff0000)|(w2&0xffff)
 dwY = ((h1<<16)&0xffff0000)|(h2&0xffff)
 
 */
typedef struct tagBC_OSD
{
    bool           bShow;  // FALSE:disable, TRUE:enable
    int            iX;
    int            iY;
} BC_OSD;

typedef struct tagBC_OSD_CFG
{
    bool                     isCopyTo;
    char                     byChannelName[BC_MAX_NAME_LEN];
    BC_OSD                   channelName;
    BC_OSD                   time;
    BC_OSD_SIZE_E            eSize;
    BC_LANGUAGE_E            elanguage;
    int                      iBgColor; //1:use bg color
    int                      iWaterMark;//1:use water mark
} BC_OSD_CFG,*LPBC_OSD_CFG;

/* daylight saving time */
typedef struct tagBC_DST
{
    bool bEnable;
    int iOffset;       // hours offset of timezone
    
    int iStartMonth;   // 1~12
    int iStartIndex;   // 1~5, 5: last week
    int iStartWeekday; // 0: sunday
    int iStartHour;
    int iStartMinute;
    int iStartSecond;
    
    int iEndMonth;
    int iEndIndex;
    int iEndWeekday;
    int iEndHour;
    int iEndMinute;
    int iEndSecond;
    
    int iVersion;// bit0: 1 support weekday cfg
} BC_DST_CFG, *LPBC_DST_CFG;

typedef struct tagBC_SYS_GENERAL_CFG
{
    BC_TVSYSTEM_E eTS;
    int iTimeZone; // Example: For GMT +8:00, lTimeZone = -8*3600
    BC_DATE_TYPE_E eDateFormat;
    BC_TIME_FMT_E eTimeFormat;
    int iYear;
    int iMonth;
    int iDay;
    int iHour;
    int iMin;
    int iSecond;
    int iDeviceId;
    int iLanguage;
    char cDeviceName[BC_MAX_NAME_LEN];
} BC_SYS_GENERAL_CFG,*LPBC_SYS_GENERAL_CFG;

typedef struct
{
    char cDeviceName[BC_MAX_NAME_LEN];
} BC_DEVICE_NAME_CFG;

typedef struct tagBC_AREA_CTRL_VALUE
{
    long lDefMin;
    long lDefMax;
    long lCurMin;
    long lCurMax;
} BC_AREA_CTRL_VALUE;

typedef struct tagBC_LINE_CTRL_VALUE
{
    long lMin;
    long lMax;
    long lCur;
} BC_LINE_CTRL_VALUE;

typedef enum
{
    BC_NR3D_HIGH_E,
    BC_NR3D_MID_E,
    BC_NR3D_LOW_E,
    BC_NR3D_OFF_E,
    BC_NR3D_BUTT = 255,
} BC_ISP_NR3D_E;


/*
 lDefault: It works in the setting command
 0: Normal set all the member of BC_ISP_CFG
 1: Set Brightness, Contrast, Saturation, Hue, Sharpen, Mirror
 and Flip to the default value
 2: Set other members to the default value
 */
typedef struct tagBC_ISP_CFG{
    
    /*  flag, used for only set some params.
     *  bit0: eAntiflick
     *  bit1: eDayNightMode
     */
    int flag;
    
    long lChannel;                       // 0~BC_MAX_CHANNEL
    long lBright;                        // 0~0xff, default 0x80
    long lContrast;                      // 0~0xff, default 0x80
    long lSaturation;                    // 0~0xff, default 0x80
    long lHue;                           // 0~0xff, default 0x80
    long lSharpen;                       // 0~0xff, default 0x80
    bool bSupportAdvanced;               // FALSE means the following member is invalid
    BC_ANTIFLICK_TYPE_E   eAntiflick;    // Anti flash
    BC_EXPOSURE_TYPE_E    eExpType;      // exposure type
    BC_AREA_CTRL_VALUE    gainCtl;       // gain control, 1~100, default 1~20
    BC_AREA_CTRL_VALUE    shutterCtl;    // Electronic shutter control, 2~40, default 2~40
    BC_SHUTTER_AJUST_E    eShutterAjust; // shutter adjust
    BC_AWB_SCENC_MODE_E   eScencMode;    // contextual model
    long                  lSizeOfScencModes;
    BC_AWB_SCENC_MODE_E   scencModeList[8];
    BC_LINE_CTRL_VALUE    redGain;       // red gain, 0~100, default 50
    BC_LINE_CTRL_VALUE    blueGain;      // blue gain, 0~100, default 50
    BC_DAY_NIGHT_MODE_E   eDayNightMode; // day/night mode
    BC_IR_CUT_TYPE_E      eIRCut;        // ir-cut-filter
    //BC_LINE_CTRL_VALUE    exposure;      // 0~0xff,default:0x80
    long				  lExposureRes;
    long				  lExposureLevel;
    long				  lExposureCur;
    BC_BLC_MODE_E         eBLCType;      // Backlight compensation mode
    BC_LINE_CTRL_VALUE    DRCTarget;     // Wide dynamic range, 0~0xff,default:0x80
    BC_LINE_CTRL_VALUE    BLCTarget;     // Backlight intensity,0~0xff,default:0x80
    bool    bMirror;                     // FALSE:diable, TRUE:enable
    bool    bFlip;                       // FALSE:diable, TRUE:enable
    long    lDefault;                    // See the comment of this structure
    long    lGainAjust;                  // 0~100, default 10
    long                lAutoIrisState;
    BC_LINE_CTRL_VALUE	   AutoirisValue;
    long 					lFocusAutoiris;
    long 					lSupportAutoiris;
    
    BC_ISP_NR3D_E		eNR3D;
    long 			lSupportNR3D;
    
    long            lIspVersion;//0:old, 1:new_1
} BC_ISP_CFG, *LPBC_ISP_CFG;


typedef struct {
    BC_DAY_NIGHT_MODE_E eMode;
} BC_DAY_NIGHT_MODE_CFG;


typedef enum
{
    BC_LED_AUTO,
    BC_LED_CLOSE,
    BC_LED_OPEN,
    BC_LED_BUTT,
} BC_LED_STATE_E;

typedef enum
{
    BC_LIGHT_CLOSE,
    BC_LIGHT_OPEN,
    BC_LIGHT_BUTT,
}BC_LIGHT_STATE_E;

typedef struct {
    
    BC_LED_STATE_E      eLEDState;
    int                 iVersion;// 1:auto,close,open. 2:auto,close
    BC_LIGHT_STATE_E    eIndicatorLight;
} BC_LED_LIGHT_STATE;


typedef struct tagBC_RESO_PROFILE
{
    BC_RESOLUTION_E eResolution;
    int             iWidth;
    int             iHigh;
    char  cResolutionName[BC_MAX_NAME_LEN];
    long  lDefFrameRate;
    long  lDefBitRate;
    long  lFrameRate[BC_MAX_FRAME_RATE_NUM];
    long  lBitRate[BC_MAX_BIT_RATE_NUM];
} BC_RESO_PROFILE,*LPBC_RESO_PROFILE;

typedef struct tagBC_ENC_PROFILE
{
    int iChnBits;
    BC_RESO_PROFILE mainstream;
    BC_RESO_PROFILE substream;
    BC_RESO_PROFILE extendstream;
} BC_ENC_PROFILE, *LPBC_ENC_PROFILE;

typedef struct{
    int                 profileNum;
    BC_ENC_PROFILE      profile[BC_MAX_ENC_PROFILE_NUM];
} BC_ENC_PROFILE_TABLE;

typedef enum
{
    BC_ENCODER_PROFILE_DEFAULT,  // not support profile
    BC_ENCODER_PROFILE_BASE_LINE,
    BC_ENCODER_PROFILE_HIGH,
    BC_ENCODER_PROFILE_MAIN,
    BC_ENCODER_PROFILE_BUTT = 255
} BC_ENCODER_PROFILE_E;

typedef struct tagBC_ENC_CFG
{
    bool            bAudio;
    BC_RESOLUTION_E eResolution;
    int             iWidth;
    int             iHeight;
    BC_ENC_TYPE_E   eEncType;      // 264,mpeg4,mpeg2
    long            lFrameRate;
    long            lBitRate;
    BC_ENCODER_PROFILE_E  eEncProfile;
} BC_ENC_CFG, *LPBC_ENC_CFG;

typedef struct tagBC_ENC_INFO
{
    BC_RESOLUTION_E eResolution;
    int             iWidth;
    int             iHigh;
} BC_ENC_INFO, *LPBC_ENC_INFO;

typedef struct tagBC_CHN_ENC_INFO
{
    bool       bNoTrans;
    bool       bRestartWhenResChanged;
    long       lStreamTypes;   // valid stream types
    BC_ENC_CFG mainstream;
    BC_ENC_CFG substream;
    BC_ENC_CFG extendstream;
} BC_CHN_ENC_INFO, *LPBC_CHN_ENC_INFO;

typedef struct tagBC_VERSION_INFO
{
    char    cName[BC_MAX_NAME_LEN];             // device name
    char    cType[BC_TYPE_INFO_LEN];            // model
    char    cSerialNo[BC_SERIALNO_LEN];
    char    cBuildDay[BC_BUILD_INFO_LEN];
    char    cHardwareVer[BC_VERSION_INFO_LEN];
    char    cCfgVer[BC_VERSION_INFO_LEN];
    char    cFirmwareVer[BC_VERSION_INFO_LEN];
    char    cPakSuffix[BC_MAX_FILE_LEN];
    char    cDetail[BC_DETAIL_INFO_LEN];
    char    cCC3200Ver[BC_VERSION_INFO_LEN];    //cc3200 version
    char    cSpVer[BC_VERSION_INFO_LEN];        //sp version
} BC_VERSION_INFO, *LPBC_VERSION_INFO;

typedef struct tagBC_EMAIL_CFG
{
    struct{
        char   byAccount[BC_MAX_ADDR_LEN];
        char  byPassword[BC_MAX_PWD_LEN];      // sender email
    }sender;
    
    struct{
        char   byAddress[BC_MAX_ADDR_LEN];
    }receiver[3];
    
    char      bySmtpServer[BC_MAX_ADDR_LEN];
    bool      bSSL;
    int       iSmtpPort;
    
    int       iAttachment;     //0:disable; 1:Attach Picture; 2:Attach Video
    bool      bSupportVideo;
    bool      bSupportTextType;
    int       iWithText;       //0:without text,  1:with text
    int       iMailInterval;  //3: 30S, 6: 60S, 30: 300S, 60: 600S
    char      cSendNickname[BC_MAX_NICKNAME_LEN];
} BC_EMAIL_CFG,*LPBC_EMAIL_CFG;

typedef struct tagBC_EMAIL_TASK
{
    bool                bEnable;
    int                 iInvalid;
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_EMAIL_TASK, *LPBC_EMAIL_TASK;


typedef struct taBC_RESOLUTION
{
    BC_RESOLUTION_E reso;
    char cName[32];		//name of resolution
    int width;
    int height;
} BC_RESOLUTION_INFO;

typedef struct tagBC_RESOLUTION_LIST
{
    long lValidNum;
    BC_RESOLUTION_INFO cur;
    BC_RESOLUTION_INFO list[BC_MAX_RESOLUTION_NUM];
} BC_RESOLUTION_LIST;

typedef struct tagBC_UI_TRANS
{
    long lMax;
    long lMin;
    long lCur;
} BC_UI_TRANS;

typedef struct tagBC_MOUSE_SENSE
{
    long lMax;
    long lMin;
    long lCur;
} BC_MOUSE_SENSE;

typedef struct tagBC_DWELL_TABLE
{
    long lValidNum;
    long lCurrentValue;
    long lList[BC_MAX_DWELL_NUM];    //Unit:S
} BC_DWELL_TABLE;

typedef struct tagBC_OUTPUT_CFG
{
    BC_RESOLUTION_LIST reso;
    BC_UI_TRANS trans;
    BC_MOUSE_SENSE mouseSense;
    BC_DWELL_TABLE dwell;
    bool bAudio;
} BC_OUTPUT_CFG,*LPBC_OUTPUT_CFG;

typedef struct
{
    int iSize;
    int durationTime[32];
} BC_RECORD_TIME_LIST;

typedef struct tagBC_RECORD_GENERAL_CFG
{
    bool                bOverWrite;
    int                 iPackageTime;  //30 45 60 MIN
    int                 iPostRecordTime; //1 2 5 10 MIN
    bool                bPreRecord;
    BC_RECORD_TIME_LIST timeList;
} BC_RECORD_GENERAL_CFG;

typedef struct tagBC_RECORD_SCHEDULE_CFG
{
    bool					bEnable;
   	int                 	iInvalid;
    int                 	iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_RECORD_SCHEDULE_CFG;


typedef struct {
    
    int                     iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_TIME_TABLE_CFG;


typedef struct {
    
    int                     iSurvPort;
    int                     iHttpPort;
    int                     iHttpsPort;// -1: no support
} BC_NET_NORMAL_PORT;

typedef struct {
    
    int                     iOnvifPort;
    int                     iRtspPort;
    int                     iRtmpPort;
} BC_NET_ADVANCED_PORT;

typedef struct{
    
    int         iEnable;
} BC_UPNP_CFG;

typedef struct {
    
    char                    cUid[BC_MAX_UID_LEN];
} BC_UID_INFO;

typedef struct {
    
    int         iEnable;
    int         iPort;
    char        serverDomainName[BC_MAX_NAME_LEN];
} BC_P2P_CFG;


typedef struct tagBC_LOCAL_CFG
{
    BC_IP_OBTAIN_E eIpObtain;		//dhcp or static
    BC_DNS_TYPE_E eAutodns;	        //get dns automaticaly or static configure
    char cIp[BC_MAX_ADDR_LEN];       //ip configure
    char cMask[BC_MAX_ADDR_LEN];
    char cGateway[BC_MAX_ADDR_LEN];
    char cMac[BC_MAX_ADDR_LEN];
    char cDns1[BC_MAX_ADDR_LEN];    //dns1 configure
    char cDns2[BC_MAX_ADDR_LEN];    //dns2 configure
} BC_LOCAL_CFG;

typedef struct tagBC_PPPOE_CFG
{
    char cName[BC_MAX_NAME_LEN];
    char cPassword[BC_MAX_PWD_LEN];
} BC_PPPOE_CFG,*LPBC_PPPOE_CFG;

typedef struct tagBC_NTPPARA
{
    bool           bEnable;
    char           cServer[BC_MAX_ADDR_LEN];
    int            iInterval; //60 ~65535 MIN,0 for synchronize
    int            iPort;
} BC_NTP_CFG;


typedef struct tagBC_DDNS_CFG
{
    bool                bEnable;
    BC_DDNS_TYPE_E      eType;
    char                cDomainName[BC_MAX_ADDR_LEN];
    char                cUserName[BC_MAX_NAME_LEN];
    char                cPassword[BC_MAX_PWD_LEN];
} BC_DDNS_CFG;

typedef struct tagBC_IP_FILTER
{
    BC_IPFILTER_TYPE_E eType;    // 0:ipfilter invalid   1:cWhite valid  2:cBlack valid
    char cWhite[BC_MAX_IPFILTER_NUM][BC_MAX_ADDR_LEN];
    char cBlack[BC_MAX_IPFILTER_NUM][BC_MAX_ADDR_LEN];
} BC_IP_FILTER, *LPBC_IPFILTER;

typedef enum
{
    BC_MODE_UNKNOWN,
    BC_MODE_2G,
    BC_MODE_3G,
    BC_MODE_4G,
} BC_3G4G_MODE_E;

typedef struct
{
    int iSignalIntensity; //signal intensity
    int iSignalLevel; //1:3~6, 2:7~10, 3:11~14, 4:15~18, 5:19~...
    BC_3G4G_MODE_E eMode;
    int iMobileOperator; //serial number of operator
} BC_3G_4G_INFO;

typedef struct
{
    char cIMEI[128]; // International Mobile Equipment Identity
    char cICCID[128]; // Integrate circuit card identity
    char cPhoneNum[128]; // phone number
} BC_SIM_MODULE_INFO;

typedef struct tagBC_PTZ_DECODER
{
    int        iDataBit;       // 0:CS8 1:CS7 2:CS6 3:CS5
    int        iStopBit;       // 0:1bit 1:2bit
    int        iDecoderAddress; // 0~255  default:channel+1
    int        iBaudRate;      // 0:1200 1:2400 2:4800 3:9600
    BC_PARITY_TYPE_E      eParity;
    BC_FLOWCONTROL_TYPE_E eFlowcontrol;
    BC_DECODE_TYPE_E      eDecoderType;
    int        iSupportPELCO_C; //0-PTZ_PELCO_D,1-PTZ_PELCO_P,2-PTZ_PELCO
    
    char        cPreset[256];		/*preset point status*/
    char        cCruise[256];		/*cruise point status*/
    char        cTrack[256];		/*unknown use??? track point status */
} BC_PTZ_DECODER;


typedef struct tag_BC_PTZINFO{
    int iPtzCmd;
    int iSpeed;			//	1~7
    int iPresetId;		//	1~64
    int iPatrolId;		//	1~6*/
    int iKeypos;		//	1~16
    int iTime;			//	ptz stay time in on point 1~30
    int iPatternId;		//	no use!!!
} BC_PTZ_INFO, *LPBC_PTZ_INFO;



// 
typedef struct {
    int channel;
    PTZ_CMD_E cmd;
    int iSpeed;			//	1~7
    int iPatrolId;		//	0~5*/
    int iPatternId;		//	no use!!!
} BC_PTZ_CONTROL_PARAM;

//ptz preset
typedef struct {
    
    int iPtzCmd;           // if set ptz name only, pls set cmd to -1
    int iPresetId;
    char name[BC_MAX_NAME_LEN];  // if no use "invalid" should be set
} _BC_PRESET;

typedef struct {
    int iChannelId;
    int iSize;
    _BC_PRESET preset[BC_MAX_POS_NUM];
} BC_PTZ_PRESET;

//used for UI
typedef struct {
    
    int iValid;
    char name[BC_MAX_NAME_LEN];
} _BC_UI_PRESET;

typedef struct {
    
    _BC_UI_PRESET preset[BC_MAX_POS_NUM];
} BC_UI_PTZ_PRESET;

//ptz cruise
typedef struct {
    int iValid;
    int iStarting;
    int iPatrolId;
    int iPresetId[BC_MAX_KEY_POS];
    int iTime[BC_MAX_KEY_POS];
    int iSpeed[BC_MAX_KEY_POS];
    char name[BC_MAX_NAME_LEN];
} _BC_CRUISE;

typedef struct {
    int iChannel;
    int iSize;
    _BC_CRUISE cruise[BC_MAX_CRUISE_NUM];
} BC_PTZ_CRUISE;

typedef struct {
    
    int iValid;
    int iStarting;
    int iPresetId[BC_MAX_KEY_POS];
    int iTime[BC_MAX_KEY_POS];
    int iSpeed[BC_MAX_KEY_POS];
    char name[BC_MAX_NAME_LEN];
} _BC_UI_CRUISE;

typedef struct {
    
    _BC_UI_CRUISE cruise[BC_MAX_CRUISE_NUM];
} BC_UI_PTZ_CRUISE;


typedef struct
{
    int iDisable;
} BC_PTZ_AUTO_FOCUS;


typedef struct tagBC_HDD
{
    int   iNumber;          // iNumber > 100 ? eSATA : iNumber;
    int   iCapacityG;       // Unit:GB
    int   iCapacityM;       // Unit:GB      -1: no support
    bool  bFormat;
    bool  bMount;
    int   iRemainSizeG;// Unit:GB
    int   iRemainSizeM;
} BC_HDD;

typedef struct tagBC_HDD_CFG
{
    int   iTotal;
    BC_HDD hdd[BC_MAX_DISKNUM];
} BC_HDD_CFG,*LPBC_HDD_CFG;

typedef struct tagBC_HDD_INIT_CFG
{
    int   iTotal;
    int   iInitId[BC_MAX_DISKNUM];
} BC_HDD_INIT_CFG,*LPBC_HDD_INIT_CFG;

typedef struct tagBC_AUTOREBOOT_CFG
{
    bool bEnable;
    BC_REBOOT_AT_E eDay;
    int   iHour;
    int   iMin;
    int   iSecond;
} BC_AUTOREBOOT_CFG,*LPBC_AUTOREBOOT_CFG;

typedef struct tagBC_PERFORMANCE_INFO
{
    int   iCPUUse;              //CPU utilization  1^100
    int   iBitRate;			 //Bit rate B/s
    int   iNetThroughput;	 	 //Ethernet through	rate B/s
} BC_PERFORMANCE_INFO,*LPBC_PERFORMANCE_INFO;

typedef enum {
    
    BC_FTP_TRANSPORT_MODE_AUTO = 0,
    BC_FTP_TRANSPORT_MODE_PORT = 1,
    BC_FTP_TRANSPORT_MODE_PASV = 2,
} BC_FTP_TRANSPORT_MODE_E;

typedef struct tagBC_FTP_CFG
{
    char  cServer[BC_MAX_ADDR_LEN];
    char  cUsername[BC_MAX_NAME_LEN];
    char  cPassword[BC_MAX_PWD_LEN];
    char  cRemotedir[BC_MAX_FILE_LEN];
    bool  bAnonymous;
    int   iPort;
    int   iwFilelen;            //Unit:MB
    bool  bSupportTest;         //1:support ftp test
    int   iSupportStreamType;
    int   iStreamType;          //0:pic and mainStream video, 1:pic and subStream video, 2:pic and extension stream video, 3:only picture
    int   iSupportInterval;
    int   iInterval;            //seconds
    int   iSupportTransportMode;
    BC_FTP_TRANSPORT_MODE_E    eTransportMode;
} BC_FTP_CFG, *LPBC_FTP_CFG;

typedef struct tagBC_FTP_TASK
{
    bool                bEnable;
    int                 iInvalid;
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_FTP_TASK, *LPBC_FTP_TASK;

typedef struct {
    
    int channelId;
    BC_STREAM_TYPE_E streamType;
} BC_RTMP_OPT_ITEM;

typedef struct tagBC_RTMP_OPT
{
    int size;
    BC_RTMP_OPT_ITEM items[BC_MAX_CHANNEL];
    
} BC_RTMP_OPT, *LPBC_RTMP_OPT;

typedef struct {
    
    char                cUserName[BC_MAX_NAME_LEN];
    char                cPassword[BC_MAX_PWD_LEN];
} BC_FORCE_PWD;

typedef struct tagBC_USER
{
    char                cUserName[BC_MAX_NAME_LEN];
    char                cPassword[BC_MAX_PWD_LEN];
    char                cLocalRight[32];
    char                cOldIpcRight[32];
    int					magicNum;
    
    char 				cUserIP[128];
    char                cMACAddr[6];
    int                 iUserLevel;             // 0:normal user;  1:admin
    int                 iLoginState;
    int                 iUserSetState;          //0:none, 1:add, 2:delete, 3:modify
    int                 iBootPwd;
} BC_USER;

typedef struct tagBC_USER_CFG
{
    char                cUserName[BC_MAX_NAME_LEN];
    int                 usernum;
    BC_USER             user[BC_USER_NUM];
} BC_USER_CFG;



typedef struct tagBC_USER_ONLINE_INFO
{
    
    int  					iSessionId;
    int  				    iUserId;
    char                    cUserName[BC_MAX_NAME_LEN]; //Login User Name
    char                    cPassword[BC_MAX_PWD_LEN];  //User password, the default is an empty string
    char                    userIP[BC_MAX_ADDR_LEN];    //User IP
    int                     iUserLevel;                 // 0:normal user;  1:admin
    bool                    bCanForceOffline;           //Is can be force offline
    bool                    bOnlineState;               //Online State
} BC_USER_ONLINE_INFO;

typedef struct tagBC_USER_ONLINE_CFG
{
    int   iOnlineUserNum;
    BC_USER_ONLINE_INFO	 user[BC_USER_NUM];
} BC_USER_ONLINE_CFG,*LPBC_USER_ONLINE_CFG;

typedef struct tagBC_SCAN_INFO
{
    int   iIndex;
    int   iPort;
    char  cDeviceName[BC_MAX_NAME_LEN];
    char  cDeviceIp[BC_MAX_ADDR_LEN];
    char  cVersion[BC_VERSION_INFO_LEN];
    char  cDeviceType[BC_TYPE_INFO_LEN];
    char  cMac[BC_MACADDR_LEN];
    bool  bAutoIP;
} BC_SCAN_INFO;

struct  BC_SCANINFO_LIST
{
    int iDeviceNum;
    BC_SCAN_INFO* pScanInfo;
};

typedef enum
{
    E_BC_WIFI_MODE_STATION,
    E_BC_WIFI_MODE_AP,
} BC_WIFI_MODE_E;

typedef enum
{
    E_BC_WIFI_AUTH_OPEN,
    E_BC_WIFI_AUTH_SHARED,
    E_BC_WIFI_AUTH_WPAPSK,
    E_BC_WIFI_AUTH_WPA2PSK,
    E_BC_WIFI_AUTH_DETECT,
    E_BC_WIFI_AUTH_BUTT,
} BC_WIFI_AUTH_MODE_E;

typedef enum
{
    E_BC_WIFI_ENCRYPT_NONE,
    E_BC_WIFI_ENCRYPT_WEP,
    E_BC_WIFI_ENCRYPT_TKIP,
    E_BC_WIFI_ENCRYPT_AES,
    E_BC_WIFI_ENCRYPT_DETECT,
    E_BC_WIFI_ENCRYPT_BUTT,
} BC_WIFI_ENCRYPT_TYPE_E;

typedef struct tagBC_UDID {
    
    char udid[128];
    int iSignal;
    int iSupportEncrypt;
    int iEncrypt;
} BC_UDID;

typedef struct tagBC_UDID_LIST {
    
    int size;
    BC_UDID udids[BC_WIFI_UDID_MAX_NUM];
} BC_UDID_LIST;

typedef struct tagBC_WIFI_CFG
{
    BC_WIFI_MODE_E mode;
    char essid[128];/*ssid*/
    int channel;/*1~13*/
    BC_WIFI_AUTH_MODE_E authmod;
    BC_WIFI_ENCRYPT_TYPE_E enccrypttype;
    char key[128];
    BC_UDID_LIST udidList;
} BC_WIFI_CFG,*LPBC_WIFI_CFG;

typedef struct tagBC_WIFI_SIGNAL
{
    int iSignal;        //0~-255
    int iSupportChannelSignal;
    int iChnSignal[BC_MAX_CHANNEL];
} BC_WIFI_SIGNAL,*LPBC_WIFI_SIGNAL;

typedef struct tagBC_SCAN_AP
{
    BC_UDID_LIST udidList;
} BC_SCAN_AP;


typedef struct {
    
	int iNeedApWifiWizard;
    char essid[128];
} BC_AP_MODE_INFO;


// find record file
typedef enum {
    RECORD_TYPE_SCHEDULE = (1 << 0),
    RECORD_TYPE_MANUAL = (1 << 1),
    RECORD_TYPE_ALARM = (1 << 2),
    RECORD_TYPE_ALL = ((1 << 0)|(1 << 1)|(1 << 2))
} RECORD_TYPE;

typedef struct tagBC_FILE_FIND{
    int              seq;           //the times of this file find
    long             lChannel;
    BC_STREAM_TYPE_E eStreamType;
    int              iFileType;
    BC_TIME          struStartTime;
    BC_TIME          struStopTime;
} BC_FILE_FIND,*LPBC_FILE_FIND;

typedef enum {
    BC_FILE_TYPE_H264,
    BC_FILE_TYPE_MP4,
    BC_FILE_TYPE_FLV,
} BC_FILE_TYPE_E;

typedef struct tagBC_FIND_REC_FILE{
    int              iChannel;
    char             cFileName[BC_MAX_FILE_LEN];
    BC_TIME     	 struStartTime;
    BC_TIME          struStopTime;
    unsigned int     iFileSize;
    unsigned int     iFileSizeH;
    char             cCardNum[32];
    char             cLocked;
    char             cSupportNum;
    char             cRes[2];
    RECORD_TYPE      recordType;
    BC_STREAM_TYPE_E eStreamType;
    BC_FILE_TYPE_E   eFileType;
    int              iContainsAudio;
} BC_FIND_REC_FILE, *LPBC_FIND_REC_FILE;


typedef struct tagBC_FIND_REC_FILES{
    int seq;                        //the times of this file find
    int fileNum;
    BC_FIND_REC_FILE recFile[40];
} BC_FIND_REC_FILES;

/* Alarm Video Info */
typedef struct
{
    int              seq;//the times of this alarm video find
    int              iChannel;
    BC_STREAM_TYPE_E eStreamType;
    BC_TIME          startTime;
    BC_TIME          endTime;
} BC_FIND_ALARM_VIDEOS;

typedef struct
{
    char             cFileName[BC_MAX_FILE_LEN];
    BC_TIME          startTime;
    BC_TIME          endTime;
} BC_ALARM_VIDEO_ITEM;

typedef struct
{
    int seq;//the times of this alarm video find
    int iFinished;
    int iItemSize;
    BC_ALARM_VIDEO_ITEM alarmItems[60];
} BC_ALARM_VIDEOS_INFO;
/********************/

typedef struct
{
    long   	 lChannel;
    BC_TIME  seekTime;
    long   	 lSeq;
} BC_PLAYSEEK,*LPBC_PLAYSEEK;


typedef struct {
    
    int             iUsed;
    int             iRecType[32];  //  0:none, 1:normal, 2:alarm
} BC_RECORD_FILE_DAYS;

typedef struct {
    
    BC_TIME                 startTime;
    BC_TIME                 endTime;
    BC_RECORD_FILE_DAYS     items[BC_MAX_CHANNEL];
} BC_RECORD_FILE_DAYS_BY_CHN;


typedef struct tagBC_IPADDR{
    char    sIpV4[16];
    char    sIpV6[128];
} BC_IPADDR, *LPBC_IPADDR;


typedef struct tagBC_LOG_INFO{
    BC_TIME     	 strLogTime;
    int              iMajorType;
    int              iMinorType;
    char             sPanelUser[BC_MAX_NAME_LEN];
    char             sNetUser[BC_MAX_NAME_LEN];
    BC_IPADDR   	 struRemoteHostAddr;
    int              iParaType;
    int              iChannel;
    int              iDiskNumber;
    int              iAlarmInPort;
    int              iAlarmOutPort;
    int              iInfoLen;
    char             sInfo[BC_LOG_INFO_LEN];
} BC_LOG_INFO,*LPBC_LOG_INFO;

//
typedef struct tagBC_BootPWDState{
    bool bPwdState;         //
} BC_BootPWDState,*LPBC_BootPWDState;

typedef struct tagBC_FILECUT{
    long             lChannel;
    BC_TIME          struStartTime;
    BC_TIME          struStopTime;
    char			 sDVRFileName[128];
} BC_FILECUT,*LPBC_FILECUT;

typedef struct tagBC_RECFILE_DETAIL_INFO
{
    int	 iChannel;	// -1
    char cRecType[32]; // 0xff, 0:no, 1:normal, 2:alarm
} BC_RECFILE_DETAIL_INFO;

typedef struct tag_BC_RECFILE_SCHEDULE
{
    BC_TIME startTime;
    BC_TIME endTime;
    BC_RECFILE_DETAIL_INFO items[16];
} BC_RECFILE_SCHEDULE;


typedef enum
{
    BC_CHANNELS_STATE_DISCONNETC_E,
    BC_CHANNELS_STATE_CONNETC_E,
    
} BC_CHANNELS_STATE_E;

typedef enum
{
    BC_CHANNELS_TREND_NOCHANGE_E,
    BC_CHANNELS_TREND_CHANGE_E,
} BC_CHANNELS_TREND_E;

typedef struct
{
    int iChannel;
    BC_CHANNELS_STATE_E eState;
    BC_CHANNELS_TREND_E eTrend;
    bool supportExtenStream;
} BC_CHANNEL_CONTENT_INFO;


typedef struct
{
    BC_CHANNEL_CONTENT_INFO item[BC_MAX_CHANNEL];
} BC_CHANNEL_CONTENT_INFO_TABLE;



#if 0
typedef void (CALLBACK* ChannelChangeCallBack)(
                                               long lUserID,
                                               BC_Channel_Change_Info *ChannelInfo
                                               );

#endif
typedef struct tagBC_VsAlarmInCfg
{
    int  iChannel;
    int  iEnableVsAlarm;								//0-NO 1-YES
    BC_HANDLEEXCEPTION vsalarm_handletype;			//alrmout type
    int  iInvalid;
    int  iTimeTable[7][24];		//alramin type
    char cRelRecordChan[64];  			//MD Record eanble;
    char cRes[128];
} BC_VsAlarmInCfg,*PBC_VsAlarmInCfg;

typedef struct tagBC_Rectangle{
    int    iTopLeftX;				//cover TopLeftX
    int    iTopLeftY;				//cover TopLeftY
    int    iWidth;					//cover area Width
    int    iHeight;				//cover aread  High
} BC_Rectangle;

typedef struct tagBC_FdAlarmInCfg
{
    int  iChannel;
    int  iEnableFdAlarm;								//0-NO 1-YES
    BC_HANDLEEXCEPTION fdalarm_handletype;			//alrmout type
    int  iInvalid;
    int  iTimeTable[7][24];		//alramin type
    char cRelRecordChan[64];  			//MD Record eanble;
    BC_Rectangle fd_rectangle;
    char cRes[128];
} BC_FdAlarmInCfg,*PBC_FdAlarmInCfg;

typedef struct tagBC_IdAlarmInCfg
{
    int  iChannel;
    int  iEnableIdAlarm;								//0-NO 1-YES
    BC_HANDLEEXCEPTION idalarm_handletype;			//alrmout type
    int  iInvalid;
    int  iTimeTable[7][24];		//alramin type
    char cRelRecordChan[64];  			//MD Record eanble;
    BC_Rectangle id_rectangle;
    char cRes[128];
} BC_IdAlarmInCfg,*PBC_IdAlarmInCfg;

typedef struct tagBC_AUTO_UPDATE
{
    int iEnable;
} BC_AUTO_UPDATE, *PBC_AUTO_UPDATE;

typedef struct tag_BC_ONLINE_NEW_FW_INFO
{
    int iHasNewFirmware;
    int iIsMultiDeviceUpdate;
} BC_ONLINE_NEW_FW_INFO, *PBC_ONLINE_NEW_FW_INFO;


typedef enum
{
    BC_ABILITY_MODULE_SYSTEM_E,
    BC_ABILITY_MODULE_STREAMING_E,
    BC_ABILITY_MODULE_RECORD_E,
    BC_ABILITY_MODULE_NET_E,
    BC_ABILITY_MODULE_PTZ_E,
    BC_ABILITY_MODULE_IO_V20_E,
    BC_ABILITY_MODULE_ALARM_E,
    BC_ABILITY_MODULE_IMAGE_E,
    BC_ABILITY_MODULE_VIDEO_E,
    BC_ABILITY_MODULE_AUDIO_E,
    BC_ABILITY_MODULE_SECURITY_E,
    BC_ABILITY_MODULE_REPLAY_E,
    BC_ABILITY_MODULE_DISK_E,
    
} BC_ABILITY_MODULE_E;



typedef struct
{
    int  iRegisterHandle;
    char cUid[128];
    char cUidKey[128];
    char cRes[128];
} BC_PUSH_RSP_INFO;


typedef struct
{
    char cToken[512];
    char cPhoneType[128];
    char cClientid[128];
    char cRes[128];
} BC_PUSH_INFO;


typedef enum
{
    BC_RF_ALARM_TYPE_OUTHOME,
    BC_RF_ALARM_TYPE_INHOME,
    BC_RF_ALARM_TYPE_SLEEP,
    BC_RF_ALARM_TYPE_BUTT
    
} BC_RF_ALARM_TYPE_E;

typedef struct
{
    int iEnable;
    BC_RF_ALARM_TYPE_E eRfType;
} BC_RFSENSOR_ALARM_INFO;

typedef enum {
    
    BC_ONLINE_UPDATE_NORMAL = 0,
    BC_ONLINE_UPDATE_FORCE
} BC_ONLINE_UPDATE_TYPE_E;

typedef struct {
    
    int iNeedUpdate;
    BC_ONLINE_UPDATE_TYPE_E type;
} BC_ONLINE_UPDATE;


typedef enum
{
    BC_ONLINE_UPDATE_STATUS_NONE = 0,
    BC_ONLINE_UPDATE_STATUS_NEED_UPDATE,
    BC_ONLINE_UPDATE_STATUS_WAIT_DOWNLOAD,
    BC_ONLINE_UPDATE_STATUS_DOWNLOADING,
    BC_ONLINE_UPDATE_STATUS_UPDATING,
    BC_ONLINE_UPDATE_STATUS_STOPPED,
    BC_ONLINE_UPDATE_STATUS_TIMEOUT,
    BC_ONLINE_UPDATE_STATUS_FINISHED,
    BC_ONLINE_UPDATE_STATUS_UPDATE_FAILED,
    BC_ONLINE_UPDATE_STATUS_IMG_ERROR
}BC_ONLINE_UPDATE_STATUS_E;

typedef struct
{
    int iPacketSize;       // packet  size  (KB)
    int iDownloadSize;     //download size (KB)
    BC_ONLINE_UPDATE_STATUS_E eState;
    char cVersion[BC_VERSION_INFO_LEN];
} BC_MULTI_UPDATE_STATUS;

typedef struct
{
    int iChannel;
    BC_MULTI_UPDATE_STATUS state;
} BC_MULTI_UPDATE_STATUS_ITEM;

typedef struct
{
    int iSize;
    BC_MULTI_UPDATE_STATUS_ITEM items[BC_MAX_CHANNEL];
} BC_MULTI_UPDATE_STATUS_LIST;

typedef struct
{
    BC_ONLINE_UPDATE_STATUS_E  iState;
    int  iPacketSize;                   // packet  size  (KB)
    int  iDownloadSize;                 // download size (KB)
    
    int iIsMultiDeviceUpdate;
    BC_MULTI_UPDATE_STATUS deviceState;
    BC_MULTI_UPDATE_STATUS_LIST channelsState;
}BC_ONLINE_UPDATE_STATUS;


typedef struct
{
    char cSourceFileName[BC_MAX_FILE_LEN];
    int iUpgradeConfig;
    unsigned int uFileSize;
    unsigned int uCurSize;
} BC_UPGRADE_FILE_INFO;


typedef  struct
{
    char cSourceFileName[BC_MAX_FILE_LEN];
    char cSaveFileName[BC_MAX_FILE_LEN];
    unsigned int uFileSize;
    unsigned int uCurSize;
} BC_CONFIG_FILE_INFO;



//log file infomation
typedef struct
{
    unsigned int version;
    unsigned int curpos;
} BC_LOG_HEADER;

typedef struct tag_log_item_t
{
    int time;
    char cUser[32];
    int major;
    int minor;
    int param;
} BC_LOG_ITEM;

typedef enum
{
    BC_LOG_MAJOR_OP = 0,
    BC_LOG_MAJOR_EXP,
    BC_LOG_MAJOR_ALARM,
    BC_LOG_MAJOR_INFO,
    BC_LOG_MAJOR_BUTT,
} BC_LOG_MAJOR_TYPE_E;

typedef enum
{
    BC_LOG_MINOR_STARTUP = 0,
    BC_LOG_MINOR_SHUTDOWN,
    BC_LOG_MINOR_RESTART,
    BC_LOG_MINOR_LOGIN,
    BC_LOG_MINOR_LOGOUT,
    BC_LOG_MINOR_LOCALCONFIG,
    BC_LOG_MINOR_REMOTECONFIG,
    BC_LOG_MINOR_UPDATE,
    BC_LOG_MINOR_MANUAL_STARTREC,
    BC_LOG_MINOR_MANUAL_STOPREC,
    BC_LOG_MINOR_SCHED_STARTREC,
    BC_LOG_MINOR_SCHED_STOPREC,
    BC_LOG_MINOR_CTRLPTZ,
    BC_LOG_MINOR_MANUALALARM,
    BC_LOG_MINOR_FORMATDISK,
    BC_LOG_MINOR_PLAYBACK,
    BC_LOG_MINOR_EXPORT_CFG,
    BC_LOG_MINOR_IMPORT_CFG,
    BC_LOG_MINOR_BAK,
    BC_LOG_MINOR_ADD_DISK,
    BC_LOG_MINOR_DEL_DISK,
    BC_LOG_MINOR_SET_DISK,
    BC_LOG_MINOR_RESTORE_CONFIG,
    BC_LOG_MINOR_CLEAR_LOG,
    BC_LOG_MINOR_OP_BUTT,
    BC_LOG_MINOR_BUTT,
} BC_LOG_MINOR_OP_E;

typedef enum
{
    BC_LOG_MINOR_ILLEGAL = 0,
    BC_LOG_MINOR_DISK_FULL,
    BC_LOG_MINOR_DISK_ERR,
    BC_LOG_MINOR_IP,
    BC_LOG_MINOR_DISCONNECT,
    BC_LOG_MINOR_REC_EXP,
    BC_LOG_MINOR_CODEC_FATAL,
    BC_LOG_MINOR_VPASS_FATAL,
    BC_LOG_MINOR_EXP_BUTT,
} BC_LOG_MINOR_EXP_E;

typedef enum
{
    /*alarm*/
    BC_LOG_MINOR_VL = 0,
    BC_LOG_MINOR_ALARMIN,
    BC_LOG_MINOR_ALARMOUT,
    BC_LOG_MINOR_MD,
    BC_LOG_MINOR_BLIND,
    BC_LOG_MINOR_ALARM_BUTT,
} BC_LOG_MINOR_ALARM_E;

typedef enum
{
    /*info*/
    BC_LOG_MINOR_DISKINFO = 0,
    BC_LOG_MINOR_VERSION,
    
    BC_LOG_MINOR_INFO_BUTT,
} BC_LOG_MINOR_INFO_E;

typedef enum
{
    BC_LOG_PARAM_NONE = 0,
    BC_LOG_PARAM_SYSTEM,
    BC_LOG_PARAM_OUT,
    BC_LOG_PARAM_INPUT,
    BC_LOG_PARAM_REC,
    BC_LOG_PARAM_PLAY,
    BC_LOG_PARAM_ALARM,
    BC_LOG_PARAM_PTZ,
    BC_LOG_PARAM_BUTT,
} BC_LOG_PARAM_TYPE_E;


typedef struct {
    
    char cSaveFileName[BC_MAX_FILE_LEN];
    unsigned int uFileSize;
    unsigned int uCurSize;
} BC_SNAP_INFO;


typedef struct
{
    int     iTopLeftX;
    int     iTopLeftY;
    int     iCropWidth;
    int     iCropHeight;
    int     iMainStreamWidth;
    int     iMainStreamHeight;
    
    int     iSubStreamWidth;
    int     iSubStreamHeight;
    int     iVersion;//bit0: 1 crop width and height cfg
} BC_CROP_CFG;


typedef struct
{
    int             iWidth;  // width for snap
    int             iHeight; // height for snap
    char            cSaveFileName[BC_MAX_FILE_LEN];
    unsigned int    uFileSize;
    unsigned int 	uCurSize;
} BC_CROP_SNAP_INFO;


//alarm report
typedef struct {
    
    bool    bMotion;
} BC_CHANNEL_ALARM_STATUS_REPORT;

typedef struct {
    
    BC_CHANNEL_ALARM_STATUS_REPORT   reportByChannel[BC_MAX_CHANNEL];
} BC_ALARM_STATUS_REPORT;

typedef struct {
    
    int     iExceptionCode;
    int     adcOfPartA;
    int     adcOfPartB;
} BC_DEVICE_EXCEPTION;


// audio talk
typedef enum
{
    BC_DUPLEX_MODE_FULL,
    BC_DUPLEX_MODE_HALF,
} BC_DUPLEX_MODE_E;

typedef enum
{
    BC_FOLLOW_VIDEO_STERAM,
    BC_ONLY_AUDIO_STREAM,
} BC_AUIDO_STREAM_MODE_E;

typedef struct
{
    int                     iSize;
    BC_DUPLEX_MODE_E        modes[8];
} BC_DX_TABLE;

typedef struct
{
    int                     iSize;
    BC_AUIDO_STREAM_MODE_E  modes[8];
} BC_AUDIO_STREAM_TABLE;


typedef enum
{
    BC_AUDIO_TYPE_ADPCM,
    BC_AUDIO_TYPE_G711,
} BC_AUDIO_TYPE_E;

typedef enum
{
    BC_SOUND_TRACK_MONO,
    BC_SOUND_TRACK_STEREO,
} BC_SOUND_TRACK_E;

typedef struct
{
    BC_AUDIO_TYPE_E         eAudioType;
    int                     iSampleRate;
    int                     iSamplePrecision;
    int                     iLengthPerEncoder; //length of stream data which encoded from sample data.
    BC_SOUND_TRACK_E        eSoundTrack;
} BC_AUDIO_CONFIG;


typedef struct
{
    int                     iSize;
    BC_AUDIO_CONFIG         configs[32];
} BC_AUDIO_CONFIG_TABLE;


typedef struct
{
    BC_DX_TABLE             duplexs;
    BC_AUDIO_STREAM_TABLE   audioStreams;
    BC_AUDIO_CONFIG_TABLE   audioConfigs;
} BC_TALK_ABILITY;


typedef struct
{
    BC_DUPLEX_MODE_E        eDuplexMode;
    BC_AUIDO_STREAM_MODE_E  eAudioStreamMode;
    BC_AUDIO_CONFIG         audioConfig;
} BC_TALK_CONFIG;


typedef struct
{
    uint8_t                 *data;
    int                     length;
} BC_TALK_STREAM_DATA;

// ringtone
typedef struct
{
    int iChannel;
    int iMute;  // 0:enable alarm audio  1:mute alarm audio
} BC_MUTE_ALARM_AUDIO;

typedef struct
{
    int iChannel;
    int iTimeout; // default duration of ring down
    int iRingtoneSelect; // 0:use default ringtone, 1:use custom ringtone
} BC_RINGTONE_CFG;

typedef enum
{
    BC_RING_DOWN_TIMES,
    BC_RING_DOWN_CONTINUOUS,
    BC_RING_DOWN_SWITCH,
    BC_RING_DOWN_FROM_RAM,
    BC_RING_DOWN_BUTT = 255,
}BC_RING_DOWN_MODE_E;

/*
 * iDuration:   valid when continuous mode.
 *              -1: use default
 *              0:  ring down one time
 *              >0: ring down <iDuration> seconds
 *              others: do nothing
 * iTimes:      valid when times mode
 *              >0: ring down <iTimes> times cycles
 *              others: do nothing
 * iOnOff:      valid when switch mode
 *              0: turn off Ring Down
 *              1: turn on Ring Down
 */
typedef struct
{
    int iChannel;
    BC_RING_DOWN_MODE_E eRingMode;
    int iDuration;
    int iTimes;
    int iOnOff;
}BC_MANUAL_RING_DOWN;

typedef struct
{
    int iChannel;
    char cSourceFileName[BC_MAX_FILE_LEN];
    char cAdpcmFileName[BC_MAX_FILE_LEN];
    int iFileSize;
    int iCurSize;
}BC_RINGTONE_FILE_INFO;

typedef struct
{
    int iChannel;
    int iMaxCapacity;//ringtone file max size (KB)
    BC_AUDIO_CONFIG_TABLE audioConfigs;
}BC_RINGTONE_ABILITY;


//push task
typedef struct tagBC_PUSH_TASK
{
    bool                bEnable;
    int                 iInvalid;
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
    int                 iPushVersion; // 0:old  1:new
} BC_PUSH_TASK, *LPBC_PUSH_TASK;


//audio task
typedef struct tagBC_AUDIO_TASK
{
    bool                bEnable;
    int                 iInvalid;
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
} BC_AUDIO_TASK, *LPBC_AUDIO_TASK;


//cloud settings
#define BC_MAX_AUTH_TOKEN_LEN               128
typedef struct
{
    char cAuthToken[BC_MAX_AUTH_TOKEN_LEN];
} BC_BIND_CLOUD;

typedef struct
{
    bool isBinded;
    char cUsername[BC_MAX_ADDR_LEN];
    char cNickname[BC_MAX_NICKNAME_LEN];
} BC_CLOUD_INFO;


typedef struct
{
    int iSize;
    int streamType[8];//-1:invalid 0:main 1:extend 2:sub
} BC_CLOUD_STREAM_TYPE_LIST;

typedef struct
{
    int iAutoUpload;
    int iSupportMultiStream;
    BC_CLOUD_STREAM_TYPE_LIST streamAbility;
    BC_CLOUD_STREAM_TYPE_LIST streamCfg;
} BC_CLOUD_CFG;


//
typedef enum {
    
    BC_RF_SENSITIVITY_LOW,
    BC_RF_SENSITIVITY_MIDDLE,
    BC_RF_SENSITIVITY_HIGH
} BC_RF_SENSITIVITY_E;

// rf alarm cfg
typedef struct tagBC_RF_ALARM_CFG
{
    bool                isCopyTo;
    int                 iRfId;
    bool                bEnable;
    bool                iSupportSensitivity;
    BC_RF_SENSITIVITY_E eSensitivity;
    int                 iSensitivityValue;//1 ~ 100
    int                 iReduceFalseAlarm;//0:disable 1:enable
    int                 iInvalid;
    int                 channelNum;
    int                 triggeredHandleType[BC_MAX_CHANNEL];
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
}BC_RF_ALARM_CFG, *LPBC_RF_ALARM_CFG;


typedef struct
{
    int                 iRfId;
    bool                bEnable;
}BC_RF_ALARM_STATUS;


// battery info
typedef struct
{
    int                 iLowBattery;        // 1:low battery  0:sufficient battery
    int                 iBatteryPercent;    //Battery Percentage
}BC_ELECTRICITY_INFO;


////////////////////////

typedef enum {
    
    BC_P2P_TYPE_UNKNOW          = -1,
    BC_P2P_TYPE_NONE            = 0,
    BC_P2P_TYPE_IOTC            = 1,
    BC_P2P_TYPE_BC              = 2,
    BC_P2P_TYPE_SONG            = 3,
} BC_P2P_TYPE_E;

typedef enum {
    BC_SONG_P2P_TYPE_UNKNOW     = -1,
    BC_SONG_P2P_TYPE_NONE       = 0,
    BC_SONG_P2P_TYPE_KEEN       = 1,
    BC_SONG_P2P_TYPE_CARD       = 2,
    BC_SONG_P2P_TYPE_BASE       = 3,
    BC_SONG_P2P_TYPE_ARGUS_2    = 4,
    BC_SONG_P2P_TYPE_GO         = 5,
    BC_SONG_P2P_TYPE_ARGUS_PRO  = 6,
    BC_SONG_P2P_TYPE_OTHERS     = 255
} BC_SONG_P2P_TYPE_E;

typedef struct
{
    char uid[BC_MAX_UID_LEN];
    char fm_ver[16];
    int batteryType;    // 0: not support. 1:dry battery, 2:charge battery
    int QRCodeType;     // 0: not support. 1: support qr code
    char productName[16];      // product name: "KEEN", "CARD", ...
    BC_SONG_P2P_TYPE_E productType;
} BC_P2P_DEVICE_INFO;

typedef struct
{
    char uid[BC_MAX_UID_LEN];
} BC_P2P_UID_INFO;


typedef struct
{
    int v6_check;
    char server_addr[48];
    char ver[16];
} BC_P2P_DEBUG_INFO;

typedef struct
{
    char content[1024];
} BC_P2P_DETAIL_INFO;

typedef struct
{
    char *content;
    int length;
} BC_P2P_LOG;



// charge battery info
typedef enum
{
    BC_CHARGE_NONE,
    BC_CHARGE_CHARGING,
    BC_CHARGE_COMPLETED
} BC_CHARGE_STATUS_E;

typedef enum
{
    BC_ADAPTER_NONE,
    BC_ADAPTER_ADAPTER,
    BC_ADAPTER_SOLAR_PANELS
} BC_ADAPTER_STATUS_E;

typedef enum
{
    BC_BATTERY_TYPE_DRY,
    BC_BATTERY_TYPE_CHARGE
} BC_BATTERY_TYPE_E;

typedef struct
{
    int iChannel;
    BC_BATTERY_TYPE_E eBatteryType;
    
    int iVoltage;
    int iCurrent;
    int iTemperature;
    int iBatteryPercent;
    int iLowPowerFlag; //0:not, 1:low power
    BC_CHARGE_STATUS_E eChargeStatus;
    BC_ADAPTER_STATUS_E eAdapterStatus;
    
    int iExceptionCode;
    int adcOfPartA;
    int adcOfPartB;
} BC_BATTERY_INFO;

typedef struct
{
    int size;
    BC_BATTERY_INFO infoList[BC_MAX_CHANNEL];
} BC_BATTERY_INFO_LIST;

typedef struct
{
    int iChannel;
    int iDays;
    int iBatRemain[30]; // 0% ~ 100%
} BC_BATTERY_ANALYSIS;


#define BC_BATTERY_HEARTBEAT_MAX_DAYS       28

//http data for battery info
typedef struct {
    
    // ircur type -> 0: black and white, 1: color, 2: auto
    int durationOfBlackAndWhite;
    int durationOfColor;
    int durationOfAuto;
    
} BC_BATTERY_IRCUT;

typedef struct {
    
    // last days information
//    int iSize;
//    int heartbeats[BC_BATTERY_HEARTBEAT_MAX_DAYS];
//    int rfAlarms[BC_BATTERY_HEARTBEAT_MAX_DAYS];
//    BC_BATTERY_IRCUT ircuts[BC_BATTERY_HEARTBEAT_MAX_DAYS];
    
    //
    int maxLifeForColor;
    int maxLifeForBlackAndWhite;
    int iLowBattery;        // 1:low battery  0:sufficient battery.   -1:invalid data
    int iBatteryPercent;    // Battery Percentage   -1:invalid data
    int iBatState;          // 0: none, 1: exception
    int iBatAdcA;
    int iBatAdcB;
    
    BC_CHARGE_STATUS_E eChargeStatus;
    BC_ADAPTER_STATUS_E eAdapterStatus;
    
} BC_BATTERY_DETAIL_INFO;

//reconnect
typedef struct
{
    bool isRelayConnection;
} BC_RECONNECT_INFO;

//online device (base station)
typedef struct
{
    int     iChannel;
    char    cName[BC_MAX_NAME_LEN];
    char    cUID[BC_MAX_UID_LEN];
} BC_BASE_ONLINE_DEVICE;

typedef struct
{
    int size;
    BC_BASE_ONLINE_DEVICE    device[BC_MAX_CHANNEL];
} BC_BASE_ONLINE_DEVICE_INFO;


typedef struct
{
    int                 iChannel;
    int                 iRfId;
} BC_BASE_RF_ALARM_REQUEST;

typedef struct
{
    bool                isCopyTo;
    int                 iChannel;
    int                 iRfId;
    bool                bEnable;
    bool                iSupportSensitivity;
    BC_RF_SENSITIVITY_E eSensitivity;
    int                 iInvalid;
    int                 channelNum;
    int                 triggeredHandleType[BC_MAX_CHANNEL];
    int                 iTimeTable[BC_MAX_DAYS][BC_MAX_TIMESEGMENT];
}BC_BASE_RF_ALARM_CFG, *LPBC_BASE_RF_ALARM_CFG;

typedef struct
{
    int iMode;      // 1: work with BASE, 2: work solo
    char cSsid[128];
    char cKey[128];
} BC_BASE_WIFI_QRCODE;


typedef struct
{
    int iChannel;
    bool bContinuePreview;
    BC_STREAM_TYPE_E  eStreamType;
} BC_BASE_LIVE_TIME;

typedef struct
{
    int size;
    BC_BASE_LIVE_TIME   liveTime[64];
} BC_BASE_LIVE_TIME_INFO;



//param by get or write config
typedef struct {
    int channelId;
    int bcCmd;
    int cmdIdx;
    uint8_t data[BC_MAX_CONFIG_BUF_SIZE];
    int dataLen;
} CONFIG_PARAM;


//call back function
typedef struct {
    int bcCmd;
    int cmdIdx;
    int bcRspCode;
    int handleId;
    char *pRspData;
    unsigned long dataLen;
} BC_CMD_DATA;

typedef void(*pBC_CallBackFunc)(void *userData, BC_CMD_DATA cmdData);

typedef struct {
    pBC_CallBackFunc bcFunc;
    void *userData;
} BC_CallBackFunc_t;



// Diagnose Log
#define BC_DIAGNOSE_LOG_MAX_SIZE                16
#define BC_DIAGNOSE_LOG_STRING_MAX_LENGTH       256
typedef struct {
    char content[BC_DIAGNOSE_LOG_STRING_MAX_LENGTH];
} BC_DIAGNOSE_LOG;

typedef struct {
    BC_DIAGNOSE_LOG logs[BC_DIAGNOSE_LOG_MAX_SIZE];
    int sizeOfLogs;
} BC_DIAGNOSE_LOGS_LIST;


// CRYPT
#define BC_CRYPT_MAX_LEN                        ((0x10<<2)-1) // must be ((16<<n)-1)
#define BASE64_OUT_SIZE(s)                      (((s)+2)/3*4)
typedef struct {
    char buffer[BASE64_OUT_SIZE(BC_CRYPT_MAX_LEN+1)+1];
    uint8_t len;
} BC_CRYPT_BUF;


#endif

