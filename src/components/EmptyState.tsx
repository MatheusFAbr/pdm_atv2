import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function EmptyState(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="map-outline" size={32} color="#1E293B" />
      </View>
      <Text style={styles.title}>Nenhuma consulta realizada</Text>
      <Text style={styles.description}>
        Digite um código DDD de 2 dígitos e toque em{' '}
        <Text style={styles.highlight}>Buscar</Text> para ver o estado e as
        cidades associadas.
      </Text>

      <View style={styles.examplesRow}>
        {['11', '21', '31', '41', '85'].map((ddd) => (
          <View key={ddd} style={styles.exampleChip}>
            <Text style={styles.exampleText}>{ddd}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    gap: 12,
  },
  iconWrapper: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 20,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  description: {
    color: '#1E293B',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  highlight: {
    color: '#334155',
    fontWeight: '600',
  },
  examplesRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  exampleChip: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  exampleText: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 2,
  },
});
