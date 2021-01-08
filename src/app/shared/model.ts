export const tiposBebida: any = {
    AGUA : 'Água',
    CERVEJA : 'Cerveja',
    VINHO : 'Vinho',
    REFRIGERANTE : 'Refrigerante',
    SUCO: 'Suco',
    VODKA :' Vodka',
    WHISKY : 'Whisky',
    TEKILA : 'Tekila',
    CONHAQUE : 'Conhaque',
    GIM : 'Gim',
}

Object.freeze(tiposBebida)

export interface Bebida{
    id: string
    nome: string
    preco: number
    isAlcoolica: boolean
    tipo: string
    descricao: string
}
