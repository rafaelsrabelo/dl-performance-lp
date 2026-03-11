"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const checklistSchema = z.object({
  email: z
    .string()
    .min(1, "Informe seu e-mail")
    .email("Informe um e-mail válido"),
})

type ChecklistFormData = z.infer<typeof checklistSchema>

export function ChecklistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChecklistFormData>({
    resolver: zodResolver(checklistSchema),
    defaultValues: { email: "" },
  })

  async function onSubmit(data: ChecklistFormData) {
    try {
      // Simula envio (substitua por sua API)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Checklist enviado!", {
        description: "Enviamos o link para o seu e-mail. Confira sua caixa de entrada.",
      })
      reset()
    } catch {
      toast.error("Erro ao enviar", {
        description: "Tente novamente em alguns instantes.",
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex max-w-xl flex-col items-center gap-6 sm:flex-row sm:gap-3"
    >
      <div className="w-full flex-1 space-y-2 sm:max-w-sm">
        <Label htmlFor="checklist-email" className="sr-only">
          Seu melhor e-mail
        </Label>
        <Input
          id="checklist-email"
          type="email"
          placeholder="Seu melhor e-mail"
          className="h-11 border-white/20 bg-white/5 text-white placeholder:text-white/50 focus-visible:ring-[var(--dl-pink)]"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-left text-sm text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-dl-pink font-bold text-white sm:w-auto"
        style={{ backgroundColor: "#e91e63" }}
      >
        {isSubmitting ? "Enviando..." : "Baixar Agora"}
      </Button>
    </form>
  )
}
