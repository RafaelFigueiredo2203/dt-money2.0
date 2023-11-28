import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";

const newTransactionFormSchema = z.object({
  description:z.string(),
  price:z.number(),
  category: z.string(),
  //type: z.enum(['income','outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){

  const {register, handleSubmit , formState:{isSubmitting}} = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

async function handleCreateNewTransaction(data: NewTransactionFormInputs){
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(data);
}

  return(
    <Dialog.Portal>
        <Overlay/>

        <Content>

          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24}/>
          </CloseButton>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input type="text" placeholder="Descrição" {...register('description')} required/>
            <input type="number" placeholder="Preço" {...register('price', {valueAsNumber: true})} required/>
            <input type="text" placeholder="Categoria" {...register('category')} required/>


            <TransactionType>
              <TransactionTypeButton value="income" variant='income'>
                <ArrowCircleUp size={24}/>
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton value="outcome" variant='outcome'>
                <ArrowCircleDown size={24}/>
                Saída
              </TransactionTypeButton>
            </TransactionType>


            <button type="submit" disabled={isSubmitting}>Cadastrar</button>

          </form>

          
        </Content>
      </Dialog.Portal>
  )
}