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

### 스플래쉬 이미지 설정

- https://github.com/zoontek/react-native-bootsplash 사용
  - 안드로이드의 경우 메뉴얼 1번까지만 하면 됨
  - https://lottiefiles.com/ lottie splash.json 파일 다운로드
  - 0번 프레임 html 인스펙터에서 svg 복사, png로 변환 후 splash.png 파일 assets/splash에 저장
  - yarn set-splash

### tailwindcss

- https://github.com/vadimdemedes/tailwind-rn

### reanimated

- 안드로이드 mainActivity, proguard 설정
- https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation

### 파이어베이스 설치

https://rnfirebase.io/
