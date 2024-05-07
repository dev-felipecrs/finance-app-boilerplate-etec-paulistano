import { DotsHorizontalIcon } from '@radix-ui/react-icons'

import { Card } from './components/card'
import { formatDate } from './lib/utils'
import { NewTransactionDialog } from './components/new-transaction-dialog'

import { Button } from './components/ui/button'
import {
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow
} from './components/ui/table'
import {
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from './components/ui/dropdown-menu'

export default function App() {
  return (
    <>
      <header className='bg-[#5429cc]'>
        <div className='max-w-6xl mx-auto pt-8 px-4 pb-48 flex items-center justify-between'>
          <span className='block text-xl font-bold text-white'>finance.app</span>

          <NewTransactionDialog />
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-4 py-10'>
        <div className='grid grid-cols-3 gap-8 mt-[-10rem]'>
          <Card />

          <Card />

          <Card />
        </div>

        <div className='mt-16 w-full'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Data</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Cinema</TableCell>
                <TableCell>R$ 100</TableCell>
                <TableCell>Entretenimento</TableCell>
                <TableCell>{formatDate(new Date())}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                      >
                        <DotsHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  )
}
