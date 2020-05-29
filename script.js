const cards = document.querySelectorAll('.card') //chama todos os cards da página (3 cards)
const dropzones = document.querySelectorAll('.dropzone')

//para cada card encontrado, adiciona um "ouvidor de eventos"
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart) //disparado quando começa a arrastar o elemento
    card.addEventListener('drag', drag) //disparado enquanto o elemento é arrastado
    card.addEventListener('dragend', dragend) //disparado quando parar de arrastar o elemento
})

function dragstart() {
    //quando o usuário clicar no cartão, vai adicionar a classe highlight aos dropzones, que vai mudar a cor de fundo
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    //this é o card
    //vai adicionar também a classe is-dragging
    this.classList.add('is-dragging')
}

function drag() {

}

function dragend() {
    //quando o usuário soltar o cartão, a classe highlight será removida
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/* lugar onde os cartões serão soltos*/
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter) // disparado quando o elemento entrou no local para ser soltado
    dropzone.addEventListener('dragover', dragover) // disparado quando o elemento está em cima do local a ser solto
    dropzone.addEventListener('dragleave', dragleave) //disparado quando o elemento saiu do local onde deve ser solto
    dropzone.addEventListener('drop', drop) // disparado quando o elemento foi solto em cima do local
})

function dragenter() {

}

function dragover() {
    //this é o dropzone
    //quando o cartão estiver em cima de dropzone, a classe over será adicionada e a cor do fundo vai mudar para verde
    this.classList.add('over')

    //pega o cartão que está sendo arrastado
    const cardBeingDragged = document.querySelector('.is-dragging')

    //o card que está sendo arrastado vai ser colocado dentro de dropzone
    //this é o dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    //quando o cartão sair de dropzone, remove a classe over, voltando a cor marrom
    this.classList.remove('over')
}

function drop() {
    //quando o usuário soltar o cartão no dropzone, remove a classe over
    this.classList.remove('over')
}