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
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Informe um e-mail válido"),
})

type ChecklistFormData = z.infer<typeof checklistSchema>

const PDF_PATH = "/docs/Corra Mais. Lesione Menos_DL Performance.pdf"

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

  async function onSubmit(_data: ChecklistFormData) {
    // TODO: integrar com serviço de e-mail marketing (Mailchimp / Brevo / ConvertKit)
    // para armazenar o e-mail coletado antes de disparar o download.

    // Dispara download do PDF
    const link = document.createElement("a")
    link.href = PDF_PATH
    link.download = "Checklist Anti-Lesão - DL Performance.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast.success("Download iniciado!", {
      description: "Seu checklist está sendo baixado. Bons treinos! 🏃",
    })
    reset()
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
        {isSubmitting ? "Baixando..." : "Baixar Agora"}
      </Button>
    </form>
  )
}
