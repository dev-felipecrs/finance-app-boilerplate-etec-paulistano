import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from "./ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog";

export function NewTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className='bg-[#6933ff] w-44 h-12 hover:bg-[#6933ff] hover:brightness-90'
        >
          Nova transação
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar transação</DialogTitle>
          <DialogDescription>
            Adicione uma nova transação para organizar as suas finanças
          </DialogDescription>
        </DialogHeader>

        <form>
          <div>
            <div className="space-y-4 py-2 pb-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  placeholder="Netflix"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Valor</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="49.99"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transaction-type">Tipo da transação</Label>
                <Select>
                  <SelectTrigger className="h-8 w-full">
                    <SelectValue placeholder="Tipo da transação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='income'>
                      Entrada
                    </SelectItem>

                    <SelectItem value='outcome'>
                      Saída
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Input
                  id="category"
                  placeholder="Entretenimento"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
            >
              Cancelar
            </Button>

            <Button type="submit">Criar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}