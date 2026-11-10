"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { track } from "@/lib/analytics"

const checklistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail")
    .max(254, "E-mail muito longo")
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Informe um e-mail válido"),
  // Honeypot anti-spam: campo invisível que humanos não preenchem
  website: z.string().max(0).optional(),
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
    defaultValues: { email: "", website: "" },
  })

  async function onSubmit(data: ChecklistFormData) {
    if (data.website) return // bot preencheu o honeypot

    // TODO: integrar com serviço de e-mail marketing (Mailchimp / Brevo / ConvertKit)
    // para armazenar o e-mail coletado antes de disparar o download.

    // Dispara download do PDF
    const link = document.createElement("a")
    link.href = PDF_PATH
    link.download = "Checklist Anti-Lesão - DL Performance.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    track("form_checklist", { label: "Baixar Agora" })
    toast.success("Download iniciado!", {
      description: "Seu checklist está sendo baixado. Bons treinos! 🏃",
    })
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex w-full flex-col gap-4 rounded-[var(--card-radius)] bg-[#171717] p-[clamp(24px,3.4vw,44px)] text-white shadow-[var(--card-shadow)]"
    >
      <label
        htmlFor="checklist-email"
        className="dl-display text-[28px] leading-none font-bold"
      >
        Seu melhor e-mail
      </label>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="checklist-website">Não preencha este campo</label>
        <input id="checklist-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <div className="flex flex-col gap-2">
        <input
          id="checklist-email"
          type="email"
          autoComplete="email"
          placeholder="voce@email.com"
          className="box-border h-14 w-full min-w-0 rounded-[var(--button-radius)] border border-[#5C5C5C] bg-[var(--background-dark)] px-4 text-base text-white outline-none placeholder:text-[#8A8A8A] focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/40 aria-invalid:border-[var(--color-primary)]"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "checklist-email-error" : undefined}
        />
        {errors.email && (
          <p id="checklist-email-error" className="text-sm text-[#FF8FB4]" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="dl-btn dl-btn-primary w-full"
      >
        {isSubmitting ? "Baixando..." : "Baixar Agora"}
      </button>
      <p className="m-0 text-[13px] leading-relaxed text-[#A3A3A3]">
        Prometemos não enviar spam. Apenas conteúdo de alta performance.
      </p>
    </form>
  )
}
