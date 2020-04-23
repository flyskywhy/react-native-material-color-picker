import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import _ from 'lodash';
import {
    WHITE,
    BLACK,
    TRANSPARENT,
    DELTAGREY,
    DELTABLUE,
    DELTAORANGE,
    DELTAGREEN,
    RED,
    PINK,
    PURPLE,
    DEEPPRUPLE,
    INDIGO,
    BLUE,
    LIGHTBLUE,
    CYAN,
    TEAL,
    GREEN,
    LIGHTGREEN,
    LIME,
    YELLOW,
    AMBER,
    ORANGE,
    DEEPORANGE,
    BROWN,
    BLUEGREY,
    GREY,
} from 'react-native-material-color';

export default class MaterialColorPicker extends React.PureComponent {
    constructor(props, ctx) {
        super(props, ctx);
        this.palette = [
            _.toArray(DELTAGREY),
            _.toArray(DELTABLUE),
            _.toArray(DELTAORANGE),
            _.toArray(DELTAGREEN),
            _.toArray(RED),
            _.toArray(PINK),
            _.toArray(PURPLE),
            _.toArray(DEEPPRUPLE),
            _.toArray(INDIGO),
            _.toArray(BLUE),
            _.toArray(LIGHTBLUE),
            _.toArray(CYAN),
            _.toArray(TEAL),
            _.toArray(GREEN),
            _.toArray(LIGHTGREEN),
            _.toArray(LIME),
            _.toArray(YELLOW),
            _.toArray(AMBER),
            _.toArray(ORANGE),
            _.toArray(DEEPORANGE),
            _.toArray(BROWN),
            _.toArray(BLUEGREY),
            _.toArray(GREY),
        ];
        this.state = {
            pickerSize: null,
        };
        this._layout = {
            width: 0,
            height: 0,
        };
        this._onLayout = this._onLayout.bind(this);
    }

    static propTypes = {
        oldColor: PropTypes.string,
        onColorChange: PropTypes.func,
    };

    _onColorChange = color => {
        const {
            onColorChange,
        } = this.props;
        onColorChange && onColorChange(color, 'end');
    }

    _onLayout(l) {
        this._layout = l.nativeEvent.layout;
        const {
            width,
            height,
        } = this._layout;
        const pickerSize = Math.min(width, height);
        if (this.state.pickerSize !== pickerSize) {
            this.setState({
                pickerSize,
            });
        }
    }

    renderPalette = () => {
        const {
            oldColor,
        } = this.props;
        return (
            this.palette.map((COLOR, index) =>
                <View style={{flexDirection: 'row'}} key={index}>
                    {COLOR.map((color, id) =>
                        <TouchableOpacity
                            key={id}
                            onPress={this._onColorChange.bind(this, color)}
                            activeOpacity={0.5}
                            style={[styles.color, {backgroundColor: color, borderColor: color === oldColor ? 'black' : 'grey', borderWidth: color === oldColor ? 1 : 0}]}/>
                    )}
                </View>
        ));
    }

    render() {
        const {
            pickerSize,
        } = this.state;

        return (
            <View onLayout={this._onLayout} style={styles.pickerContainer}>
                {pickerSize === null ? null :
                <View>
                    {this.renderPalette()}
                </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    color: {
        backgroundColor: 'red',
        height: 15,
        width: 20,
    },
});
