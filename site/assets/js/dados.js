/* =====================================================================
   DADOS DO SITE — edite APENAS este arquivo para trocar os placeholders.
   Usado pela página principal (index.html) e pela página de contato.

   Números de WhatsApp e telefone: somente dígitos, com DDI 55 + DDD.
   Exemplo: '5562999999999'
   Fotos: coloque os arquivos em assets/img/ e informe o caminho em "foto".
   Deixe "foto" vazio ('') para exibir o espaço reservado.
   Instagram: deixe "instagram" vazio ('') para ocultar a linha.
   ===================================================================== */

window.SITE = {
    marca: 'Goulart Rocha Medicina Integrada',
    logo: 'assets/img/logo.svg',            // ex.: 'assets/img/logo.svg'  (vazio = espaço reservado)
    logoClaro: '',       // versão para fundo verde do rodapé (opcional)
    ano: '2026',
    responsavelTecnico: 'Guilherme Goulart',
    politicaPrivacidadeUrl: '#',
    fotoAmbiente: 'assets/img/consultorio-teste-2.jpg',    // foto da seção de abertura, ex.: 'assets/img/consultorio.jpg'
    mensagemWhatsApp: 'Olá! Gostaria de mais informações sobre atendimento.',

    profissionais: [
        {
            titulo: 'Especialista Médico',
            nome: 'Guilherme Goulart',
            crm: '21519/GO',
            foto: 'assets/img/perfil-dr.jpeg',
            especialidades: [
                {nome: 'Nutrologia'},
                {nome: 'Metabologia'},
                {nome: 'Longevidade'},
                {nome: 'Medicina do Estilo de vida'}
            ],
            bio: 'Emagrecimento, composição corporal, saúde metabólica e qualidade de vida',
            whatsapp: 'WhatsApp',
            whatsappNumero: '556286270082',
            telefone: '+55 62 8627-0082',
            telefoneNumero: '556286270082',
            email: 'email@dominio.com',
            instagram: '@dr.guilhermegoulartgr',
            instagramUsuario: 'dr.guilhermegoulartgr',
            horarios: 'Segunda à Sexta das 8h às 20h \n Sabádo das 8h às 12h',
            locais: [
                {
                    nome: 'LAET Bem Estar e Estética',
                    endereco: 'R. T-27, Q66 - LT10 Sala 6 Segundo andar - St. Bueno, Goiânia - GO, 74215-030'
                },
            ]
        },
        {
            titulo: 'Especialista Médica',
            nome: 'Gabriela Rocha',
            crm: '24729/GO',
            foto: 'assets/img/perfil-dra.jpeg',
            especialidades: [
                {nome: 'Estética'},
                {nome: 'Cirurgia Dermatológica '},
                {nome: 'Dermatologia'}
            ],
            bio: 'Beleza natural e cuidado individualizado. A beleza de continuar sendo você!',
            whatsapp: 'WhatsApp',
            whatsappNumero: '556286270082',
            telefone: '+55 62 8627-0082',
            telefoneNumero: '556286270082',
            email: 'email@dominio.com',
            instagram: '@dracarolina.goulartrocha',
            instagramUsuario: 'dracarolina.goulartrocha',
            horarios: 'Segunda à Sexta das 8h às 20h \n Sabádo das 8h às 12h',
            locais: [
                {
                    nome: 'LAET Bem Estar e Estética',
                    endereco: 'R. T-27, Q66 - LT10 Sala 6 Segundo andar - St. Bueno, Goiânia - GO, 74215-030'
                },
            ]
        }
    ]
};
