import { Eventx } from '../event'
// dynamic ids was changed to keep the development easy in debug mode. By now all the ids is static.
// import { Id } from '../shared'

const evets: Eventx[] = [
    {
        // id: Id.newhash(),
        id: "yetlh9zlijo-gxam26yc0gu-mtsl9y8ftg",
        alias: 'evento-fullstack',
        password: 'senha123',
        name: 'Evento de Desenvolvimento Fullstack',
        date: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        description:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        image: 'https://imgs.search.brave.com/jpfja3MiHje3R3WZaDH_wwK6yXplOYI_wlsi7AOC0Lc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmViYWNvbmxpbmUu/Y29tLmJyL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDEvaW1hZ2UxLTcu/anBn',
        backgroundImage:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        expectedAudience: 200,
        guests: [
            {
                // id: Id.newhash(),
                id: "hmgz097getg-456ixvxch8o-mxfopr23r3q",
                name: 'Alice Silva',
                email: 'alice@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 1,
            },
            {
                id: "trufk8faks-kbmwuqiirp8-0p8r5kiwp2",
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmed: false,
                hasFellows: false,
                qtdFellows: 0,
            },
            {
                id: "gyihee0mzr-iflpft5g1yd-9gehpxm08zw",
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 2,
            },
        ],
    },
    {
        id: "4uf6wlrt3qv-bmg4l7cm56m-tplcs679n8",
        alias: 'evento-js-avancado',
        password: 'js2024',
        name: 'Workshop Avançado de JavaScript',
        date: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        description: 'Um workshop avançado para programadores JavaScript.',
        image: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        backgroundImage:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        expectedAudience: 100,
        guests: [
            {
                id: "vrixegerwjf-a2wn11frr8d-uexf6pj72ei",
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmed: true,
                hasFellows: false,
                qtdFellows: 0,
            },
            {
                id: "wfsjuipdd4-xk8a3zlu91-f8xauvo1kgk",
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 1,
            },
        ],
    },
    {
        id: "6lwv5y4m31w-nmevs2697b-02ui2hxvkdko",
        alias: 'evento-dev-frontend',
        password: 'front123',
        name: 'Bootcamp de Desenvolvimento Frontend',
        date: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        description: 'Aprenda a criar interfaces incríveis e responsivas.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        backgroundImage:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        expectedAudience: 150,
        guests: [
            {
                id: "23mlz2478cb-4o9er9xh767-22fj0vuvqnr",
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 1,
            },
            {
                id: "snvmrlg68g-0z2blz4lfqul-5tgpk3c733r",
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmed: false,
                hasFellows: false,
                qtdFellows: 0,
            },
            {
                id: "0lekj9wspgno-y4ekmlmxrl-1eqtdevcizp",
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmed: true,
                hasFellows: false,
                qtdFellows: 0,
            },
        ],
    },
    {
        id: "wsmqxlvkaod-1zl05yq0dhi-v5sqvnqhhbl",
        alias: 'casamento-alberto-marina',
        password: 'casamento2024',
        name: 'Casamento do Alberto e Marina',
        date: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        description:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        image: 'https://imgs.search.brave.com/Rmk6N_UVj56ZkstGy52wmPb-ifBcbC-oeopu1ZX7UdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjU5NDkyL3B0L2Zv/dG8vcmVjZXAlQzMl/QTclQzMlQTNvLWRl/LWNhc2FtZW50by5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ckNjaWVsMU9Wb2Fx/Ri1xOFJrRy1Bdjl2/aUt6RFUzMlJ6VkR4/Z2JuR3BiMD0',
        backgroundImage:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        expectedAudience: 150,
        guests: [
            {
                id: "fx567xmm1d-g4uhprpiunb-986hepp3enk",
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 1,
            },
            {
                id: "",
                name: 'Carla Mendes',
                email: 'carla@example.com',
                confirmed: true,
                hasFellows: false,
                qtdFellows: 0,
            },
        ],
    },
    {
        id: "jpo4maac8k-4qyhbuvuxuu-e1k7ydnya1m",
        alias: 'aniversario-joao',
        password: 'joao2024',
        name: 'Aniversário do João - 30 Anos',
        date: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        description:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        image: 'https://imgs.search.brave.com/eOOLMUAk1vcmlbPaXxxXme9WJvYhWl4UzdVhZcXvlk0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzk4LzMwLzkz/LzM2MF9GXzM5ODMw/OTMyN19rU25uaENP/Y3U2Tk8ycUFaTTZV/WDFaUk9ubEU3eXlI/Wi5qcGc',
        backgroundImage:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        expectedAudience: 80,
        guests: [
            {
                id: "ashx2mwj4qo-bk5rmvx5pcq-i2m4cf9q4c",
                name: 'Maria Souza',
                email: 'maria@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 2,
            },
            {
                id: "77dmhm07q7h-7rueu9v1vpo-ibs5brg0sej",
                name: 'José Almeida',
                email: 'jose@example.com',
                confirmed: false,
                hasFellows: false,
                qtdFellows: 0,
            },
        ],
    },
    {
        id: "9qf6j7g7a08-dqyx902guu6-xmpoajv8lj",
        alias: 'inauguracao-loja-estrela',
        password: 'estrela2024',
        name: 'Inauguração da Loja Estrela',
        date: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        description:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        image: 'https://imgs.search.brave.com/mBomMc1fUNdsXL-2qk1V7JP7ljEJbACGve7ziKl3-Ro/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODMx/NjU2ODI4L3Bob3Rv/L2x1eHVyeS1jbG90/aGluZy1zdG9yZS1m/b3ItbWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yOXZE/MU52dl9XMHVjbzhS/TjdqUEt4MkhKN3p4/ajNJU3JuYlA1WGhH/c3pnPQ',
        backgroundImage:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        expectedAudience: 300,
        guests: [
            {
                id: "2ctj05pefpi-dbe1yc8q1n5-ktstdib502l",
                name: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 3,
            },
            {
                id: "zmve7dwiw3b-k8gdzj23ge-zixyku8c3oa",
                name: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmed: true,
                hasFellows: false,
                qtdFellows: 0,
            },
        ],
    },
    {
        id: "tlya24h6vzl-bxsl4z1n72j-d6yq1gw8gjp",
        alias: 'reuniao-familia-oliveira',
        password: 'familia2024',
        name: 'Reunião da Família Oliveira',
        date: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        description: 'Reunião de fim de ano da família Oliveira.',
        image: 'https://imgs.search.brave.com/vxdUoZzJYkaCVQoatx4fIYYCE2JQtqTCB63z9Q1q37M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODY5/MDgxNDEyL3Bob3Rv/L2ZyaWVuZHMtaGF2/aW5nLWZ1bi1hdC1i/aXJ0aGRheS1wYXJ0/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2RqTVd0SXJ4/Wm5EZUpYUEU2MVBB/dnVBV1l5a1k0QW9y/ZWc1NWE0emwzaz0',
        backgroundImage:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        expectedAudience: 50,
        guests: [
            {
                id: "cj0owm6rtx5-lz0l8k2d0mb-ldpos9in9ml",
                name: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmed: true,
                hasFellows: true,
                qtdFellows: 4,
            },
            {
                id: "tst6nlh2fva-9ix9ygd7jiu-648qhc9hwzj",
                name: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmed: true,
                hasFellows: false,
                qtdFellows: 0,
            },
        ],
    },
]

export default evets