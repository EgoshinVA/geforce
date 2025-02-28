export type FilterType = 'all' | 'active' | 'complete'

export type TodolistType = {
  id: string
  addedDate: number
  order: number
  title: string
}

export type DomainTodolist = TodolistType & {
  filter: FilterType
}

