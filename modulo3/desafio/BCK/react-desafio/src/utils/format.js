const formatter = Intl.NumberFormat('pt-BR')

export default (number ) => {
    return formatter.format(number)
}