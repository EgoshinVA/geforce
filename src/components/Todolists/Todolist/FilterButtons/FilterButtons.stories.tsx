import { FilterButtons } from '@/components/Todolists/Todolist/FilterButtons/FilterButtons'

import { DomainTodolist, FilterType } from '@/shared/types/todolistTypes'

export default {
  title: 'FilterButtons',
}

export const FilterButtonsSimple = () => {
  const filter: FilterType = 'active'

  const todolist: DomainTodolist = {
    id: '1',
    title: 'todolist',
    order: 1,
    addedDate: 1,
    filter,
  }

  return (
    <FilterButtons todolist={todolist} />
  )
}