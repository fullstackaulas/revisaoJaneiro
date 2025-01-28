<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RevisaoController extends Controller
{
    public function palindromo($palavra)
    {

        $palavraInvertida = strrev($palavra);
        if ($palavraInvertida == $palavra) {
            return response()->json(true, 200);
        } else {
            return response()->json(false, 200);
        }
    }

    public function pedido()
    {

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



    # ex1:
# fazer uma condicional que printa bom dia, boa tarde ou boa noite Sr. ou Sra. $Nome
# Entrada: $sexo / $nome // Bom dia Sr. Matheus
# saida: Bom dia Senhor Matheus
# descoberta: como pegar o horário do dia
    public function cumprimento(Request $request)
    {
        date_default_timezone_set('America/Sao_Paulo');
        $sexo = $request->sexo;
        $nome = $request->nome;
        $hora = date('H');


        // $pronome = $sexo == 'M' ? 'Sr':'Sra';

        if ($sexo == 'M') {
            $pronome = 'Sr';
        } else {
            $pronome = 'Sra';
        }

        if ($hora >= 6 && $hora < 12) {
            $cumprimento = 'Bom dia';
        } else if ($hora >= 12 && $hora < 18) {
            $cumprimento = 'Boa tarde';
        } else {
            $cumprimento = 'Boa noite';
        }

        $frase = $cumprimento . ' ' . $pronome . ' ' . $nome;

        return response($frase, 200);

    }

    public function contarVogais(Request $request)
    {
        $frase = $request->frase;
        $frase = strtolower($frase);

        $vogais = ['a', 'e', 'i', 'o', 'u'];
        $caracteresEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '\\', '|', ';', ':', '"', '\'', '<', '>', ',', '.', '/', '?', '~', '`'];
    
        $vogaisQtd = 0;
        $espacosQtd = 0;
        $consoantesQtd = 0;
        $caracteresEspeciaisQtd = 0;

        for ($i = 0; $i < strlen($frase); $i++) {
            if ($frase[$i] == ' ') {
                $espacosQtd++;
            } else if (in_array($frase[$i], $vogais)) {
                $vogaisQtd++;
            } else if (in_array($frase[$i], $caracteresEspeciais)) {
                $caracteresEspeciaisQtd++;
            } else {
                $consoantesQtd++;
            }
        }

        $resposta = [
            'consoantes' => $consoantesQtd,
            'vogais' => $vogaisQtd,
            'espacos' => $espacosQtd,
            'caracteresEspeciais' => $caracteresEspeciaisQtd,
            'total' => strlen($frase)
        ];

        return response($resposta, 200);
    }


//     Fazer uma função que calcula a soma de todos os números de 1 até um número informado.
// Entrada: $limite
// Saída: "A soma dos números de 1 até $limite é: Y"
// Dica: Você pode usar um laço for ou a fórmula da soma de uma progressão aritmética.


    public function contarNumeros($limite) {
        //$limite = $request->limite;
        $soma = 0;

        for($i=0; $i<$limite; $i++){
            $soma += $i;
        }
        return response($soma, 200);
    }



}
