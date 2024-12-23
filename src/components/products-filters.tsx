import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const productsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>

export function ProductsFilters() {
  const { register, handleSubmit } = useForm<ProductsFiltersSchema>({
    resolver: zodResolver(productsFiltersSchema),
  })

  function handleFilterProducts(data: ProductsFiltersSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
    >
      <Input placeholder="ID do pedido" id="id" {...register('id')} />
      <Input placeholder="Nome do produto" id="name" {...register('name')} />

      <Button type="submit" variant="link">
        <Search className="mr-2 size-3" />
        Filtrar produtos
      </Button>
    </form>
  )
}
