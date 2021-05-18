# Getting started

Base utility for mobile phone applicaion for android and ios

![](https://github.com/GarfieldFan/react-native-eazy-background/blob/main/demo.gif?raw=true)

## Installation

```bash
yarn add react-native-eazy-background
```

## Usage

Wrap your application inside the background

```js
import Background from "react-native-eazy-background";
function App() {
  return <Background>{props.children}</Background>;
}
```

Use hook to show toase message

```js
import { useToast } from 'react-native-eazy-background';

function App () {
    const toast = useToast();
    return <Button title='toast me' onPress={() => toast('toast message') />
}
```

```js
import { useLoad, useToast } from 'react-native-eazy-background';

function App () {
    const loading = useLoad();
    const toast = useToast();
    useEffect = (() => {
        loading(true);
        toast('fetching data...', 'INFO');
        const data = await ...;
        ...
        toast('fetch success','SUCCESS');
        loading(false);
    })
}
```

Use StyleSheet shortcut

```js
import { css } from "react-native-eazy-background";

function App() {
  return (
    <View style={[css.bg("red"), css.p(20), css.container]}>
      <Text style={[css.my(20), css.text_color("white"), css.text_center]}>Style</Text>
    </View>
  );
}
```

Use Context inside the class

```js
import { ToastContext } from "react-native-eazy-background";

class HomeScreen extends React.Component {
  static contextType = ToastContext;
  render() {
    return (
      <View>
        <Button
          title="toast me"
          onPress={() => {
            this.context.toastMessage("message", "INFO");
          }}
        />
      </View>
    );
  }
}
```

### Hooks

| Name       | Format                                  |
| ---------- | --------------------------------------- |
| useToast   | useToast(String: message, String: Type) |
| Toast Type | SUCCESS, ERROR, INFO, WARNING           |
| useLoad    | useLoad(Boolean value)                  |


### Props

| Name        | Type   | Value                                        |
| ----------- | ------ | -------------------------------------------- |
| safeArea    | bool   | false                                        |
| barStyle    | string | 'default' / 'light-content' / 'dark-content' |
| barHidden   | bool   | true                                         |
| topColor    | string | '#ffffff'                                    |
| bottomColor | string | '#000000'                                    |


## StyleSheet(css)

### most common value return

| Name              | Description                                              |
| ----------------- | -------------------------------------------------------- |
| container         | flex 1, justifyContent & alignItems: 'center'            |
| center            | justifyContent: 'center', alignItems: 'center'           |
| relative          | position: 'relative'                                     |
| absolute          | position: 'absolute'                                     |
| absolute_fluid    | position: 'absolute', top, bottom, left, right = 0       |
| flex_row          | direction: 'row'                                         |
| flex_column       | direction: 'column'                                      |
| flex_wrap         | flexWrap : 'wrap'                                        |
| overflow_visible  | overflow: 'visible'                                      |
| overflow_hidden   | overflow: 'hidden'                                       |


### most common value set

| Function          | Parameter / Default  | Value                                                                                  |
| ----------------- | -------------------- | -------------------------------------------------------------------------------------- |
| top               | int: 0               | number                                                                                 |
| bottom            | int: 0               | number                                                                                 |
| left              | int: 0               | number                                                                                 |
| right             | int: 0               | number                                                                                 |
| flex              | int: 0               | number                                                                                 |
| flex_basis        | int: 0               | number                                                                                 |
| flex_grow         | int: 0               | number                                                                                 |
| flex_shrink       | int: 0               | number                                                                                 |
| direction         | string: 'row'        | 'column', 'row', 'column-reverse', 'row-reverse'                                       |
| justify_content   | string: 'center'     | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'    |
| align_items       | string: 'center'     | 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'                              |
| align_self        | string: 'center'     | 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'                              |
| align_content     | string: 'center'     | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'         |
| w                 | int/string: 'auto'   | number, 'auto', percentage                                                             |
| min_w             | int/string: 'auto'   | number, 'auto', percentage                                                             |
| max_w             | int/string: 'auto'   | number, 'auto', percentage                                                             |
| h                 | int/string: 'auto'   | number, 'auto', percentage                                                             |
| min_h             | int/string: 'auto'   | number, 'auto', percentage                                                             |
| max_h             | int/string: 'auto'   | number, 'auto', percentage                                                             |
| bg                | stirng: 'white'      | string, color code                                                                     |
| opacity           | int: 1               | number                                                                                 |
| zindex            | int: 0               | number                                                                                 |

** w = width, h = height, min_w = minWidth, max_w = maxWidth, min_h = minHeight, max_h = maxHeight, bg = background


### spacing

| Function              | Description                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| p(value)              | padding = value                                                                        |
| p([value1, value2])   | paddingTop, paddingBottom = value1 / paddingLeft, paddingRight = value2                |
| p([v1, v2, v3])       | paddingTop = v1 / paddingLeft, paddingRight = v2 / paddingBottom = v3                  |
| p([v1, v2, v3, v4])   | paddingTop = v1 / paddingRight = v2 / paddingBottom = v3 / paddingLeft = v4            |
| px(value)             | paddingLeft, paddingRight = value                                                      |
| py(value)             | paddingTop, paddingBottom = value                                                      |
| m(value)              | margin = value                                                                         |
| m([value1, value2])   | marginTop, marginBottom = value1 / marginLeft, marginRight = value2                    |
| m([v1, v2, v3])       | marginTop = v1 / marginLeft, marginRight = v2 / marginBottom = v3                      |
| m([v1, v2, v3, v4])   | marginTop = v1 / marginRight = v2 / marginBottom = v3 / marginLeft = v4                |
| mx(value)             | marginLeft, marginRight = value                                                        |
| my(value)             | marginTop, marginBottom = value                                                        |

** spacing default value is 0


### text

| Function                          | Description           | Value                                                         |
| -----------------------------     | --------------------- | ------------------------------------------------------------- |
| text_color(string: 'black')       | color                 | color code                                                    |
| text_fs(int: 14)                  | fontSize              | number                                                        |
| text_align(string: 'left')        | alignment             | 'auto', 'left', 'right', 'center', 'justify'                  |
| text_center                       | alignment             | return 'center'                                               |
| text_left                         | alignment             | return 'left'                                                 |
| text_right                        | alignment             | return 'right'                                                |
| text_justify                      | alignment             | return 'justify'                                              |
| text_deco(string: 'none')         | textDecorationLine    | 'none', 'underline', 'line-through', 'underline line-through' |
| text_under                        | textDecorationLine    | return 'underline'                                            |
| text_throught                     | textDecorationLine    | return 'line-through'                                         |
| text_lh(int: 0)                   | lineHeight            | number                                                        |
| text_fw(int: 0)                   | fontWeight            | number                                                        |
| text_ls(int: 0)                   | letterSpacing         | number                                                        |
| text_italic                       | fontStyle             | return 'italic'                                               |
| text_bold                         | fontWeight            | return 'bold'                                                 |
| text_transform(string: 'none')    | textTransform         | 'none', 'uppercase', 'lowercase', 'capitalize'                |
| text_uppercase                    | textTransform         | return 'uppercase'                                            |
| text_lowercase                    | textTransform         | return 'lowercase'                                            |
| text_capitalize                   | textTransform         | return 'capitalize'                                           |


### border

| Function                                                      | Description                                       |
| ------------------------------------------------------------- | ------------------------------------------------- |
| border(int: 1, string: 'solid', string: 'gainsboro')          | borderWidth, borderStyle, borderColor             |
| border_left(int: 1, string: 'solid', string: 'gainsboro')     | borderWidth, borderStyle, borderLeftColor         |
| border_right(int: 1, string: 'solid', string: 'gainsboro')    | borderWidth, borderStyle, borderRightColor        |
| border_top(int: 1, string: 'solid', string: 'gainsboro')      | borderWidth, borderStyle, borderTopColor          |
| border_bottom(int: 1, string: 'solid', string: 'gainsboro')   | borderWidth, borderStyle, borderBottomColor       |
| shaodw(string: 'black', int: 3, int: 3)                       | shadowColor, width, height                        |
| border(string: 'black')                                       | borderColor                                       |

### License

[MIT](https://choosealicense.com/licenses/mit/)
