const Cards = [
    {
      id: 1,
      name: 'Frédérick Raynal',   
      profession: 'Video game designer',
      works: 'Game developments in Infogrames, Adeline Software International and No Cliché.',
      photo: 'Images/Creators/Frédérick_Raynal.jpg',      
      class: 'card',
    },
   
    {
        id: 2,
        name: 'Randall Breen',   
        profession: 'Video game developer',
        works: 'His years there as a Producer, Designer, Creative Director, and Executive Producer were marked by a succession of critically-acclaimed titles',
        photo: 'Images/Creators/Randall_Breen.jpg',      
        class: 'card',
      },
  
      {
        id: 3,
        name: 'Frantz Cournil',   
        profession: 'Programmer',
        works: 'Project Manager and main programmer in games like Toy Racer, Time Comando, Twinsen´s Odyssey, and more',
        photo: 'Images/Creators/Frantz_Cournil.jpg',      
        class: 'cardh',
      },
  
      {
        id: 4,
        name: 'Didier Chanfray',   
        profession: 'Artist',
        works: 'Game and creative designer of many videogames including 3D Modeling & Animations',
        photo: 'Images/Creators/Didier_Chanfray.jpg',      
        class: 'cardh',
      },
  
      {
        id: 5,
        name: 'Jean-Jacques Poncet',   
        profession: 'Game story, design and programmmer',
        works: 'Creator of Twinsen story, art and graphic designer in games like Piglet´s Big Game and more',
        photo: 'Images/Creators/Jean-Jacques_Poncet.jpg',      
        class: 'cardh',
      },
  
      {
        id: 6,
        name: 'Philippe Vachey',   
        profession: 'Audio, Music & SFX',
        works: 'Music composer and sound effects for titles like Time Commando, Alone in the Dark, SimCity',
        photo: 'Images/Creators/Philippe_Vachey.jpg',      
        class: 'cardh',
      },    
  ];  
    
    const creators = document.getElementById('Creators');
    const C1 = document.createElement('div');
    C1.classList.add('creators1');
    const C2 = document.createElement('div');
    C2.classList.add('creators2');
    creators.appendChild(C1);
    creators.appendChild(C2);
    for (let i=0; i<3; i++)
    {
        const card = document.createElement('div');
        card.classList.add(Cards[i].class);
        C1.appendChild(card);
        card.innerHTML=`
        <img src=\"${Cards[i].photo}" alt="#" class="creator-img">
        <div id="CContent">
        <div>
        <h3>${Cards[i].name}</h3>        
        <h4>${Cards[i].profession}</h4>
        </div>
        <p>${Cards[i].works}</p>
        </div>
        `;
    }

    for (let i=3; i<6; i++)
    {
        const card = document.createElement('div');
        card.classList.add(Cards[i].class);
        C2.appendChild(card);
        card.innerHTML=`
        <img src=\"${Cards[i].photo}" alt="#" class="creator-img">
        <div id="CContent">
        <div>
        <h3>${Cards[i].name}</h3>
        <h4>${Cards[i].profession}</h4>
        </div>
        <p>${Cards[i].works}</p>
        </div>
        `;
    }

    const button = document.querySelector('.btn2');
    button.addEventListener('click', () => {

      if (button.textContent.toLocaleLowerCase() === "more") {
    
        document.querySelector('.btn2').textContent = "Close";
        document.querySelector('.btn2').style.backgroundImage = "url('Images/Icons/close-arrow.png')";
        document.querySelector('.creators2').style.display = 'flex';
        document.querySelectorAll('.cardh').forEach((element) => {
          element.style.display = 'flex';
        });;
    
    
      } else if (button.textContent.toLocaleLowerCase() === "close") {
    
        document.querySelector('.btn2').textContent = "More";
        document.querySelector('.btn2').style.backgroundImage = "url('Images/Icons/close-arrow.png')";
        document.querySelector('.creators2').style.display = 'none';
        document.querySelectorAll('.cardh').forEach((element) => {
          element.style.display = 'none';
        });;
    
      }
    });
    
 