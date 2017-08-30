# Atem Modal
Simples modal

Depois de incluir no seu projeto, a variável para ser utilizado sempre será 'atemModal'

# Mudar o tema
`atemModal.setTheme('default');`
## Temas disponíveis:
* default
* primary
* success
* warning
* danger

# Criar um modal
```
atemModal.modal('Título do modal', 'Conteudo do modal', [
    {
        text: 'Voltar',
        type: 'btn-deafult',
        onclick: function() { console.log('voltei') }
    }
], true);
```

# Fechar modal
`atemModal.closeModal();`
