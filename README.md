## react-native-material-color-picker

[![npm version](http://img.shields.io/npm/v/react-native-material-color-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-material-color-picker "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-material-color-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-material-color-picker "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-material-color-picker.svg?style=flat-square)](https://npmjs.org/package/react-native-material-color-picker "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-material-color-picker "View this project on npm")

A color picker on Google material color palette.

<img src="https://raw.githubusercontent.com/flyskywhy/react-native-material-color-picker/master/Screenshots/basic_android.png" width="375">

## Install

```shell
npm i --save react-native-material-color-picker
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import ColorPicker from 'react-native-material-color-picker';

export default class SliderColorPickerExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { oldColor: '#dd2c00' };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ oldColor: '#fdd835' }), 1000);
    }

    changeColor = colorRgb => this.setState({ oldColor: colorRgb })

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <ColorPicker
                    ref={view => {this.colorPicker = view;}}
                    oldColor={this.state.oldColor}
                    onColorChange={this.changeColor}/>
            </View>
        );
    }
}
```

## Props

Prop                  | Type     | Optional | Default                   | Description
--------------------- | -------- | -------- | ------------------------- | -----------
oldColor              | [Color string](https://github.com/bgrins/TinyColor#accepted-string-input) | Yes      | undefined                 | Initial positon of the picker indicator
onColorChange         | function | Yes      |                           | Callback called while the user click a color. The 1st argument is [Color string](https://github.com/bgrins/TinyColor#accepted-string-input). The 2nd string argument is always 'end'.

## Sponsor

Alipay: flyskywhy@gmail.com

ETH: 0xd02fa2738dcbba988904b5a9ef123f7a957dbb3e
