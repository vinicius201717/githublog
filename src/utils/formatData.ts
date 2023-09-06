import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: string) {
    const newDate = new Date(date)
    return formatDistanceToNow(newDate, {
        addSuffix: true,
        locale: ptBR
    })
}