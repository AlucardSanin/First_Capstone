function display() {
    if (document.querySelector('.material-symbols-outlined').textContent === "menu") {
      document.getElementById('links').style.display = 'flex';
      document.querySelector('.material-symbols-outlined').textContent = "Close";
    } else {
      hide();
    }
  }
  

  function hide() {
      document.getElementById('links').style.display= 'none'; 
      document.querySelector('.material-symbols-outlined').textContent="menu";       
  }
  
  document.querySelector('.material-symbols-outlined').addEventListener('click', display);