# Entre Turnos

**Uma vida inteira. Um novo começo.**

Game narrativo em português para formação de professores do CEEJA. O professor assume o papel de um estudante adulto, planeja janelas de tempo e atravessa situações de trabalho, cuidado, transporte, acesso digital, avaliação e permanência.

## O que está incluído

- Três personagens fictícios: Ana, Marcos e Célia, com biografias e projetos de vida distintos.
- Um roteiro comum de 12 decisões em quatro capítulos, com 36 consequências escritas, contextualizado pela personagem escolhida.
- Planejamento de seis janelas de tempo, indicadores acumulados e duas oportunidades extras de apoio.
- Duas atividades de aprendizagem, sem pontuação e sem cronômetro.
- Desfechos por aprendizagem e fôlego; não há eliminação por uma escolha.
- Caderno com perguntas de reflexão e compromisso docente final, exportável como texto.
- Ranking local com filtros, CSV, backup JSON, importação sem duplicar IDs e exclusão.
- Salvamento automático da jornada, interface responsiva, navegação por teclado e áudio opcional.
- Ilustrações vetoriais originais, fontes do sistema e nenhum recurso de terceiros necessário para jogar.

**Não usa Supabase, Upstash, API, contas ou banco de dados.** Não há dependências externas de execução ou build.

## Executar no computador

Instale Node.js 22 ou superior. Abra um terminal nesta pasta:

```sh
npm run dev
```

Abra `http://127.0.0.1:4173`. É necessário servir a pasta por HTTP; não abra `index.html` por duplo clique, pois o navegador pode bloquear módulos JavaScript em `file://`.

```sh
npm test
npm run build
```

O build cria `dist/`. O servidor local é para desenvolvimento e escuta apenas no computador local. A Vercel serve os arquivos estáticos diretamente.

## Publicar no GitHub e Vercel

1. Descompacte o projeto e crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** à raiz do repositório: `package.json`, `index.html`, `src/`, `public/`, `build.mjs`, `dev.mjs`, `vercel.json`, `tests/` e documentação. Não precisa enviar `dist/`.
3. Na Vercel, use **Add New → Project**, importe o repositório e selecione o diretório que contém `package.json` como Root Directory.
4. Framework Preset: **Other**. Build Command: **npm run build**. Output Directory: **dist**. O arquivo `vercel.json` já declara essas opções.
5. Use uma versão de Node.js compatível com `>=22`. Não configure variáveis de ambiente.
6. Clique em **Deploy**. Em atualizações futuras, os novos commits do repositório podem disparar novos deploys conforme a integração configurada.

O projeto foi preparado e testado localmente. A criação do repositório e a publicação na conta GitHub/Vercel do responsável não estão incluídas como ações já realizadas.

## Ranking: alcance e conservação

Os resultados ficam em `localStorage`, associados ao **navegador, perfil e endereço do site**. Não são compartilhados automaticamente. Ao mudar de domínio, de navegador ou de computador, o histórico não acompanha a mudança. Navegação privada, bloqueios de armazenamento e limpeza dos dados podem impedir ou apagar o salvamento.

Para uma formação em que cada professor usa seu dispositivo:

1. Cada participante conclui e clica em **Registrar no ranking local**.
2. Abre **Ranking → Baixar backup completo**.
3. O formador recebe os arquivos e usa **Importar backup** no seu próprio navegador.
4. O ranking reúne os registros sem duplicar a mesma partida. **Exportar CSV** respeita os filtros e abre em planilhas.

O backup inclui apelido, grupo, personagem, indicadores, pontuação e data. **Não inclui reflexões pessoais**, que devem ser baixadas separadamente pelo participante em **Baixar minha reflexão**. Use apelidos e não registre dados reais de estudantes. Quem tiver acesso ao perfil do navegador poderá ver os registros locais.

Arquivos importados são validados por estrutura e limites, mas podem ser editados por seus autores. Este é um instrumento de formação, não uma competição com antifraude. Exportações CSV protegem os campos contra fórmulas iniciadas pelos caracteres usuais.

## Mecânica pedagógica

O planejamento começa com fôlego 64, aprendizagem 0 e rede 22. Estudar altera esses indicadores em −6/+6/0; descansar, em +12/0/0; buscar apoio, em +2/+2/+8. Todos ficam entre 0 e 100.

As decisões têm efeitos próprios. Fôlego abaixo de 20 reduz o ganho de aprendizagem em 3, e rede abaixo de 15 reduz em 1 (ganho mínimo 1). Cada apoio extra, limitado a dois, acrescenta 10 de fôlego e 8 de rede no momento da decisão.

Pontuação: soma das 12 escolhas (até 120) + 5 por tipo de atividade usado no planejamento (até 15) + fôlego final limitado a 60 ÷ 6 + rede final limitada a 60 ÷ 6. O total é arredondado, com máximo de 155. O tempo de jogo e os acertos das atividades **não pontuam**.

Aprendizagem final ≥80 representa conclusão da etapa simulada; valores menores geram continuidade. Fôlego ≥25 diferencia os finais com energia preservada. **Esses números são exclusivamente ficcionais e não representam certificação ou avaliação real do CEEJA.**

As alternativas pontuam escolhas pedagógicas e podem ser problematizadas na formação. Dificuldades sociais não são apresentadas como falhas morais. A disponibilidade de ajuda e as negociações do roteiro são possibilidades ficcionais, não garantias sobre uma unidade específica.

## Adaptar

- `src/story.js`: personagens, cenas, alternativas, consequências e perguntas.
- `src/engine.js`: regras e validação.
- `src/app.js`: telas, salvamento, ranking e exportação.
- `src/art.js`: ilustrações SVG e retratos.
- `src/style.css`: identidade visual e adaptação a tamanhos de tela.
- `GUIA-DO-FORMADOR.md`: proposta de aplicação e roteiro completo.

Ao alterar regras que tornem rankings antigos incomparáveis, incremente a versão e as chaves de armazenamento, ou exporte os dados antes de reiniciar o histórico. Evite comparar versões diferentes como se fossem equivalentes.

## Referências

- [Secretaria da Educação de São Paulo — Educação de Jovens e Adultos](https://www.educacao.sp.gov.br/educacao-jovens-adultos?lang=pt).
- [Portal de Serviços de São Paulo — Educação com presença flexível](https://servicos.sp.gov.br/fcarta/56446BB1-4603-4FDC-88ED-7B2371174CA1).
- [Vercel — Configuração do projeto](https://vercel.com/docs/project-configuration).

Referências institucionais consultadas em 26/10/2026. Material independente, sem afiliação oficial à SEDUC. Revise a adequação às práticas e às condições da unidade antes da formação.
