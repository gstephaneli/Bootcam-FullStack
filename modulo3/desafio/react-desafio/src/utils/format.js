const formatter = Intl.NumberFormat('pt-BR', {maximumFractionDigits: 2})

export default (number ) => {
    return formatter.format(number)
}