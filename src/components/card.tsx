import { FiDollarSign } from 'react-icons/fi'

import {
  Card as CardContainer, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from './ui/card'

export function Card() {
  return (
    <CardContainer>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-md font-medium">
          Título
        </CardTitle>

        <FiDollarSign className='h-5 w-5 text-white' />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">R$ 1.000.000,00</div>
      </CardContent>
    </CardContainer>
  )
}