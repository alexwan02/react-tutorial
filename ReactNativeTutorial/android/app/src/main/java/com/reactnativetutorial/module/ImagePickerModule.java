package com.reactnativetutorial.module;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import static android.app.Activity.RESULT_OK;

/**
 * Created by alexwan on 2016/12/9.
 */
@ReactModule(name = "ImagePicker")
public class ImagePickerModule extends ReactContextBaseJavaModule {

    private static final int IMAGE_PICKER_REQUEST = 467081;
    private static final String E_ACTIVITY_NOT_EXIST = "E_ACTIVITY_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    private Promise mPickerPromise;
    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        /**
         * You'll need to listen to {@link ReactActivity#onActivityResult} if you want to
         * get results from an activity you started with {@link ReactActivity#startActivityForResult}.
         * To do this , then you must extend {@link BaseActivityEventListener} or implement
         * {@link ActivityEventListener}. The former is preferred as it is more resilient to API
         * changes. Then , you need to register the listener in the module's constructor.
         *
         * @param activity activity
         * @param requestCode requestCode
         * @param resultCode  resultCode
         * @param data data
         */
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (requestCode == IMAGE_PICKER_REQUEST) {
                if (mPickerPromise != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
                    } else if (resultCode == RESULT_OK) {
                        Uri uri = data.getData();
                        if (uri == null) {
                            mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
                        } else {
                            mPickerPromise.resolve(uri.toString());
                        }
                    }
                }
                mPickerPromise = null;
            }
        }
    };

    public ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        // Add the listener for 'onActivityResult'
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "ImagePicker";
    }

    @ReactMethod
    public void pickImage(final Promise promise) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_NOT_EXIST, "Activity does't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mPickerPromise = promise;
        try {
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);
            galleryIntent.setType("image/*");
            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");
            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
        } catch (Exception e) {
            mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPickerPromise = null;
        }

    }
}
