# Verificação da entrega

Verificação local realizada em 26/10/2026.

## Automatizada

`npm test`: sete testes aprovados, incluindo 2.400 trajetórias determinísticas com variações de personagem, planejamento, escolhas e apoios.

Cobertura: indicadores iniciais, efeitos do apoio, redução de rendimento por sobrecarga, conclusão da sequência, limites dos indicadores e da pontuação, validação de registros, rejeição de dados inválidos e conservação dos acentos em JSON.

`npm run build`: geração de `dist/` concluída. Arquivos JavaScript verificados sintaticamente.

## Navegador

- Página inicial, seleção de personagem e planejamento exibidos.
- Partida de Ana percorrida pelas 12 decisões até o desfecho.
- Apoio extra refletido nos indicadores.
- Reflexão preenchida e progresso retomado após recarregar a página.
- Duas atividades verificadas, incluindo resposta incorreta com explicação e opção de consultar a explicação diretamente.
- Compromisso final preenchido e resultado registrado no ranking local.
- Backup JSON baixado e reimportado; duplicação da mesma partida evitada.
- Ranking e tela de jogo inspecionados a 390 px; corrigido transbordamento externo da tabela.
- Personagem Célia iniciada com mudança no planejamento; indicadores atualizados.
- Nenhum erro ou aviso capturado no console ao final da verificação.

## Limites

A publicação em GitHub/Vercel não foi executada. Não foi realizado piloto com professores nem auditoria completa de acessibilidade. A duração de 15–20 minutos é uma estimativa para leitura e reflexão. O modo de armazenamento bloqueado é tratado no código, mas não foi simulado no navegador. Não há sincronização ou proteção antifraude no ranking local, por decisão de escopo.

Dados usados na verificação pertencem ao navegador de prévia e não fazem parte do pacote distribuído.
