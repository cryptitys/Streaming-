fetch('canais.json')
  .then(res => res.json())
  .then(canais => {
    const container = document.getElementById('canais-container');

    canais.forEach(canal => {
      const div = document.createElement('div');
      div.className = 'canal';
      div.innerHTML = `
        <img src="${canal.logo}" alt="${canal.nome}">
        <p>${canal.nome}</p>
      `;
      div.addEventListener('click', () => {
        document.getElementById('player').src = canal.url;
      });
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Erro ao carregar canais:', err));
