import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function CreateProductDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>
          Criar um novo produto no sistema
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-6">
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="name">Produto</Label>
          <Input className="col-span-3" id="name" />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-3" id="price" />
        </div>

        <DialogFooter>
          <Button type="button" variant="outline">Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
