const formatter  = Intl.NumberFormat('pt-BR')

export default (value) => {
    return formatter.format(value)
}