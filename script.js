const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
