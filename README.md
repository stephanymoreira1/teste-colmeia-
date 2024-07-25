### **3.5. Validação do Campo de Mensagem no Formulário de Contato**

**Objetivo:** Verificar a validação do campo de mensagem (`#message`) no formulário de contato.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. No campo de mensagem, insira uma mensagem com menos de 400 caracteres e verifique se a mensagem é exibida corretamente.
3. No campo de mensagem, insira uma mensagem com mais de 400 caracteres e verifique se a mensagem de erro "Mensagem não pode exceder 400 caracteres" é exibida.

**Resultado Esperado:**
- O campo de mensagem deve aceitar até 400 caracteres e exibir a mensagem de erro apropriada para mensagens que excedem esse limite.


**Resultado FEITO NA AUTOMAÇÃO:**
- A mensagem de erro "Mensagem não pode exceder 400 caracteres"  não está aprecendo, um BUG encontrado a mesma está permitando cracteres acima de 400, neste caso para não ter quebra de código, deve ter ajuste para verificar esta validação. Evidência irá ser anexada do erro!
- ![Uploading Imagem do WhatsApp de 2024-07-25 à(s) 18.38.25_f1037c16.jpg…]()



///////////////////////////////////////////////////////////////////////////////////////

### **3.4. Erro para Telefone Inválido**

**Objetivo:** Verificar a exibição de erro para números de telefone inválidos no formulário de contato.

**Passos:**
1. Na página principal, clique no botão "Formulário".
2. Teste o campo de telefone (`#phone`) com os seguintes valores e verifique as mensagens de erro:
   - Insira "123" e verifique se a mensagem "Número de telefone deve ter exatamente 9 dígitos" é exibida.
   - Insira "1234567890" e verifique se a mensagem "Número de telefone deve ter exatamente 9 dígitos" é exibida.
   - Insira "abcdefghi" e verifique se a mensagem "Número de telefone deve conter apenas números" é exibida.

**Resultado Esperado:**
- Mensagens de erro apropriadas devem ser exibidas para números de telefone inválidos.

**Resultado FEITO NA AUTOMAÇÃO:**
-  A mensagem de erro mensagem "Número de telefone deve ter exatamente 9 dígitos  não está aprecendo, um BUG encontrado pois é como se fosse um numero de telefone completo mas está incompelto e deveria aparecer a mensagem, neste caso para não ter quebra de código fiz com que automatize mesmo assim, deve ter ajuste para verificar esta validação corretamente.

//////////////////////////////////////////////////////////////////////////////////////
