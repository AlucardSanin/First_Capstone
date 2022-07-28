    function display() {
        document.getElementById('links').style.display = 'flex';
        document.querySelector('.material-symbols-outlined').textContent="close";
        document.querySelector('.material-symbols-outlined').addEventListener('click', hide);        
    }

    function hide() {
        document.getElementById('links').style.display= 'none'; 
        document.querySelector('.material-symbols-outlined').textContent="menu";       
    }

    document.querySelector('.material-symbols-outlined').addEventListener('click', display);