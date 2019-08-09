//
//  BCSDKWrapper+Player.h
//  BCSDKWrapper
//
//  Created by jiadong on 7/22/19.
//  Copyright © 2019 BaiChuan. All rights reserved.
//

#ifndef _BCSDK_Wrapper_Player_h
#define _BCSDK_Wrapper_Player_h

#ifdef __cplusplus
extern "C" {
#endif//__cplusplus
    
#include <stdio.h>
#include "BCSDKCommon.h"
    
    /*******************************************************************************
     * MARK: Player
     ******************************************************************************/
    
    H_BC_PLAYER _BCSDK_ BCSDK_PlayerCreate(void *hWnd, float x, float y, float w, float h);
    
    int _BCSDK_ BCSDK_PlayerRelease(H_BC_PLAYER hPlayer);
    
    int _BCSDK_ BCSDK_PlayerResize(H_BC_PLAYER hPlayer, float x, float y, float w, float h);
    
    int _BCSDK_ BCSDK_PlayerShow(H_BC_PLAYER hPlayer);
    
    int _BCSDK_ BCSDK_PlayerHide(H_BC_PLAYER hPlayer);
    
    /**
     * clear surface
     * r, g, b: 0.0 - 1.0
     */
    int _BCSDK_ BCSDK_PlayerClear(H_BC_PLAYER hPlayer, float r, float g, float b);
    int _BCSDK_ BCSDK_PlayerForceClear(H_BC_PLAYER hPlayer, float r, float g, float b);
    
#ifdef __cplusplus
}
#endif//__cplusplus
#endif /* _BCSDK_Wrapper_Player_h */
