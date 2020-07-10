<template>
    <div>
        <h1>Cadastro de Funcionários</h1>
        <form action id="form">
            <div>
                <label for="edtmatricula" class="mgn-min-top">Matrícula</label>
                <br />
                <input class="w3-input" type="text" name="edtmatricula" id="edtmtricula" />
            </div>
            <div>
                <label for="edtTipoPessoa">Tipo de Pessoa</label>
                <br />
                <input
                    class="w3-radio"
                    type="radio"
                    name="edtTipoPessoa"
                    id="pessoafisica"
                    value="Pessoa Física"
                />
                <label for="pessoafisica">Pessoa Física</label>
                <input
                    class="w3-radio"
                    type="radio"
                    name="edtTipoPessoa"
                    id="pessoajuridica"
                    value="Pessoa Jurídica"
                />
                <label for="pessoajuridica">Pessoa Jurídica</label>
            </div>
            <div>
                <input class="w3-check" type="checkbox" name="edtAtivo" id="edtAtivo" />
                <label for="edtAtivo">Funcionário Ativo</label>
            </div>
            <div class="w3-card-4 w3-border pdn">
                <div class="w3-container w3-light-blue">
                    <h3>Dados pessoais</h3>
                </div>
                <div class="w3-container">
                    <div>
                        <label for="edtnome" class="mgn-min-top">Nome</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtnome" id="edtnome" />
                    </div>
                    <div>
                        <label for="edtEmail">E-mail</label>
                        <input
                            class="w3-input mgn-min-btn"
                            type="email"
                            name="edtEmail"
                            id="edtEmail"
                        />
                    </div>
                    <div>
                        <label for="edtTelefone2">Telefone</label>
                        <input
                            class="w3-input mgn-min-btn"
                            type="text"
                            name="edtTelefone2"
                            id="edtTelefone2"
                        />
                    </div>
                    <div>
                        <label for="edtDataNascimento">Data de nascimento</label>
                        <input
                            class="w3-input mgn-min-btn"
                            type="date"
                            name="edtDataNascimento"
                            id="edtDataNascimento"
                        />
                    </div>
                    <div>
                        <label for="edtCPF">CPF</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtCPF" id="edtCPF" />
                    </div>
                    <div>
                        <label for="edtRG">RG</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtRG" id="edtRG" />
                    </div>
                    <div>
                        <label for="edtLocalExpedicao">Local de expedição</label>
                        <input
                            class="w3-input mgn-min-btn"
                            type="text"
                            name="edtLocalExpedicao"
                            id="edtLocalExpedicao"
                        />
                    </div>
                    <div>
                        <label for="edtUFExpedicao">UF expedição</label>
                        <select
                            class="w3-select mgn-min-btn"
                            name="edtUFExpedicao"
                            id="edtUFExpedicao"
                        >
                            <option value="mg">MG</option>
                        </select>
                    </div>
                    <div>
                        <label for="edtPaisNatal">País natal</label>
                        <select class="w3-select mgn-min-btn" name="edtPaisNatal" id="edtPaisNatal">
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>
                    <div>
                        <label for="edtUFNatal">Estado natal</label>
                        <select class="w3-select mgn-min-btn" name="edtUFNatal" id="edtUFNatal">
                            <option value="mg">MG</option>
                        </select>
                    </div>
                    <div>
                        <label for="edtCidadeNatal">Cidade natal</label>
                        <select class="w3-select mgn-min-btn" name="edtCidadeNatal" id="edtCidadeNatal">
                            <option value="mg">Belo Horizonte</option>
                        </select>
                    </div>
                    <div>
                        <label for="edtNomePai">Nome do pai</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtNomePai" id="edtNomePai" />
                    </div>
                    <div>
                        <label for="edtNomeMae">Nome da mãe</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtNomeMae" id="edtNomeMae" />
                    </div>
                    <div>
                        <label for="edtEscolaridade">Escolaridade</label>
                        <input
                            class="w3-input mgn-min-btn"
                            type="text"
                            name="edtEscolaridade"
                            id="edtEscolaridade"
                        />
                    </div>
                    <div>
                        <label for="edtEstadoCivil">Estado civil</label>
                        <select class="w3-select mgn-min-btn" name="edtEstadoCivil" id="edtEstadoCivil">
                            <option value="0">Casado</option>
                            <option value="1">Solteiro</option>
                            <option value="2">Viúvo</option>
                            <option value="3">União estável</option>
                            <option value="3">Outro</option>
                        </select>
                    </div>
                    <div>
                        <label for="edtOcupacao">Ocupação</label>
                        <input class="w3-input mgn-min-btn" type="text" name="edtOcupacao" id="edtOcupacao" />
                    </div>
                    <div>
                        <label for="edtInscricaoEstadual">Inscrição estadual</label>
                        <br />
                        <input
                            class="w3-inputv"
                            type="text"
                            name="edtInscricaoEstadual"
                            id="edtInscricaoEstadual"
                        />
                        <br />
                    </div>
                    <div>
                        <label for="edtInscricaoMunicipal">Inscrição municipal</label>
                        <br />
                        <input
                            class="w3-input"
                            type="text"
                            name="edtInscricaoMunicipal"
                            id="edtInscricaoMunicipal"
                        />
                        <br />
                    </div>
                </div>
            </div>

            <div class="w3-card-4 w3-border pdn">
                <div class="w3-container w3-light-blue">
                    <h3>Endereços</h3>
                </div>
                <div class="w3-container">
                    <div>
                        <label for="edtCEP">CEP</label>
                        <br />
                        <input type name="edtCEP" id="edtCEP" />
                        <button>...</button>
                    </div>
                    <div>
                        <label for="edtLogradouro">Logradouro</label>
                        <br />
                        <input type="text" name="edtLogradouro" id="edtLogradouro" />
                        <br />
                    </div>
                    <div>
                        <label for="edtNumero">Número</label>
                        <br />
                        <input type="text" name="edtNumero" id="edtNumero" />
                        <br />
                    </div>
                    <div>
                        <label for="edtComplemento">Complemento</label>
                        <br />
                        <input type="text" name="edtComplemento" id="edtComplemento" />
                        <br />
                    </div>
                    <div>
                        <label for="edtBairro">Bairro</label>
                        <br />
                        <input type="text" name="edtBairro" id="edtBairro" />
                        <br />
                    </div>
                    <div>
                        <label for="edtMunicipio">Município</label>
                        <br />
                        <input type="text" name="edtMunicipio" id="edtMunicipio" />
                        <button>...</button>
                    </div>
                    <div>
                        <label for="edtUF">UF</label>
                        <br />
                        <select type name="edtUF" id="edtUF">
                            <option value="mg">MG</option>
                        </select>
                    </div>
                    <div>
                        <label for="dtPais">País</label>
                        <br />
                        <input type="text" name="dtPais" id="dtPais" />
                        <br />
                    </div>
                    <div>
                        <label for="edtnome">Nome</label>
                        <br />
                        <select type="text" name="edtnome" id="edtnome">
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>
                    <div>
                        <label for="dtTelefoneEnd">Telefone</label>
                        <br />
                        <input type="tel" name="dtTelefoneEnd" id="dtTelefoneEnd" />
                        <br />
                    </div>
                </div>
            </div>
            <div class="w3-card-4 w3-border pdn">
                <div class="w3-container w3-light-blue">
                    <h3>Dados Bancários</h3>
                </div>
                <div class="w3-container">
                    <div>
                        <label for="edtBanco">Banco</label>
                        <br />
                        <input type="text" name="edtBanco" id="edtBanco" />
                        <br />
                    </div>
                    <div>
                        <label for="edtAgencia">Agência</label>
                        <br />
                        <input type="text" name="edtAgencia" id="edtAgencia" />
                        <br />
                    </div>
                    <div>
                        <label for="edtConta">Conta</label>
                        <br />
                        <input type="text" name="edtConta" id="edtConta" />
                        <br />
                    </div>
                </div>
            </div>
            <div class="w3-card-4 w3-border pdn">
                <div class="w3-container w3-light-blue">
                    <h3>Admissão</h3>
                </div>
                <div class="w3-container">
                    <div>
                        <label for="edtDataAdm">Data de admissão</label>
                        <br />
                        <input type="date" name="edtDataAdm" id="edtDataAdm" />
                        <br />
                    </div>
                    <div>
                        <label for="edtRegistro">Registro</label>
                        <br />
                        <input type="text" name="edtRegistro" id="edtRegistro" />
                        <br />
                    </div>
                    <div>
                        <label for="edtFeriasInicio">Próximas Férias</label>
                        <br />
                        <input type="date" name="edtFeriasInicio" id="edtFeriasInicio" />
                        <br />
                    </div>
                    <div>
                        <label for="edtFeriasFim">final das Férias</label>
                        <br />
                        <input type="date" name="edtFeriasFim" id="edtFeriasFim" />
                        <br />
                    </div>
                    <div>
                        <label for="edtDuracao">Duração</label>
                        <br />
                        <input type="number" name="edtDuracao" id="edtDuracao" />
                        <br />
                    </div>
                    <div>
                        <label for="edtCTPS">Número CTPS</label>
                        <br />
                        <input type="text" name="edtCTPS" id="edtCTPS" />
                        <br />
                    </div>
                    <div>
                        <label for="edtNIS">NIS/PIS</label>
                        <br />
                        <input type="text" name="edtNIS" id="edtNIS" />
                        <br />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
#form {
    text-align: left;
}
.pdn {
    margin: 10px;
}
.mgn-min-btn {
    margin: 0px 0px 10px 0px;
}
.mgn-min-top {
    margin: 2px 0px 0px 0px;
}
</style>