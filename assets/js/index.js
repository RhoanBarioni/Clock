const h1 = document.querySelector('h1');

// NUMERO DO DIA
function getDayNumber(){
    const data = new Date();
    const dayName = data.getDate();
    return dayName;
};
console.log(getDayNumber());

// NOME DO DIA
function getDayName(){
    const data = new Date();
    let name = data.getDay();

    switch(name){
        case 0:
            return 'Domingo';

        case 1:
            return 'Segunda-Feira';

        case 2:
            return 'Terça-Feira';

        case 3:
            return 'Quarta-Feira';
            
        case 4:
            return 'Quinta-Feira';

        case 5:
            return 'Sexta-Feira';

        case 6:
            return 'Sábado';

        default:
            return 'Dia Inválido';
    }
};
console.log(getDayName());

// MES DO ANO
function getMonthName(){
    const data = new Date();
    let month = data.getMonth() + 1; // Já deixa no modo normal dos meses (não começar do 0)

    switch(month){
        case 1:
            return 'Janeiro';

        case 2:
            return 'Fevereiro';

        case 3:
            return 'Março';

        case 4:
            return 'Abril';

        case 5:
            return 'Maio';

        case 6:
            return 'Junho';
        
        case 7:
            return 'Julho';
            
        case 8:
            return 'Agosto';

        case 9:
            return 'Setembro';

        case 10:
            return 'Outubro';

        case 11:
            return 'Novembro';

        case 12:
            return 'Dezembro';
    }
};
console.log(getMonthName());

// ANO
function getYear(){
    const data = new Date();
    const year = data.getFullYear();
    return year;
};
console.log(getYear());

// HORÁRIO
// HORAS
function getHour(){
    const data = new Date();
    const hour = data.getHours();
    if(hour < 10){
        return `0${hour}`;
    }
    return hour
};
// MINUTOS
function getMinutes(){
    const data = new Date();
    const minutes = data.getMinutes();
    if(minutes < 10){
        return `0${minutes}`;
    };
    return (minutes);
};
console.log(getHour(), getMinutes());

// ATUALIZAR NA TELA
function updateData(){
    let dateInfo = `${getDayName()}, ${getDayNumber()} de ${getMonthName()} de ${getYear()}`;
    let hourInfo = `${getHour()}:${getMinutes()}`;
    h1.innerHTML = `<div>${dateInfo}</br>${hourInfo}</div>`;
};

// INTERVALO
setInterval(updateData, 1000);
// MANDAR O RESET
updateData();