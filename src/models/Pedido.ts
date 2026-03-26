export interface Pedido {
      id?: number;
  id_cliente: number;
  id_funcionario: number;
  endereco: string;
  tipo_pedido: string;
  data_pedido: Date;
  valor: number;
  status_pedido: string;
}
