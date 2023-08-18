import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import CrossBtn from '../../components/CrossBtn';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function OTP({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  useEffect(() => {
    if (value?.length == 6) {
      navigation.navigate('Home');
    }
  }, [value]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <CrossBtn />
        </View>
        <View style={styles.content}>
          <Text style={styles.otpHead}>Enter OTP</Text>
          <View style={styles.textView}>
            <Text style={styles.text}>
              You would’ve received an OTP on your phone number *** *** 239
            </Text>
          </View>
        </View>

        <View style={styles.padding}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        <View style={[styles.row, styles.bottom]}>
          <Text style={styles.forgetText}>Didn’t receive the OTP? </Text>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.footerbottom]}>
          <Text style={styles.forgetText}>Not your number? </Text>
          <TouchableOpacity>
            <Text style={styles.forgetText}>Change your number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
