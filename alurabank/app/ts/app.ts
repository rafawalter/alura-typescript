import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();
// detesto comentários
$('.form').submit(controller.adiciona.bind(controller));
