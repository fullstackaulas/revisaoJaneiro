<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RevisaoController extends Controller
{
    public function palindromo($palavra){

        $palavraInvertida = strrev($palavra);
        if ($palavraInvertida == $palavra){
            return response()->json (true, 200);
        }
        else{
            return response()->json (false, 200);
        }
    }

    public function pedido(){

        $pedido = [
            "pedido_id" => "123456",
            "cliente" => [
                "id" => "78910",
                "nome" => "João Silva",
                "email" => "joao.silva@email.com",
                "telefone" => "+55 11 98765-4321",
                "endereco" => [
                    "rua" => "Rua Exemplo",
                    "numero" => "123",
                    "bairro" => "Centro",
                    "cidade" => "São Paulo",
                    "estado" => "SP",
                    "cep" => "01000-000"
                ]
            ],
            "itens" => [
                [
                    "produto_id" => "001",
                    "nome" => "Camiseta Personalizada",
                    "quantidade" => 2,
                    "preco_unitario" => 49.90
                ],
                [
                    "produto_id" => "002",
                    "nome" => "Caneca de Cerâmica",
                    "quantidade" => 1,
                    "preco_unitario" => 29.90
                ]
            ],
            "total" => 129.70,
            "forma_pagamento" => "cartao_de_credito",
            "status" => "pendente",
            "data_pedido" => "2025-01-27T14:30:00",
            "previsao_entrega" => "2025-02-01"
        ];
        
        

          return response()->json(($pedido['itens']), 200);
          
    }








}
