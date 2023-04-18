# CSS 코드 분리 방식

위에서부터 적용

### _position.scss
- position
- margin
- size (default)


### _inside.scss
- display
- padding

### _boxStyle.scss
- background
- border

### _fontStyle.scss
- font
- text-align
- color


### when used
- size
- top/left/right/bottom

# _copy this_
```scss
@use "./src/styles/position";
@use "./src/styles/inside";
@use "./src/styles/boxStyle";
@use "./src/styles/fontStyle";
@use "./src/styles/colors/defaultTheme";
```