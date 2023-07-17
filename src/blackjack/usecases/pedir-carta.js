/**
 * Esta función me permite tomar una carta 
 * @param {Array<Strings>} deck es un arreglo de strings 
 * @returns {String} retorna la carata eliminada
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}