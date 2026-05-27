import type { DDDApiError, DDDResponse } from '../types/ddd';

const BASE_URL = 'https://brasilapi.com.br/api/ddd/v1';

export async function fetchDDD(ddd: string): Promise<DDDResponse> {
  const response = await fetch(`${BASE_URL}/${ddd}`);

  if (!response.ok) {
    if (response.status === 404) {
      const body = (await response.json()) as DDDApiError;
      throw new Error(body.message ?? `DDD ${ddd} não encontrado.`);
    }
    throw new Error(`Falha na requisição (HTTP ${response.status}).`);
  }

  const data = (await response.json()) as DDDResponse;
  return data;
}
