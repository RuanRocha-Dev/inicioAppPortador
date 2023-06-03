function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    
    if(cpf == '') {
        return false;
    }
    
    if(cpf.length !== 11) {
        return false;
    }
    
    var soma = 0;
    var resto;
    
    for (var i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    
    soma = 0;
    
    for (var i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    
    return true;
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}

function validaSenhaComplexa (senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(senha)) {
        return true;
    } else {
        return false;
    }

}