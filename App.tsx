import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchInput } from './src/components/SearchInput';
import { ResultCard } from './src/components/ResultCard';
import { ErrorCard } from './src/components/ErrorCard';
import { EmptyState } from './src/components/EmptyState';
import { useDDD } from './src/hooks/useDDD';

export default function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const { data, loading, error, search, reset } = useDDD();

  const handleSearch = useCallback((): void => {
    const trimmed = inputValue.trim();

    if (trimmed.length === 0) {
      Alert.alert('Campo obrigatório', 'Por favor, informe um código DDD.');
      return;
    }

    if (!/^\d{2}$/.test(trimmed)) {
      Alert.alert(
        'DDD inválido',
        'O código DDD deve conter exatamente 2 dígitos numéricos (ex: 11, 21).'
      );
      return;
    }

    search(trimmed);
  }, [inputValue, search]);

  const handleChangeText = useCallback(
    (text: string): void => {
      const onlyDigits = text.replace(/\D/g, '');
      setInputValue(onlyDigits);

      if (onlyDigits.length === 0 && (data !== null || error !== null)) {
        reset();
      }
    },
    [data, error, reset]
  );

  const handleRetry = useCallback((): void => {
    if (inputValue.length === 2) {
      search(inputValue);
    }
  }, [inputValue, search]);

  const showEmptyState = !loading && data === null && error === null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoIcon}>
              <Ionicons name="locate" size={20} color="#00E5FF" />
            </View>
            <Text style={styles.logoText}>DDD<Text style={styles.logoAccent}>Consulta</Text></Text>
          </View>
          <Text style={styles.subtitle}>
            Descubra o estado e as cidades{'\n'}de qualquer código de área do Brasil
          </Text>
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text style={styles.sectionLabel}>CÓDIGO DE ÁREA</Text>
          <SearchInput
            value={inputValue}
            onChangeText={handleChangeText}
            onSearch={handleSearch}
            loading={loading}
          />
        </View>

        {/* Result Area */}
        <View style={styles.resultArea}>
          {showEmptyState && <EmptyState />}

          {error !== null && !loading && (
            <ErrorCard message={error} onRetry={handleRetry} />
          )}

          {data !== null && !loading && (
            <ResultCard ddd={inputValue} data={data} />
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dados fornecidos por{' '}
            <Text style={styles.footerLink}>BrasilAPI</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0F1E',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 16,
    paddingBottom: 40,
    gap: 28,
  },
  // Header
  header: {
    gap: 12,
    paddingTop: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoIcon: {
    backgroundColor: '#00E5FF15',
    borderWidth: 1,
    borderColor: '#00E5FF30',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#E2E8F0',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  logoAccent: {
    color: '#00E5FF',
  },
  subtitle: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  // Search
  searchSection: {
    gap: 10,
  },
  sectionLabel: {
    color: '#334155',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  // Result
  resultArea: {
    minHeight: 100,
  },
  // Footer
  footer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  footerText: {
    color: '#1E293B',
    fontSize: 12,
    letterSpacing: 0.3,
  },
  footerLink: {
    color: '#334155',
    fontWeight: '600',
  },
});
