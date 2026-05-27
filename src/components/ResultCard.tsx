import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { DDDResponse } from '../types/ddd';

interface ResultCardProps {
  ddd: string;
  data: DDDResponse;
}

export function ResultCard({ ddd, data }: ResultCardProps): React.JSX.Element {
  const sortedCities = [...data.cities].sort((a, b) => a.localeCompare(b, 'pt-BR'));

  return (
    <View style={styles.card}>
      {/* Cabeçalho com DDD e Estado */}
      <View style={styles.header}>
        <View style={styles.dddBadge}>
          <Text style={styles.dddLabel}>DDD</Text>
          <Text style={styles.dddValue}>{ddd}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stateInfo}>
          <Ionicons name="location" size={14} color="#00E5FF" />
          <Text style={styles.stateLabel}>Estado</Text>
          <Text style={styles.stateValue}>{data.state}</Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countValue}>{data.cities.length}</Text>
          <Text style={styles.countLabel}>cidades</Text>
        </View>
      </View>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Lista de cidades */}
      <View style={styles.citiesSection}>
        <View style={styles.citiesTitleRow}>
          <Ionicons name="business-outline" size={14} color="#475569" />
          <Text style={styles.citiesTitle}>MUNICÍPIOS ATENDIDOS</Text>
        </View>

        <ScrollView
          style={styles.citiesScroll}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.citiesGrid}>
            {sortedCities.map((city, index) => (
              <View key={`${city}-${index}`} style={styles.cityChip}>
                <Text style={styles.cityText}>{city}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    gap: 14,
  },
  dddBadge: {
    backgroundColor: '#00E5FF10',
    borderWidth: 1,
    borderColor: '#00E5FF25',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
  },
  dddLabel: {
    color: '#00E5FF80',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },
  dddValue: {
    color: '#00E5FF',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 26,
  },
  divider: {
    width: 1,
    height: 36,
    backgroundColor: '#1E293B',
  },
  stateInfo: {
    flex: 1,
    gap: 2,
  },
  stateLabel: {
    color: '#334155',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
    marginTop: 2,
  },
  stateValue: {
    color: '#E2E8F0',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
  countBadge: {
    alignItems: 'center',
    backgroundColor: '#0A0F1E',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  countValue: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
  },
  countLabel: {
    color: '#334155',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#1E293B',
    marginHorizontal: 18,
  },
  citiesSection: {
    padding: 18,
    gap: 12,
  },
  citiesTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  citiesTitle: {
    color: '#334155',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  citiesScroll: {
    maxHeight: 320,
  },
  citiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  cityChip: {
    backgroundColor: '#0A0F1E',
    borderWidth: 1,
    borderColor: '#1E293B',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cityText: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});
