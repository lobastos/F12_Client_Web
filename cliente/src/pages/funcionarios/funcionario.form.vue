<template>
    <div class="container">
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Funcionários</h1>
                    <h2 class="subtitle">Cadastro de Funcionários</h2>
                </div>
            </div>
        </section>
        <form id="form">
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
                <input type="checkbox" name="edtAtivo" id="edtAtivo" value="0" checked="checked" />
                <label for="edtAtivo">Funcionário Ativo</label>
            </div>
            <div class>
                <b-steps
                    v-model="activeStep"
                    :animated="isAnimated"
                    :rounded="isRounded"
                    :has-navigation="hasNavigation"
                    :icon-prev="prevIcon"
                    :icon-next="nextIcon"
                    :label-position="labelPosition"
                    :mobile-mode="mobileMode"
                >
                    <b-step-item step="1" label="Dados Pessoais" :clickable="isStepsClickable">
                        <h3 class="title">Dados pessoais</h3>
                        <section>
                            <b-field label="Nome">
                                <b-input
                                    name="edtnome"
                                    id="edtnome"
                                    required
                                    placeholder="Nome do Funcionário"
                                ></b-input>
                            </b-field>
                            <b-field label="E-mail" for="edtEmail">
                                <b-input
                                    placeholder="E-mail"
                                    type="email"
                                    name="edtEmail"
                                    id="edtEmail"
                                ></b-input>
                            </b-field>
                            <b-field label="Telefone" for="edtTelefone2">
                                <b-input
                                    placeholder="Telefone"
                                    type="text"
                                    name="edtTelefone2"
                                    id="edtTelefone2"
                                />
                            </b-field>
                            <b-field label="Data de Nascimento">
                                <b-datepicker
                                    ref="datepicker"
                                    expanded
                                    placeholder="Clique para editar a data de nascimento"
                                    name="edtDataNascimento"
                                    id="edtDataNascimento"
                                    :month-names="mes_nomes"
                                ></b-datepicker>
                            </b-field>
                            <b-field label="CPF" for="edtCPF">
                                <b-input
                                    placeholder="Digite o número do CPF"
                                    type="text"
                                    name="edtCPF"
                                    id="edtCPF"
                                ></b-input>
                            </b-field>
                            <b-field label="RG" for="edtRG">
                                <b-input
                                    placeholder="Digite o número do RG"
                                    type="text"
                                    name="edtRG"
                                    id="edtRG"
                                ></b-input>
                            </b-field>
                            <b-field label="Estado de Expedição do RG" for="edtLocalExpedicao">
                                <b-select
                                    placeholder="Selecione o estado de expedição do RG"
                                    rounded
                                    name="edtLocalExpedicao"
                                    id="edtLocalExpedicao"
                                >
                                    <option
                                        v-for="option in estados"
                                        :value="option.UF"
                                        :key="option.UF"
                                    >{{option.nome}}</option>
                                </b-select>
                            </b-field>
                            <b-field label="Estado Civil" for="edtEstadoCivil">
                                <b-select
                                    placeholder="Selecione o estado de nascimento"
                                    rounded
                                    name="edtEstadoCivil"
                                    id="edtEstadoCivil"
                                >
                                    <option value="0">Casado</option>
                                    <option value="1">Solteiro</option>
                                    <option value="2">Viúvo</option>
                                    <option value="3">União estável</option>
                                    <option value="3">Outro</option>
                                </b-select>
                            </b-field>
                            <b-field label="Inscrição Estadual" for="edtInscricaoEstadual">
                                <b-input
                                    placeholder="Digite o número da IE"
                                    type="text"
                                    name="edtInscricaoEstadual"
                                    id="edtInscricaoEstadual"
                                ></b-input>
                            </b-field>
                            <b-field label="Inscrição Municipal" for="edtInscricaoMunicipal">
                                <b-input
                                    placeholder="Digite o número da IM"
                                    type="text"
                                    name="edtInscricaoMunicipal"
                                    id="edtInscricaoMunicipal"
                                ></b-input>
                            </b-field>
                            <b-field label="Escolaridade" for="edtEscolaridade">
                                <b-select
                                    placeholder="Selecione o estado de nascimento"
                                    rounded
                                    name="edtEscolaridade"
                                    id="edtEscolaridade"
                                >
                                    <option
                                        v-for="option in estados"
                                        :value="option.UF"
                                        :key="option.UF"
                                    >{{option.nome}}</option>
                                </b-select>
                            </b-field>
                        </section>
                    </b-step-item>

                    <b-step-item step="2" label="Endereço" :clickable="isStepsClickable">
                        <h3 class="title">Endereço</h3>
                        <label class="label">CEP</label>
                        <b-field class="control">
                            <b-input
                                placeholder="Pesquisar..."
                                type="search"
                                icon="magnify"
                                icon-clickable
                                @icon-click="searchIconClick"
                            ></b-input>
                            <p class="control">
                                <b-button rounded>
                                    <b-icon icon="magnify" size="is-small"></b-icon>
                                </b-button>
                            </p>
                        </b-field>
                        <b-field label="Logradouro" for="edtLogradouro">
                            <b-input
                                placeholder="Digite o nome da Rua/Avenida/Alameda..."
                                type="text"
                                name="edtLogradouro"
                                id="edtLogradouro"
                            />
                        </b-field>
                        <b-field label="Número" for="edtNumero">
                            <b-input
                                placeholder="Digite o número do imóvel"
                                type="text"
                                name="edtNumero"
                                id="edtNumero"
                            />
                        </b-field>
                        <b-field label="Complemento" for="edtComplemento">
                            <b-input
                                placeholder="Complemento"
                                type="text"
                                name="edtComplemento"
                                id="edtComplemento"
                            />
                        </b-field>
                        <b-field label="Bairro" for="edtBairro">
                            <b-input
                                placeholder="Bairro"
                                type="text"
                                name="edtBairro"
                                id="edtBairro"
                            />
                        </b-field>
                        <b-field label="UF" for="edtUF">
                            <b-select
                                placeholder="Selecione o estado"
                                rounded
                                name="edtUF"
                                id="edtUF"
                            >
                                <option
                                    v-for="option in estados"
                                    :value="option.UF"
                                    :key="option.UF"
                                >{{option.nome}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Município" for="edtMunicipio">
                            <b-select
                                placeholder="Selecione o município"
                                rounded
                                name="edtMunicipio"
                                id="edtMunicipio"
                            >
                                <option
                                    v-for="option in estados"
                                    :value="option.UF"
                                    :key="option.UF"
                                >{{option.nome}}</option>
                            </b-select>
                        </b-field>
                        
                        
                        <b-field label="Telefone" for="edtTelefoneEnd">
                            <b-input
                                placeholder="Telefone para contato"
                                type="text"
                                name="edtTelefoneEnd"
                                id="edtTelefoneEnd"
                            />
                        </b-field>
                        
                    </b-step-item>

                    <b-step-item step="3" label="Filiação e Nascimento" :clickable="isStepsClickable">
                        <h3 class="title">Filiação e Nascimento</h3>
                        <b-field label="País Natal " for="edtPaisNatal">
                            <b-select
                                placeholder="Selecione o país de Nascimento"
                                rounded
                                name="edtPaisNatal"
                                id="edtPaisNatal"
                            >
                                <option
                                    v-for="option in paises"
                                    :value="option.cPais"
                                    :key="option.cPais"
                                >{{option.xPais}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Estado Natal" for="edtUFNatal">
                            <b-select
                                placeholder="Selecione o estado de nascimento"
                                rounded
                                name="edtUFNatal"
                                id="edtUFNatal"
                            >
                                <option
                                    v-for="option in estados"
                                    :value="option.UF"
                                    :key="option.UF"
                                >{{option.nome}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Cidade Natal" for="edtCidadeNatal">
                            <b-select
                                placeholder="Selecione o estado de nascimento"
                                rounded
                                name="edtCidadeNatal"
                                id="edtCidadeNatal"
                            >
                                <option
                                    v-for="option in estados"
                                    :value="option.UF"
                                    :key="option.UF"
                                >{{option.nome}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Nome do Pai" for="edtNomePai">
                            <b-input
                                placeholder="Digite o número do pai"
                                type="text"
                                name="edtNomePai"
                                id="edtNomePai"
                            ></b-input>
                        </b-field>
                        <b-field label="Nome da Mãe" for="edtNomeMae">
                            <b-input
                                placeholder="Digite o número da mãe"
                                type="text"
                                name="edtNomeMae"
                                id="edtNomeMae"
                            ></b-input>
                        </b-field>
                    </b-step-item>

                    <b-step-item step="4" label="Dados Bancários" :clickable="isStepsClickable">
                        <h3 class="title">Dados Bancários</h3>

                        <b-field label="Banco" for="edtBanco">
                            <b-select
                                placeholder="Selecione o Banco"
                                rounded
                                name="edtBanco"
                                id="edtBanco"
                            >
                                <option
                                    v-for="option in bancos"
                                    :value="option.cBanco"
                                    :key="option.cBanco"
                                >{{option.xBanco}}</option>
                            </b-select>
                        </b-field>
                        <b-field label="Agência" for="edtAgencia">
                            <b-input
                                placeholder="Digite o número da agência"
                                type="text"
                                name="edtAgencia"
                                id="edtAgencia"
                            ></b-input>
                        </b-field>
                        <b-field label="Conta" for="edtConta">
                            <b-input
                                placeholder="Digite o número da conta"
                                type="text"
                                name="edtConta"
                                id="edtConta"
                            ></b-input>
                        </b-field>
                    </b-step-item>

                    <b-step-item step="5" label="Admissão" :clickable="isStepsClickable">
                        <h3 class="title">Admissão</h3>
                        <b-field label="Cargo" for="edtCargo">
                            <b-input
                                placeholder="Digite o número do CPF"
                                type="text"
                                name="edtCargo"
                                id="edtCargo"
                            ></b-input>
                        </b-field>
                        <b-field label="Data de admissão">
                            <b-datepicker
                                ref="datepicker"
                                expanded
                                placeholder="Clique para editar a data de admissão"
                                name="edtDataAdm"
                                id="edtDataAdm"
                                :month-names="mes_nomes"
                            ></b-datepicker>
                        </b-field>
                        <b-field label="Registro" for="edtRegistro">
                            <b-input
                                placeholder="Digite o número do registro do Funcionário"
                                type="text"
                                name="edtRegistro"
                                id="edtRegistro"
                            ></b-input>
                        </b-field>
                        <b-field label="CTPS" for="edtCTPS">
                            <b-input
                                placeholder="Digite o número do registro do Funcionário"
                                type="text"
                                name="edtCTPS"
                                id="edtCTPS"
                            ></b-input>
                        </b-field>
                        <b-field label="PIS/NIS" for="edtNIS">
                            <b-input
                                placeholder="Digite o número do registro do Funcionário"
                                type="text"
                                name="edtNIS"
                                id="edtNIS"
                            ></b-input>
                        </b-field>
                        <b-field label="Duração das férias" for="edtDuracao">
                            <b-input
                                placeholder="Digite o número de dias de descanso"
                                type="number"
                                name="edtDuracao"
                                id="edtDuracao"
                            ></b-input>
                        </b-field> 
                        <b-field label="Próximas Férias - Início">
                            <b-datepicker
                                ref="datepicker"
                                expanded
                                placeholder="Clique para editar a data de admissão"
                                name="edtFeriasInicio"
                                id="edtFeriasInicio"
                                :month-names="mes_nomes"
                            ></b-datepicker>
                        </b-field>
                        <b-field label="Final das Férias">
                            <b-datepicker
                                ref="datepicker"
                                expanded
                                placeholder="Clique para editar a data de admissão"
                                name="edtFeriasFim"
                                id="edtFeriasFim"
                                :month-names="mes_nomes"
                            ></b-datepicker>
                        </b-field> 
                        <b-field label="Data de Desligamento">
                            <b-datepicker
                                ref="datepicker"
                                expanded
                                placeholder="Clique para editar a data de admissão"
                                name="edtDemissao"
                                id="edtDemissao"
                                :month-names="mes_nomes"
                            ></b-datepicker>
                        </b-field> 
                    </b-step-item>
                </b-steps>
            </div>
        </form>
    </div>
</template>

<script>
const estados = require("@/data/estados.json");
const paises = require("@/data/paises.json");
const bancos = require("@/data/bancos.json");
export default {
    data() {
        return {
            activeStep: 0,
            estados,
            paises,
            bancos,
            mes_nomes: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ]
        };
    }
};
</script>

<style>
#form {
    text-align: left;
}
.s12-margin {
    margin: 8px;
}
.s12-container-card {
    padding: 20px 20px 20px 20px;
}
.mgn-min-btn {
    margin: 0px 0px 10px 0px;
}
.mgn-min-top {
    margin: 2px 0px 0px 0px;
}
</style>