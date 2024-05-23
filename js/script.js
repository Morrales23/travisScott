document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
      });
    });
  
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', event => {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
  });
  