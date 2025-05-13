
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');

    // Ao enviar o formulário, oculta e exibe os resultados com atraso
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        searchResults.classList.add('hidden');

        setTimeout(() => {
            searchResults.classList.remove('hidden');
            searchResults.classList.add('show');
            searchResults.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    });
});