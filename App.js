import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Numbers from './src/components/numbers';
import { useState } from 'react';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberPress = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number.toString());
    } else {
      setDisplayValue(displayValue + number.toString());
    }
  };

  const handleOperatorPress = (op) => {
    if (op === '=') {
      calculateResult();
    } else {
      setOperator(op);
      setFirstValue(displayValue);
      setDisplayValue('0');
    }
  };

  const handleFunctionPress = (func) => {
    switch (func) {
      case 'C':
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
        break;
      case '+/-':
        setDisplayValue((parseFloat(displayValue) * -1).toString());
        break;
      case '%':
        setDisplayValue((parseFloat(displayValue) / 100).toString());
        break;
    }
  };

  const calculateResult = () => {
    if (operator && firstValue) {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(displayValue);
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '×':
          result = num1 * num2;
          break;
        case '÷':
          result = num1 / num2;
          break;
      }

      setDisplayValue(result.toString());
      setOperator(null);
      setFirstValue('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Numbers number="C" isFunction handlePress={() => handleFunctionPress('C')} />
          <Numbers number="+/-" isFunction handlePress={() => handleFunctionPress('+/-')} />
          <Numbers number="%" isFunction handlePress={() => handleFunctionPress('%')} />
          <Numbers number="÷" isOperator handlePress={() => handleOperatorPress('÷')} />
          <Numbers number={7} handlePress={() => handleNumberPress(7)} />
          <Numbers number={8} handlePress={() => handleNumberPress(8)} />
          <Numbers number={9} handlePress={() => handleNumberPress(9)} />
          <Numbers number="×" isOperator handlePress={() => handleOperatorPress('×')} />
          <Numbers number={4} handlePress={() => handleNumberPress(4)} />
          <Numbers number={5} handlePress={() => handleNumberPress(5)} />
          <Numbers number={6} handlePress={() => handleNumberPress(6)} />
          <Numbers number="-" isOperator handlePress={() => handleOperatorPress('-')} />
          <Numbers number={1} handlePress={() => handleNumberPress(1)} />
          <Numbers number={2} handlePress={() => handleNumberPress(2)} />
          <Numbers number={3} handlePress={() => handleNumberPress(3)} />
          <Numbers number="+" isOperator handlePress={() => handleOperatorPress('+')} />
          <Numbers number={0} isZero handlePress={() => handleNumberPress(0)} />
          <Numbers number="." handlePress={() => handleNumberPress('.')} />
          <Numbers number="=" isOperator handlePress={() => handleOperatorPress('=')} />
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 70,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
