let selectedReportType = null;

const botoes = document.querySelectorAll('.botao-opcao');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('selected'));
    botao.classList.add('selected');

    const titulo = botao.innerHTML.split('<br>')[0].trim();
    selectedReportType = titulo;
  });
});

function enviarRelatorio() {
  const outrosTexto = document.getElementById('outros').value.trim();

  if (!selectedReportType && outrosTexto === "") {
    alert("Por favor, selecione um tipo de problema ou preencha o campo 'outros'.");
    return;
  }

  const dados = {
    tipo: selectedReportType || "Outros",
    descricao: outrosTexto || "Sem descrição adicional."
  };

  console.log("Relatório enviado:", dados);
  alert("Relatório enviado com sucesso!");

  botoes.forEach(b => b.classList.remove('selected'));
  document.getElementById('outros').value = "";
  selectedReportType = null;
}