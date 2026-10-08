// src/ui.js

export function render(state) {
  const loading = document.querySelector('#loading');
  const content = document.querySelector('#content');
  const error = document.querySelector('#error');
  
  // Ocultar todo primero
  loading.classList.add('hidden');
  content.classList.add('hidden');
  error.classList.add('hidden');
  
  // Mostrar según estado
  if (state.status === 'loading') {

    loading.classList.remove('hidden');
  } else if (state.status === 'success') {
    content.classList.remove('hidden');
    content.innerHTML = renderData(state.data);
    createPokeImage(state.data.id, content.querySelector('.pokemon-art'));
  } else if (state.status === 'error') {
    error.classList.remove('hidden');
    document.querySelector('#error-message').textContent = state.error;
  }
}

function createPokeImage(pokeID, containerDiv) {
  const pokeImage = document.createElement('img');
  pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;
  pokeImage.alt = `Ilustración del Pokémon ${pokeID}`;
  pokeImage.className = 'pokemon-artwork';
  pokeImage.loading = 'lazy';
  containerDiv.append(pokeImage);
}

function renderData(data) {
  const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  const abilities = data.abilities.map((a) => a.ability.name).join(', ');

  return `
    <div class="data-card">
      <div class="pokemon-art" aria-label="Imagen de ${name}"></div>
      <div class="pokemon-details">
        <span class="pokemon-number">ID:${String(data.id).padStart(3, '0')}</span>
        <h2>${data.name}</h2>
        <p>Altura: ${data.height / 10} m <span aria-hidden="true">·</span> Peso: ${data.weight / 10} kg <span aria-hidden="true">·</span> Tipo: ${data.types.map((t) => t.type.name).join(', ')}</p>
        <p>Habilidades: ${abilities}</p>
      
        </div>
    </div>
  `;
}