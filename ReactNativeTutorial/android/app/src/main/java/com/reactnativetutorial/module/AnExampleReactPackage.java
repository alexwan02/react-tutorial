package com.reactnativetutorial.module;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reactnativetutorial.MainApplication;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * The package needs to be provided in the getPackages method of the {@link MainApplication} file
 * This file exist under the android folder in your react-native application directory.
 * Created by alexwan on 2016/12/8.
 */
public class AnExampleReactPackage implements ReactPackage {

    /**
     * Register the module.
     * if a module is not registered it will not be available from JavaScript
     *
     * @param reactContext reactContext
     * @return list {@link List<NativeModule>}
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ImagePickerModule(reactContext));
        return modules;

    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }


}
