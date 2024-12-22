import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function ProductsFilters() {
  return (
    <form className="flex items-center gap-2">
      <Input name="id" placeholder="ID do pedido" />
      <Input name="nome" placeholder="Nome do produto" />
      <Button type="submit" variant="link">
        <Search className="mr-2 size-3" />
        Filtrar produtos
      </Button>
    </form>
  )
}
