import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ErrorCardProps {
  message: string;
  onRetry: () => void;
}

export function ErrorCard({ message, onRetry }: ErrorCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Ionicons name="alert-circle" size={24} color="#F87171" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Ops! Algo deu errado</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <TouchableOpacity style={styles.retryButton} onPress={onRetry} activeOpacity={0.8}>
        <Ionicons name="refresh" size={14} color="#0A0F1E" />
        <Text style={styles.retryText}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A0A0A',
    borderWidth: 1,
    borderColor: '#7F1D1D',
    borderRadius: 16,
    padding: 20,
    gap: 14,
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#F8717115',
    borderWidth: 1,
    borderColor: '#F8717130',
    borderRadius: 14,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 6,
  },
  title: {
    color: '#FCA5A5',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  message: {
    color: '#7F1D1D',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F87171',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 9,
    gap: 6,
  },
  retryText: {
    color: '#0A0F1E',
    fontSize: 13,
    fontWeight: '700',
  },
});
