export interface Pagamento {
    id?: number;
    id_pedido: number;
    metodo_pagamento: string;
    cupom_desconto: string;
}