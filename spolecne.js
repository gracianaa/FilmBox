const showMenu = () => {
  document.querySelector('#menu-polozky').classList.toggle('show');
};

document.querySelector('#menu-tlacitko').addEventListener('click', showMenu);
