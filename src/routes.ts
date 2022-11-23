import { Router } from "express";
import { CreateCentroCutoController } from "./controllers/CreateCentroCustoController";
import { CreateClientesController } from "./controllers/CreateClientesController";
import { CreateFuncionarioController } from "./controllers/CreateFuncionarioController";
import { CreateFormasPagamentoController } from "./controllers/CreateFormasPagamentoController";
import { CreateProdutoController } from "./controllers/CreateProdutoController";
import { CreateMovimentoController } from "./controllers/CreateMovimentoController";
import { CreateUsersController } from "./controllers/CreateUsersController";

const routes = Router();

routes.post("/centroCusto/", new CreateCentroCutoController().handle);
routes.post("/clientes/", new CreateClientesController().handle);
routes.post("/formasPagamento/", new CreateFormasPagamentoController().handle);
routes.post("/funcionario/", new CreateFuncionarioController().handle);
routes.post("/produto/", new CreateProdutoController().handle);
routes.post("/movimento/", new CreateMovimentoController().handle);
routes.post("/users/", new CreateUsersController().handle);

export { routes };