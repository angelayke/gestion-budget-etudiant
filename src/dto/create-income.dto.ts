export type CreateIncomeDto = {
    description?: string,
    amount: number,
    date: Date,
    isRecurring: true,
    /* Requis si isRecurring est true */
    recursion: {
    from: Date,
    to: Date,
    /* En nombre de jours ex.: 14 pour 2 semaines */
    period: number,
    user: string,
    }
    } | {
    description?: string,
    amount: number,
    date: Date,
    isRecurring: false,
    /* Requis si isRecurring est true */
    recursion?: never
    user: string,
    }