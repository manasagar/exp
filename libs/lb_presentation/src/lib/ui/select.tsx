import React, { useEffect, useState } from 'react';
import {
  ViewStyle,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Option } from './option';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    zIndex: 10,
    width: 150,
    position: 'relative',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
    minHeight: 40,
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    justifyContent: 'space-between',
  },
  optionWrapperActive: {
    borderColor: '#E5E7EB',
    maxHeight: 350,
  },
  optionWrapperHide: {
    maxHeight: 0,
    overflow: 'hidden',
  },
  optionWrapper: {
    position: 'absolute',
    width: '100%',
    top: '100%',
    backgroundColor: 'white',
    left: 12,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeState: {
    transform: 'rotate(180deg)',
  },
  optionItem: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    padding: 12,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    backgroundColor: '#BFDBFE',
  },
  optionText: {
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  }
});

export interface SelectProps<T = ViewStyle> {
  onChange?: (value: string[]) => void;
  children?: React.ReactNode;
  style?: T;
  type?: string;
  selectedValues?: string[];
  disabledValues?: string[];
  label?: string;
}

export function Select({
  onChange,
  children,
  style,
  type,
  selectedValues = [],
  disabledValues = [],
  label = 'Select option',
}: SelectProps) {
  const [expand, setExpand] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string[]>(selectedValues);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const getLabelFromValue = (value: string) => {
    let label = '';
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.props.value === value) {
        label = child.props.label;
      }
    });
    return label;
  };

  const handleSelect = (value: string | number) => {
    if (type !== 'mutiple') {
      setExpand(false);
      setSelectedValue([value.toString()]);
      setSelectedLabels([getLabelFromValue(value.toString())]);
      return;
    }
    setSelectedValue((prev) => {
      if (prev?.find((ele) => value === ele))
        return prev.filter((ele) => ele !== value);
      return [...prev, value.toString()];
    });
    setSelectedLabels((prev) => {
      const newLabel = getLabelFromValue(value.toString());
      if (prev?.find((ele) => newLabel === ele))
        return prev.filter((ele) => ele !== newLabel);
      return [...prev, newLabel];
    });
  };

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    if (onChange) onChange(selectedValue);
  }, [selectedValue]);

  const processChild = (child: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(child) && child.type === Option) {
      const modifiedProps = {
        ...(child as React.ReactElement<any>).props,
        onPress: handleSelect,
        selected: selectedValue?.find((ele) => child.props.value === ele),
        disabled: disabledValues?.find((ele) => child.props.value === ele),
      };
      return React.cloneElement(child, modifiedProps);
    } else if (React.isValidElement(child) && child.type === React.Fragment) {
      return React.Children.map(
        (child as React.ReactElement<any>).props.children,
        processChild
      );
    }
    return child;
  };

  const modifiedChildren = React.Children.map(children, processChild);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.header}>
        <Text style={tw`text-black font-semibold`}>
          {selectedValue.length
            ? selectedLabels.join(', ')
            : label}
        </Text>
        <Ionicons 
          name={expand ? "chevron-up" : "chevron-down"} 
          size={20} 
          color="black" 
          style={[styles.button, expand && styles.activeState]}
          onPress={handleExpand}
        />
      </View>
      <View
        style={[
          styles.optionWrapper,
          expand ? styles.optionWrapperActive : styles.optionWrapperHide,
        ]}
      >
        {modifiedChildren}
      </View>
    </View>
  );
}
