const linguagemTabela = {
  sEmptyTable: "Nenhum registro encontrado",
  sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
  sInfoEmpty: "Mostrando 0 até 0 de 0 registros",
  sInfoFiltered: "(Filtrados de _MAX_ registros)",
  sInfoPostFix: "",
  sInfoThousands: ".",
  sLengthMenu: "_MENU_ resultados por página",
  sLoadingRecords: "Carregando...",
  sProcessing: "Processando...",
  sZeroRecords: "Nenhum registro encontrado",
  sSearch: "Pesquisar:",
  oPaginate: {
    sNext: "Próximo",
    sPrevious: "Anterior",
    sFirst: "Primeiro",
    sLast: "Último"
  },
  oAria: {
    sSortAscending: ": Ordenar colunas de forma ascendente",
    sSortDescending: ": Ordenar colunas de forma descendente"
  }
}

export const environment = {
  production: true,
  urlApiClientes: 'https://localhost:44389/api/',
  tableOptions: {
    bLengthChange: false,
    pagingType: "full_numbers",
    responsive: true,
    paging: true,
    ordering: true,
    info: false,
    pageLength: 8,
    language: linguagemTabela,
    classes: {
      sPageButton: ''
    }
  }
};
