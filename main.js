function createGame(player1, hour, player2) {
    return `
    <li> 
            <img src="img/icon=${player1}.svg" 
            alt="bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="img/icon=${player2}.svg" 
            alt="bandeira do ${player2}">
    </li>
    `
}



function createCard(date, day, games) {
    return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
     ${games}
    </ul>
 </div>
    `
}



document.querySelector(".app").innerHTML = `
 <header>
 <img class="img" 
 src="https://th.bing.com/th/id/R.9d6f5e796ee5e4bcf375d7c8e022c85e?rik=4zM74MMhe730eQ&pid=ImgRaw&r=0"                                  
 alt="ilustração de jogador de futebol">

 <h1> NLW COPA | 2022 <br> CALÉNDARIO <br> DE JOGOS </h1> <br>

 <img class="img" 
 src= "https://th.bing.com/th/id/R.ef205fa44f94eee220c54a6c2f15be01?rik=04rro5IFYyuRKQ&pid=ImgRaw&r=0"   
 alt="ilustração de jogador de futebol">
 </header>



 <main class="cards">

  ${createCard("24 / NOV", "Quinta", 
    createGame('switzerland', '07:00', 'cameroon') +
    createGame('uruguay', '10:00', 'south korea') +
    createGame('portugal', '13:00', 'ghana') +
    createGame('brazil', '16:00', 'serbia'))}


  ${createCard("28 / NOV", "Segunda",
    createGame('cameroon', '07:00', 'serbia') +
    createGame('south korea', '10:00', 'ghana') +
    createGame('brazil', '13:00', 'switzerland') +
    createGame('portugal', '16:00', 'uruguay'))}


    ${createCard("02 / DEZ", "Sexta",
    createGame('south korea', '12:00', 'portugal') +
    createGame('ghana', '12:00', 'uruguay') +
    createGame('serbia', '16:00', 'switzerland') +
    createGame('cameroon', '12:00', 'brazil'))}

</main>
`

