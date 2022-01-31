dataDict = {}
dataDict['home_goals'] = 0
dataDict['away_goals'] = 0
const setColors = () => {
    const homeColors = document.querySelector('#homeColor').value
    const awayColors = document.querySelector('#awayColor').value

    const homeColumns = ['homeGoalie', 'homeDefense', 'homeMid', 'homeAttack']
    const awayColumns = ['awayGoalie', 'awayDefense', 'awayMid', 'awayAttack']

    for (let elem of homeColumns) {
        console.log(elem)
        const column = document.getElementById(elem)
        const players = column.children

        for (let player of players){
            player.style.backgroundColor = homeColors
        }
    }
    for (let elem of awayColumns) {
        console.log(elem)
        const column = document.getElementById(elem)
        const players = column.children

        for (let player of players){
            player.style.backgroundColor = awayColors
        }
    }
}

setColors()
const selectPlayer = player => {
    dataDict['currentPlayer'] = player
}

document.querySelectorAll('.playerBox').forEach(elem => {
    elem.dataset.bs_target ='#playerMenu'
    elem.dataset.bs_toggle ='modal'
})


const labels = document.querySelectorAll('.playerLabel')

for(let label of labels){
    label.innerText ='N/A'
    label.addEventListener('click', selectPlayer(label))
}



const changePlayer = () => {
    const player = dataDict['currentPlayer']
    player.innerText = document.getElementById('sub').value
}

const addGoal = () => {
    const player = dataDict['currentPlayer']
    const team = player.parentElement.parentElement.id

    if (team.includes('away')){
        dataDict['away_goals'] += 1
        const awayGoals = document.querySelector('#awayGoals')
        awayGoals.innerText = dataDict['away_goals']
    } else {
        dataDict['home_goals'] += 1
        const homeGoals = document.querySelector('#homeGoals')
        homeGoals.innerText = dataDict['home_goals']
    }
}
