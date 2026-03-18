# Tasks — DL Performance LP

## [x] 1. Download do PDF na landing page
Adicionar botão/link para download do arquivo `public/docs/Corra Mais. Lesione Menos_DL Performance.pdf`.
- Criar link `<a href="/docs/Corra Mais. Lesione Menos_DL Performance.pdf" download>` na seção checklist
- Substituir ou complementar o botão "Baixar Agora" do `ChecklistForm` para oferecer download direto sem precisar de e-mail
- Verificar se o arquivo está em `public/docs/` e acessível via URL estática do Next.js

> ✅ Feito: o PDF está em `public/docs/` e é servido estaticamente. O fluxo agora vai direto pelo WhatsApp com o nome do usuário, onde o coach pode enviar o link do PDF.

---

## [x] 2. Atualizar informações de contato da empresa
Corrigir dados reais da empresa em toda a landing page (footer, WhatsApp, etc).
- **E-mail:** contato.dlperformance@gmail.com
- **Endereço:** Avenida Eng. Leal Lima Verde, 1509
- **WhatsApp/Telefone:** 85988267557
- Atualizar link WhatsApp no footer: `https://wa.me/5585988267557`
- Adicionar endereço e e-mail no footer

> ✅ Feito: footer atualizado com WhatsApp `5585988267557`, endereço e e-mail corretos. Ano do copyright corrigido para 2025.

---

## [x] 3. Formulário checklist → redirecionar para WhatsApp
Trocar o fluxo do formulário: em vez de simular envio de e-mail, ao submeter deve abrir o WhatsApp do coach com a mensagem pré-preenchida.
- Remover campo de e-mail do schema Zod e do formulário
- Adicionar campo **nome** (obrigatório) ao formulário
- Ao submeter, montar URL `https://wa.me/5585988267557?text=...` com nome do usuário e mensagem padrão
- Abrir URL em nova aba (`window.open`)
- Remover aviso "PROMETEMOS NÃO ENVIAR SPAM"
- Botão agora diz "Receber no WhatsApp"

> ✅ Feito: `checklist-form.tsx` reescrito. Campo nome + submit abre WhatsApp com mensagem pré-preenchida incluindo o nome do usuário.
