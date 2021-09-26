### 프로가드 설정

- android/app/build.gradle

```
def enableProguardInReleaseBuilds = true
```

### hermes 설정 안드로이드

- android/app/build.gradle

```
  project.ext.react = [
      entryFile: "index.js",
+     enableHermes: true
  ]
```

- proguard-rules.pro

```
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }
```

- cli `yarn android:clean && yarn android`

### heremes 설정 ios

- ios/Podfile

```
   use_react_native!(
     :path => config[:reactNativePath],
     # to enable hermes on iOS, change `false` to `true` and then install pods
-    :hermes_enabled => false
+    :hermes_enabled => true
   )
```

- cli `yarn pod-install && yarn ios`
