export interface JogoCadastro {
    nome: string;
    descricao: string;
    desenvolvedora: string;
    genero: string;
    data_lancamento: string;
}

export const jogos: JogoCadastro[] = [
    {
        nome: 'God of War Ragnarok',
        descricao: 'Continuação direta da jornada de Kratos e seu filho Atreus pelos reinos da mitologia nórdica. Com o Fimbulwinter se consolidando, pai e filho precisam explorar os Nove Reinos em busca de respostas e aliados enquanto se preparam para o profetizado Ragnarök, enfrentando deuses como Thor e Odin.',
        desenvolvedora: 'Santa Monica Studio',
        genero: 'Ação-Aventura',
        data_lancamento: '2022-11-09'
    },

    {
        nome: 'Resident Evil Village',
        descricao: 'Recriação do clássico de survival horror de 2005. O agente Leon S. Kennedy é enviado em uma missão de resgate a uma vil isolada na Espanha para salvar a filha do presidente dos Estados Unidos, enfrentando uma horda de vilões tomados por um parasita assustador conhecido como Las Plagas.',
        desenvolvedora: 'Capcom',
        genero: 'Survival Horror / Ação-Aventura',
        data_lancamento: '2023-03-24'
    },

    {
        nome: 'The Last of Us Part II',
        descricao: 'Cinco anos após a perigosa jornada pelos Estados Unidos pós-apocalípticos, Ellie e Joel estabeleceram uma vida em Jackson, Wyoming. No entanto, um evento violento e traumático interrompe essa paz, levando Ellie a embarcar em uma jornada implacável de vingança e busca por justiça pelas ruínas de Seattle, enfrentando infectados e facções rivais.',
        desenvolvedora: 'Naughty Dog',
        genero: 'Ação-Aventura / Survival Horror',
        data_lancamento: '2024-01-19'
    }
]