## O que são streams?

É uma funcionalidade do nodejs para processar grandeds cargas de dados sobre demanda. O node transforma essa carga de dados, por exemplo um arquivo de 2 gb, em um buffer, ou seja, o arquivo é quebrado em pequenos pedaços (chunks) e processados de maneira independente.

## Tipos

* Readable Stream - fornece dados para processamento (banco dedados, requisição web etc)

* Transform Stream - manipula os dados (map, filtro, etc)

* Writable Stream - ultima etapa do processamento de dados com streams, ex: imprimir na tela, salvar em um arquivo, persistir no banco de dados

*Existe também as duplex stream, streams onde é possível ler e escrever na mesma stream.*

Os três tipos são usados em uma `pipeline` como etapas, onde cada chunk da carga inicial deve passar por cada carga.