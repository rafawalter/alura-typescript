import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();
// detesto comentários
$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importarDados.bind(controller));
