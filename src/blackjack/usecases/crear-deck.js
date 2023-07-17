import _ from 'underscore';
export const myName = 'Jesus Rosml'; //Importacion individual

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas 
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if( !tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('TiposDeCarta es obligatorio como un arreglo de strings');

    if( !tiposEspeciales || tiposDeCarta.length === 0) 
    throw new Error('TiposEspeciales es obligatorio como un arreglo de strings');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck; //Exportacion por defecto