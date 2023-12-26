export default defineEventHandler(async () => {
  const { results } = await $fetch('https://pokeapi.co/api/v2/pokemon/?limit=9');

  return results.map((el) => {
    const id = el?.url?.split('/')[6];
    return {
      id,
      name: el.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
    };
  });
});
