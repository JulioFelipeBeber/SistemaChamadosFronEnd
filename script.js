document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const ticketList = document.getElementById('ticketList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Obter dados do formulário
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        
        if (title === '' || description === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Criar um novo elemento de chamado
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="ticket-title">${title}</div>
            <div class="ticket-description">${description}</div>
        `;

        // Adicionar o novo chamado à lista
        ticketList.appendChild(li);

        // Limpar o formulário
        form.reset();
    });
});
