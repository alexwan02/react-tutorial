package com.reactnativetutorial;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

/**
 * NavigationActivity
 * Created by alexwan on 2016/11/30.
 */
public class NavigationActivity extends ReactActivity{


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "SimpleNavigationApp";
    }

    /**
     * Native modules can signals events to JavaScript without being invoked directly.
     * The easiest wat to do this is to use the {@link DeviceEventManagerModule.RCTDeviceEventEmitter}
     * which can be obtained from the {@link ReactContext} as in the code snippet below
     *
     * @param reactContext reactContext
     * @param eventName    eventName
     * @param params       params
     */
    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

}
