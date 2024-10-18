import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Numbers({number, isOperator, isFunction, isZero, handlePress}) {
    return (
        <TouchableOpacity 
            style={[
                styles.number, 
                isOperator && styles.operator,
                isFunction && styles.function,
                isZero && styles.zero
            ]}
            onPress={() => handlePress(number)}
        >
            <Text 
                style={[
                    styles.numberText, 
                    isOperator && styles.operatorText,
                    isFunction && styles.functionText
                ]}
            >
                {number}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    number: {
        width: '23%',
        height: '17%',
        backgroundColor: '#333333',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1%',
    },
    numberText: {
        fontSize: 30,
        color: '#fff',
    },
    operator: {
        backgroundColor: 'red',
    },
    operatorText: {
        color: '#fff',
    },
    function: {
        backgroundColor: '#a5a5a5',
    },
    functionText: {
        color: '#000',
    },
    zero: {
        width: '48%',
        alignItems: 'flex-start',
        paddingLeft: '8%',
    }
})
