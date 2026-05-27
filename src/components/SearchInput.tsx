import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  loading: boolean;
}

export function SearchInput({
  value,
  onChangeText,
  onSearch,
  loading,
}: SearchInputProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons name="keypad-outline" size={18} color="#475569" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Ex: 11, 21, 31…"
          placeholderTextColor="#334155"
          keyboardType="number-pad"
          maxLength={2}
          returnKeyType="search"
          onSubmitEditing={onSearch}
          editable={!loading}
          selectionColor="#00E5FF"
        />
        {value.length > 0 && (
          <Text style={[styles.counter, value.length === 2 && styles.counterFull]}>
            {value.length}/2
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonLoading]}
        onPress={onSearch}
        disabled={loading}
        activeOpacity={0.85}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#0A0F1E" />
        ) : (
          <>
            <Ionicons name="search" size={16} color="#0A0F1E" />
            <Text style={styles.buttonText}>Buscar</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 52,
    gap: 10,
  },
  icon: {
    opacity: 0.7,
  },
  input: {
    flex: 1,
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 4,
  },
  counter: {
    color: '#334155',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  counterFull: {
    color: '#00E5FF',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00E5FF',
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 52,
    gap: 6,
    minWidth: 96,
  },
  buttonLoading: {
    backgroundColor: '#00B8CC',
  },
  buttonText: {
    color: '#0A0F1E',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
