"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const checklistSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
})

type ChecklistFormData = z.infer<typeof checklistSchema>

const WHATSAPP_NUMBER = "5585988267557"

export function ChecklistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChecklistFormData>({
    resolver: zodResolver(checklistSchema),
    defaultValues: { nome: "" },
  })

  function onSubmit(data: ChecklistFormData) {
    const msg = encodeURIComponent(
      `Olá Diego! Meu nome é ${data.nome} e gostaria de receber o Checklist Anti-Lesão para Corredores. 🏃`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-xl flex-col items-center gap-6 sm:flex-row sm:gap-3"
    >
      <div className="w-full flex-1 space-y-2 sm:max-w-sm">
        <Label htmlFor="checklist-nome" className="sr-only">
          Seu nome
        </Label>
        <Input
          id="checklist-nome"
          type="text"
          placeholder="Seu nome"
          className="h-11 border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[var(--dl-pink)]"
          {...register("nome")}
          aria-invalid={!!errors.nome}
        />
        {errors.nome && (
          <p className="text-left text-sm text-red-400" role="alert">
            {errors.nome.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-dl-pink font-bold text-white sm:w-auto"
        style={{ backgroundColor: "#e91e63" }}
      >
        Receber no WhatsApp
      </Button>
    </form>
  )
}
