"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BC_CMD_E;
(function (BC_CMD_E) {
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_OSD"] = 2001] = "E_BC_CMD_GET_OSD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_OSD"] = 2002] = "E_BC_CMD_SET_OSD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_COLOR"] = 2003] = "E_BC_CMD_GET_COLOR";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_COLOR"] = 2004] = "E_BC_CMD_SET_COLOR";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_VILOST"] = 2005] = "E_BC_CMD_GET_VILOST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_VILOST"] = 2006] = "E_BC_CMD_SET_VILOST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_MOTION"] = 2007] = "E_BC_CMD_GET_MOTION";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_MOTION"] = 2008] = "E_BC_CMD_SET_MOTION";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_BLIND"] = 2009] = "E_BC_CMD_GET_BLIND";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_BLIND"] = 2010] = "E_BC_CMD_SET_BLIND";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_COVER"] = 2011] = "E_BC_CMD_GET_COVER";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_COVER"] = 2012] = "E_BC_CMD_SET_COVER";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CAMERA"] = 2013] = "E_BC_CMD_GET_CAMERA";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_CAMERA"] = 2014] = "E_BC_CMD_SET_CAMERA";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_DST"] = 2015] = "E_BC_CMD_GET_DST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_DST"] = 2016] = "E_BC_CMD_SET_DST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_EMAIL"] = 2017] = "E_BC_CMD_GET_EMAIL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_EMAIL"] = 2018] = "E_BC_CMD_SET_EMAIL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_COMPRESS"] = 2019] = "E_BC_CMD_GET_COMPRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_COMPRESS"] = 2020] = "E_BC_CMD_SET_COMPRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_SYS"] = 2021] = "E_BC_CMD_GET_SYS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_SYS"] = 2022] = "E_BC_CMD_SET_SYS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_VERSION"] = 2023] = "E_BC_CMD_GET_VERSION";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ENC_PROFILE"] = 2024] = "E_BC_CMD_GET_ENC_PROFILE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_OUTPUT"] = 2025] = "E_BC_CMD_GET_OUTPUT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_OUTPUT"] = 2026] = "E_BC_CMD_SET_OUTPUT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ADVRECORD"] = 2027] = "E_BC_CMD_GET_ADVRECORD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ADVRECORD"] = 2028] = "E_BC_CMD_SET_ADVRECORD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RECORDSCHED"] = 2029] = "E_BC_CMD_GET_RECORDSCHED";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_RECORDSCHED"] = 2030] = "E_BC_CMD_SET_RECORDSCHED";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_LINKTYPE"] = 2033] = "E_BC_CMD_GET_LINKTYPE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_LINKTYPE"] = 2034] = "E_BC_CMD_SET_LINKTYPE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PPPOECFG"] = 2035] = "E_BC_CMD_GET_PPPOECFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_PPPOECFG"] = 2036] = "E_BC_CMD_SET_PPPOECFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_LOCAL"] = 2037] = "E_BC_CMD_GET_LOCAL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_LOCAL"] = 2038] = "E_BC_CMD_SET_LOCAL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_UPNPSTATE"] = 2039] = "E_BC_CMD_GET_UPNPSTATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_UPNPSTATE"] = 2040] = "E_BC_CMD_SET_UPNPSTATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_NORMAL_PORT"] = 2041] = "E_BC_CMD_GET_NORMAL_PORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_NORMAL_PORT"] = 2042] = "E_BC_CMD_SET_NORMAL_PORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_NTPCFG"] = 2043] = "E_BC_CMD_GET_NTPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_NTPCFG"] = 2044] = "E_BC_CMD_SET_NTPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_DDNSCFG"] = 2045] = "E_BC_CMD_GET_DDNSCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_DDNSCFG"] = 2046] = "E_BC_CMD_SET_DDNSCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_IPFILTER"] = 2047] = "E_BC_CMD_GET_IPFILTER";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_IPFILTER"] = 2048] = "E_BC_CMD_SET_IPFILTER";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_HDDFULL_EXPCFG"] = 2049] = "E_BC_CMD_GET_HDDFULL_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_HDDFULL_EXPCFG"] = 2050] = "E_BC_CMD_SET_HDDFULL_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_HDDERR_EXPCFG"] = 2051] = "E_BC_CMD_GET_HDDERR_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_HDDERR_EXPCFG"] = 2052] = "E_BC_CMD_SET_HDDERR_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_NETDISCONNECT_EXPCFG"] = 2053] = "E_BC_CMD_GET_NETDISCONNECT_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_NETDISCONNECT_EXPCFG"] = 2054] = "E_BC_CMD_SET_NETDISCONNECT_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_IPCONFLICT_EXPCFG"] = 2055] = "E_BC_CMD_GET_IPCONFLICT_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_IPCONFLICT_EXPCFG"] = 2056] = "E_BC_CMD_SET_IPCONFLICT_EXPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PTZCFG"] = 2057] = "E_BC_CMD_GET_PTZCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_PTZCFG"] = 2058] = "E_BC_CMD_SET_PTZCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_INIT_HDD"] = 2059] = "E_BC_CMD_INIT_HDD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_HDD_CFG"] = 2060] = "E_BC_CMD_GET_HDD_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_AUTOREBOOT_CFG"] = 2061] = "E_BC_CMD_GET_AUTOREBOOT_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_AUTOREBOOT_CFG"] = 2062] = "E_BC_CMD_SET_AUTOREBOOT_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PERFORMANCE"] = 2063] = "E_BC_CMD_GET_PERFORMANCE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_FTPCFG"] = 2064] = "E_BC_CMD_GET_FTPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_FTPCFG"] = 2065] = "E_BC_CMD_SET_FTPCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_FTPTASK"] = 2066] = "E_BC_CMD_GET_FTPTASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_FTPTASK"] = 2067] = "E_BC_CMD_SET_FTPTASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_USERCFG"] = 2068] = "E_BC_CMD_GET_USERCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_USERCFG"] = 2069] = "E_BC_CMD_SET_USERCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_USER_ONLINE"] = 2070] = "E_BC_CMD_GET_USER_ONLINE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_USER_ONLINE"] = 2071] = "E_BC_CMD_SET_USER_ONLINE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REPLAY_SEEK_TIME"] = 2072] = "E_BC_CMD_REPLAY_SEEK_TIME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_WIFI_INFO"] = 2073] = "E_BC_CMD_GET_WIFI_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_WIFI_INFO"] = 2074] = "E_BC_CMD_SET_WIFI_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ALARMINCFG"] = 2075] = "E_BC_CMD_GET_ALARMINCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ALARMINCFG"] = 2076] = "E_BC_CMD_SET_ALARMINCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ALARMOUTCFG"] = 2077] = "E_BC_CMD_GET_ALARMOUTCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ALARMOUTCFG"] = 2078] = "E_BC_CMD_SET_ALARMOUTCFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_BOOTPWD_STATE"] = 2079] = "E_BC_CMD_GET_BOOTPWD_STATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_BOOTPWD_STATE"] = 2080] = "E_BC_CMD_SET_BOOTPWD_STATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_VTALARMIN"] = 2081] = "E_BC_CMD_GET_VTALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_VTALARMIN"] = 2082] = "E_BC_CMD_SET_VTALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_FDALARMIN"] = 2083] = "E_BC_CMD_GET_FDALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_FDALARMIN"] = 2084] = "E_BC_CMD_SET_FDALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_IDALARMIN"] = 2085] = "E_BC_CMD_GET_IDALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_IDALARMIN"] = 2086] = "E_BC_CMD_SET_IDALARMIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_LOGIN"] = 2087] = "E_BC_CMD_LOGIN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_LOGOUT"] = 2088] = "E_BC_CMD_LOGOUT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REALPLAY"] = 2089] = "E_BC_CMD_REALPLAY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOPREALPLAY"] = 2090] = "E_BC_CMD_STOPREALPLAY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_UPGRADE"] = 2091] = "E_BC_CMD_UPGRADE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_PLAYBACKBYNAME"] = 2092] = "E_BC_CMD_PLAYBACKBYNAME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOPPLAYBACKBYNAME"] = 2093] = "E_BC_CMD_STOPPLAYBACKBYNAME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_PLAYBACKBYTIME"] = 2094] = "E_BC_CMD_PLAYBACKBYTIME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOPPLAYBACKBYTIME"] = 2095] = "E_BC_CMD_STOPPLAYBACKBYTIME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD"] = 2096] = "E_BC_CMD_DOWNLOAD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD_STOP"] = 2097] = "E_BC_CMD_DOWNLOAD_STOP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GETLOG"] = 2098] = "E_BC_CMD_GETLOG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_EXPORT"] = 2099] = "E_BC_CMD_EXPORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IMPORT"] = 2100] = "E_BC_CMD_IMPORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REBOOT"] = 2101] = "E_BC_CMD_REBOOT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RECFILEDATE"] = 2102] = "E_BC_CMD_GET_RECFILEDATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_RESTORE"] = 2103] = "E_BC_CMD_RESTORE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_EMAILTEST"] = 2104] = "E_BC_CMD_EMAILTEST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SHUTDOWN"] = 2105] = "E_BC_CMD_SHUTDOWN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_MANALARM"] = 2106] = "E_BC_CMD_GET_MANALARM";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_MANALARM"] = 2107] = "E_BC_CMD_SET_MANALARM";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_PTZ_CONTROL"] = 2108] = "E_BC_CMD_PTZ_CONTROL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_PUSH_ADD"] = 2109] = "E_BC_CMD_PUSH_ADD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_PUSH_DEL"] = 2110] = "E_BC_CMD_PUSH_DEL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RFSENSOR"] = 2111] = "E_BC_CMD_GET_RFSENSOR";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_RFSENSOR"] = 2112] = "E_BC_CMD_SET_RFSENSOR";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SEARCH_RECFILES"] = 2113] = "E_BC_CMD_SEARCH_RECFILES";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_CONNECTION_TEST"] = 2114] = "E_BC_CMD_CONNECTION_TEST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_RECONNECT"] = 2115] = "E_BC_CMD_RECONNECT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ABILITY"] = 2116] = "E_BC_CMD_GET_ABILITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IFRAME_PREVIEW"] = 2117] = "E_BC_CMD_IFRAME_PREVIEW";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IFRAME_REPLAY"] = 2118] = "E_BC_CMD_IFRAME_REPLAY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_CAMERA_STATE"] = 2119] = "E_BC_CMD_CAMERA_STATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ADVANCED_PORTS"] = 2120] = "E_BC_CMD_GET_ADVANCED_PORTS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ADVANCED_PORTS"] = 2121] = "E_BC_CMD_SET_ADVANCED_PORTS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_UID"] = 2122] = "E_BC_CMD_GET_UID";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_ONLINE_UPDATE"] = 2123] = "E_BC_CMD_ONLINE_UPDATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_FORCE_PASSWORD"] = 2124] = "E_BC_CMD_FORCE_PASSWORD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ABILITY"] = 2125] = "E_BC_CMD_SET_ABILITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PRESET"] = 2126] = "E_BC_CMD_GET_PRESET";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_PRESET"] = 2127] = "E_BC_CMD_SET_PRESET";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CRUISE"] = 2128] = "E_BC_CMD_GET_CRUISE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_CRUISE"] = 2129] = "E_BC_CMD_SET_CRUISE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_DEFAULT_CAMERA"] = 2130] = "E_BC_CMD_GET_DEFAULT_CAMERA";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_UPGRADE_PROGRESS"] = 2131] = "E_BC_CMD_UPGRADE_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_WIFI_TEST"] = 2133] = "E_BC_CMD_WIFI_TEST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_FTP_TEST"] = 2134] = "E_BC_CMD_FTP_TEST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_SCAN_AP"] = 2135] = "E_BC_CMD_GET_SCAN_AP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_EXPORT_PROGRESS"] = 2136] = "E_BC_CMD_EXPORT_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IMPORT_PROGRESS"] = 2137] = "E_BC_CMD_IMPORT_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_LOCAL_RECORD"] = 2138] = "E_BC_CMD_LOCAL_RECORD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOP_LOCAL_RECORD"] = 2139] = "E_BC_CMD_STOP_LOCAL_RECORD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_CONFIG_LIVE"] = 2140] = "E_BC_CMD_CONFIG_LIVE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOP_CONFIG_LIVE"] = 2141] = "E_BC_CMD_STOP_CONFIG_LIVE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_START_ALARM_REPORT"] = 2142] = "E_BC_CMD_START_ALARM_REPORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_STOP_ALARM_REPORT"] = 2143] = "E_BC_CMD_STOP_ALARM_REPORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_ALARM_REPORT"] = 2144] = "E_BC_CMD_ALARM_REPORT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD_CUT"] = 2145] = "E_BC_CMD_DOWNLOAD_CUT";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD_CUT_STOP"] = 2146] = "E_BC_CMD_DOWNLOAD_CUT_STOP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD_PROGRESS"] = 2147] = "E_BC_CMD_DOWNLOAD_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DOWNLOAD_CUT_PROGRESS"] = 2148] = "E_BC_CMD_DOWNLOAD_CUT_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CAMERA_CFG"] = 2149] = "E_BC_CMD_GET_CAMERA_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_CAMERA_CFG"] = 2150] = "E_BC_CMD_SET_CAMERA_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_LED_STATE"] = 2151] = "E_BC_CMD_GET_LED_STATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_LED_STATE"] = 2152] = "E_BC_CMD_SET_LED_STATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PTOP_CFG"] = 2153] = "E_BC_CMD_GET_PTOP_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_PTOP_CFG"] = 2154] = "E_BC_CMD_SET_PTOP_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_TALK_OPEN"] = 2155] = "E_BC_CMD_TALK_OPEN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_TALK_CLOSE"] = 2156] = "E_BC_CMD_TALK_CLOSE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_TALK_ABILITY"] = 2157] = "E_BC_CMD_GET_TALK_ABILITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_TALK_FDX_STREAM"] = 2158] = "E_BC_CMD_TALK_FDX_STREAM";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SNAP"] = 2159] = "E_BC_CMD_SNAP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GOTO_PRESET"] = 2160] = "E_BC_CMD_GOTO_PRESET";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_USER_ALL_ABILITY"] = 2161] = "E_BC_CMD_SET_USER_ALL_ABILITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_WIFI_SIGNAL"] = 2162] = "E_BC_CMD_GET_WIFI_SIGNAL";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_AUTO_UPDATE"] = 2163] = "E_BC_CMD_GET_AUTO_UPDATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_AUTO_UPDATE"] = 2164] = "E_BC_CMD_SET_AUTO_UPDATE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ONLINE_NEW_FIRMWARE"] = 2165] = "E_BC_CMD_GET_ONLINE_NEW_FIRMWARE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_RTMP_START"] = 2166] = "E_BC_CMD_RTMP_START";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_RTMP_STOP"] = 2167] = "E_BC_CMD_RTMP_STOP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_EMAIL_TASK"] = 2168] = "E_BC_CMD_GET_EMAIL_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_EMAIL_TASK"] = 2169] = "E_BC_CMD_SET_EMAIL_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_PUSH_TASK"] = 2170] = "E_BC_CMD_GET_PUSH_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_PUSH_TASK"] = 2171] = "E_BC_CMD_SET_PUSH_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RF_CFG"] = 2172] = "E_BC_CMD_GET_RF_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_RF_CFG"] = 2173] = "E_BC_CMD_SET_RF_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_BATTERY_ELECTRICITY"] = 2174] = "E_BC_CMD_GET_BATTERY_ELECTRICITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_RF_ALARM_STATUS"] = 2175] = "E_BC_CMD_SET_RF_ALARM_STATUS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_ONLINE_UPDATE_STATUS"] = 2176] = "E_BC_CMD_GET_ONLINE_UPDATE_STATUS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_AUTO_FOCUS"] = 2177] = "E_BC_CMD_GET_AUTO_FOCUS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_AUTO_FOCUS"] = 2178] = "E_BC_CMD_SET_AUTO_FOCUS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CROP_CFG"] = 2179] = "E_BC_CMD_GET_CROP_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_CROP_CFG"] = 2180] = "E_BC_CMD_SET_CROP_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_CROP_SNAP"] = 2181] = "E_BC_CMD_CROP_SNAP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_DEVICE_SLEEP"] = 2182] = "E_BC_CMD_DEVICE_SLEEP";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_AUDIO_TASK"] = 2183] = "E_BC_CMD_GET_AUDIO_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_AUDIO_TASK"] = 2184] = "E_BC_CMD_SET_AUDIO_TASK";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BATTERY_HEARTBEAT_RSP"] = 2185] = "E_BC_CMD_BATTERY_HEARTBEAT_RSP";
    /*delete 2186 ~ 2190 cmd*/
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_AP_MODE_INFO"] = 2191] = "E_BC_CMD_GET_AP_MODE_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REPORT_DEVICE_EXCEPTION"] = 2192] = "E_BC_CMD_REPORT_DEVICE_EXCEPTION";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_REPORT_ONLINE_DEVICE"] = 2193] = "E_BC_CMD_BASE_REPORT_ONLINE_DEVICE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_DELETE_ONLINE_DEVICE"] = 2194] = "E_BC_CMD_BASE_DELETE_ONLINE_DEVICE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_GET_RF_CFG"] = 2195] = "E_BC_CMD_BASE_GET_RF_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_SET_RF_CFG"] = 2196] = "E_BC_CMD_BASE_SET_RF_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_GET_WIFI_QRCODE"] = 2197] = "E_BC_CMD_BASE_GET_WIFI_QRCODE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_RESPONSE_LIVE_TIME"] = 2198] = "E_BC_CMD_BASE_RESPONSE_LIVE_TIME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_SET_RF_ALARM_STATUS"] = 2199] = "E_BC_CMD_BASE_SET_RF_ALARM_STATUS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REPORT_BATTERY_INFO_LIST"] = 2200] = "E_BC_CMD_REPORT_BATTERY_INFO_LIST";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_BATTERY_INFO"] = 2201] = "E_BC_CMD_GET_BATTERY_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_DEVICE_NAME"] = 2202] = "E_BC_CMD_SET_DEVICE_NAME";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_ISP_DAY_NIGHT_MODE"] = 2203] = "E_BC_CMD_SET_ISP_DAY_NIGHT_MODE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BASE_SET_WIFI_QRCODE"] = 2204] = "E_BC_CMD_BASE_SET_WIFI_QRCODE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_3G_4G_INFO"] = 2205] = "E_BC_CMD_GET_3G_4G_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_REPORT_3G_4G_INFO"] = 2206] = "E_BC_CMD_REPORT_3G_4G_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_SIM_MODULE_INFO"] = 2207] = "E_BC_CMD_GET_SIM_MODULE_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_SIM_MODULE_INFO"] = 2208] = "E_BC_CMD_SET_SIM_MODULE_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_BATTERY_ANALYSIS"] = 2209] = "E_BC_CMD_GET_BATTERY_ANALYSIS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CLOUD_INFO"] = 2210] = "E_BC_CMD_GET_CLOUD_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BIND_CLOUD"] = 2211] = "E_BC_CMD_BIND_CLOUD";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_CLOUD_CFG"] = 2212] = "E_BC_CMD_GET_CLOUD_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_CLOUD_CFG"] = 2213] = "E_BC_CMD_SET_CLOUD_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RINGTONE_FILE_INFO"] = 2214] = "E_BC_CMD_GET_RINGTONE_FILE_INFO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IMPORT_RINGTONE"] = 2215] = "E_BC_CMD_IMPORT_RINGTONE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_IMPORT_RINGTONE_PROGRESS"] = 2216] = "E_BC_CMD_IMPORT_RINGTONE_PROGRESS";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SAVE_RINGTONE"] = 2217] = "E_BC_CMD_SAVE_RINGTONE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_MANUAL_RING_DOWN"] = 2218] = "E_BC_CMD_MANUAL_RING_DOWN";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RINGTONE_CFG"] = 2219] = "E_BC_CMD_GET_RINGTONE_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SET_RINGTONE_CFG"] = 2220] = "E_BC_CMD_SET_RINGTONE_CFG";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_MUTE_ALARM_AUDIO"] = 2221] = "E_BC_CMD_MUTE_ALARM_AUDIO";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_GET_RINGTONE_ABILITY"] = 2222] = "E_BC_CMD_GET_RINGTONE_ABILITY";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_SEARCH_ALARM_VIDEOS"] = 2223] = "E_BC_CMD_SEARCH_ALARM_VIDEOS";
    // sdk up layer callback use
    BC_CMD_E[BC_CMD_E["E_BC_CMD_CONNECTION_STATE_CHANGE"] = 3001] = "E_BC_CMD_CONNECTION_STATE_CHANGE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_LOGIN_INFO_CHANGE"] = 3002] = "E_BC_CMD_LOGIN_INFO_CHANGE";
    BC_CMD_E[BC_CMD_E["E_BC_CMD_BUTT"] = -1] = "E_BC_CMD_BUTT";
})(BC_CMD_E = exports.BC_CMD_E || (exports.BC_CMD_E = {}));
;
var BC_RSP_CODE_E;
(function (BC_RSP_CODE_E) {
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_OK"] = 0] = "E_BC_RSP_OK";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_NOT_INIT"] = 1] = "E_BC_RSP_NOT_INIT";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_HOST_ERR"] = 2] = "E_BC_RSP_HOST_ERR";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_USER_LIMIT"] = 3] = "E_BC_RSP_USER_LIMIT";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_USER_NOT_EXIST"] = 4] = "E_BC_RSP_USER_NOT_EXIST";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_TIMEOUT"] = 5] = "E_BC_RSP_TIMEOUT";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_SEND_ERR"] = 6] = "E_BC_RSP_SEND_ERR";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_SESSION_LIMIT"] = 7] = "E_BC_RSP_SESSION_LIMIT";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_MALLOC_FAILED"] = 8] = "E_BC_RSP_MALLOC_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CREATE_THREAD_FAILED"] = 9] = "E_BC_RSP_CREATE_THREAD_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_AUTH_FAILED"] = 10] = "E_BC_RSP_AUTH_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_INVALID_SESSIONID"] = 11] = "E_BC_RSP_INVALID_SESSIONID";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_INVALID_HANDLE"] = 12] = "E_BC_RSP_INVALID_HANDLE";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_INVALID_CHNID"] = 13] = "E_BC_RSP_INVALID_CHNID";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_INVALID_USERID"] = 14] = "E_BC_RSP_INVALID_USERID";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_MISS_PARA"] = 15] = "E_BC_RSP_MISS_PARA";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_FILE_CHECK_ERR"] = 16] = "E_BC_RSP_FILE_CHECK_ERR";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_FILE_ACCESS_ERR"] = 17] = "E_BC_RSP_FILE_ACCESS_ERR";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_SYS_BUSY"] = 18] = "E_BC_RSP_SYS_BUSY";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_SDK_ERR"] = 19] = "E_BC_RSP_SDK_ERR";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_PARA_IS_NULL"] = 20] = "E_BC_RSP_PARA_IS_NULL";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CONNECT_FAILED"] = 21] = "E_BC_RSP_CONNECT_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_OLD_VERSION"] = 1001] = "E_BC_RSP_OLD_VERSION";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_WRITE_FAILED"] = 1002] = "E_BC_RSP_WRITE_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_NOT_EXIST"] = 1003] = "E_BC_RSP_NOT_EXIST";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_TEMPORARILY_UNAVAILABLE"] = 1004] = "E_BC_RSP_TEMPORARILY_UNAVAILABLE";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_FILE_NOFIND"] = 1005] = "E_BC_RSP_FILE_NOFIND";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_FILE_NOMOREFILE"] = 1006] = "E_BC_RSP_FILE_NOMOREFILE";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_FILE_EXCEPTION"] = 1007] = "E_BC_RSP_FILE_EXCEPTION";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_NOT_SUPPORT"] = 1008] = "E_BC_RSP_CMD_NOT_SUPPORT";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_UPGRADE_SAME_VER"] = 2001] = "E_BC_RSP_CMD_UPGRADE_SAME_VER";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_UPGRADE_CHECK_FAILED"] = 2002] = "E_BC_RSP_CMD_UPGRADE_CHECK_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_UPGRADE_BUSY"] = 2003] = "E_BC_RSP_CMD_UPGRADE_BUSY";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_UPGRADE_OOM"] = 2004] = "E_BC_RSP_CMD_UPGRADE_OOM";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_FTP_TEST_UNKNOWN_FAILED"] = 4001] = "E_BC_RSP_CMD_FTP_TEST_UNKNOWN_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_FTP_TEST_LOGIN_FAILED"] = 4002] = "E_BC_RSP_CMD_FTP_TEST_LOGIN_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_FTP_TEST_CREATE_FAILED"] = 4003] = "E_BC_RSP_CMD_FTP_TEST_CREATE_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_CMD_FTP_TEST_UPLOAD_FAILED"] = 4004] = "E_BC_RSP_CMD_FTP_TEST_UPLOAD_FAILED";
    BC_RSP_CODE_E[BC_RSP_CODE_E["E_BC_RSP_INVALID"] = -1] = "E_BC_RSP_INVALID"; // The end. Add return code in the above
})(BC_RSP_CODE_E = exports.BC_RSP_CODE_E || (exports.BC_RSP_CODE_E = {}));
;
var BCSDK_DEVICE_STATE_E;
(function (BCSDK_DEVICE_STATE_E) {
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_NOTREADY"] = 0] = "BCSDK_DEVICE_STATE_NOTREADY";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_OPENING"] = 1] = "BCSDK_DEVICE_STATE_OPENING";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_OPENSUCCESS"] = 2] = "BCSDK_DEVICE_STATE_OPENSUCCESS";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_OPENFAILED"] = 3] = "BCSDK_DEVICE_STATE_OPENFAILED";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_OPENTIMEOUT"] = 4] = "BCSDK_DEVICE_STATE_OPENTIMEOUT";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_NOTONLINE"] = 5] = "BCSDK_DEVICE_STATE_NOTONLINE";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_PASSWORDERROR"] = 6] = "BCSDK_DEVICE_STATE_PASSWORDERROR";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_CLOSING"] = 7] = "BCSDK_DEVICE_STATE_CLOSING";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_CLOSED"] = 8] = "BCSDK_DEVICE_STATE_CLOSED";
    BCSDK_DEVICE_STATE_E[BCSDK_DEVICE_STATE_E["BCSDK_DEVICE_STATE_ABANDON"] = 9] = "BCSDK_DEVICE_STATE_ABANDON";
})(BCSDK_DEVICE_STATE_E = exports.BCSDK_DEVICE_STATE_E || (exports.BCSDK_DEVICE_STATE_E = {}));
;
var BC_YUV_FORMAT_E;
(function (BC_YUV_FORMAT_E) {
    /**
    * I420: YYYYYYYY UU VV     =>YUV420P
    * YV12: YYYYYYYY VV UU     =>YUV420P
    * NV12: YYYYYYYY UVUV      =>YUV420SP
    * NV21: YYYYYYYY VUVU      =>YUV420SP
    */
    BC_YUV_FORMAT_E[BC_YUV_FORMAT_E["BC_YUV_FORMAT_I420"] = 0] = "BC_YUV_FORMAT_I420";
    BC_YUV_FORMAT_E[BC_YUV_FORMAT_E["BC_YUV_FORMAT_YV12"] = 1] = "BC_YUV_FORMAT_YV12";
    BC_YUV_FORMAT_E[BC_YUV_FORMAT_E["BC_YUV_FORMAT_NV12"] = 2] = "BC_YUV_FORMAT_NV12";
    BC_YUV_FORMAT_E[BC_YUV_FORMAT_E["BC_YUV_FORMAT_NV21"] = 3] = "BC_YUV_FORMAT_NV21"; /* 2 planes, YYYY/VUVU */
})(BC_YUV_FORMAT_E = exports.BC_YUV_FORMAT_E || (exports.BC_YUV_FORMAT_E = {}));
;
//# sourceMappingURL=enum.js.map