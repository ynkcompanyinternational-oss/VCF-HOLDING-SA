const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const aberto = navigation.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', aberto);
    menuToggle.setAttribute(
      'aria-label',
      aberto ? 'Fechar menu' : 'Abrir menu'
    );
  });

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}
