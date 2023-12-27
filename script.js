function formatAndCopy() {
    function formatDateToInputFormat(dateString) {
        const [year, month, day] = dateString.split('-');
        return `*${day}/${month}/${year}*`;
    }
    const nome = addAsterisks(document.getElementById('nomeInput').value.toUpperCase());
    const cpf = formatCPF(document.getElementById('cpfInput').value);
    const valor = formatCurrency(document.getElementById('valorInput').value);
    const dataPagamento = formatDateToInputFormat(document.getElementById('dataPagamentoInput').value);
    const dataVencimento = formatDateToInputFormat(document.getElementById('dataVencimentoInput').value);
    const banco = addAsterisks(document.getElementById('bancoInput').value.toUpperCase());
    const responsavel = addAsterisks(document.getElementById('responsavelInput').value.toUpperCase());

    const formattedText = `*NOME:* ${nome}\n*CPF:* ${cpf}\n*VALOR:* ${valor}\n*DATA DO PAGAMENTO:* ${dataPagamento}\n*DATA DO VENCIMENTO:* ${dataVencimento}\n*BANCO:* ${banco}\n*RESPONSÁVEL PELO PAGAMENTO:* ${responsavel}\n`;

    // Copiar para a área de transferência
    const textarea = document.createElement('textarea');
    textarea.value = formattedText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Limpar os campos
    document.getElementById('nomeInput').value = '';
    document.getElementById('cpfInput').value = '';
    document.getElementById('valorInput').value = '';
    document.getElementById('dataPagamentoInput').value = '';
    document.getElementById('dataVencimentoInput').value = '';
    document.getElementById('bancoInput').value = '';
    document.getElementById('responsavelInput').value = '';

    alert('Texto formatado e copiado para a área de transferência.');
}

function addAsterisks(text) {
    return `*${text}*`;
}

function formatCPF(cpf) {
    // Limpar CPF de caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Limitar a 11 dígitos
    cpf = cpf.substring(0, 11);

    // Formatar CPF no formato ###.###.###-##
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '*$1.$2.$3-$4*');
}

function formatCurrency(value) {
    // Remover caracteres não numéricos e ponto decimal
    value = value.replace(/[^\d]/g, '');

    // Adicionar "00" apenas se o valor tiver até 3 dígitos
    if (value.length <= 3) {
        value += '00';
    }
    if (value.length == 4) {
        value += '0';
    }
    // Adicionar ponto decimal
    const decimalPart = value.slice(-2);
    const integerPart = value.slice(0, -2) || '0';
    return `*${integerPart}.${decimalPart}*`;
}

