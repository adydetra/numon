export function usePokemons() {
  const { pending, data: pokemons } = useLazyFetch('/api/pokemons', {
    server: false,
  });

  const searchTerm = ref('');
  const sortBy = ref<'name' | 'date'>('name');

  const filteredAndSortedPokemons = computed(() => {
    if (!pokemons.value) {
      return [];
    }

    let filtered = pokemons.value;

    if (searchTerm.value) {
      filtered = filtered.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
      );
    }

    if (sortBy.value === 'name') {
      filtered = filtered.sort((a: any, b: any) => a.name.localeCompare(b.name));
    }
    else if (sortBy.value === 'date') {
      // Since PokeAPI doesn't provide dates, sort by id as proxy for date
      filtered = filtered.sort((a: any, b: any) => Number.parseInt(a.id) - Number.parseInt(b.id));
    }

    return filtered;
  });

  return {
    pending,
    pokemons: filteredAndSortedPokemons,
    searchTerm,
    sortBy,
  };
}
