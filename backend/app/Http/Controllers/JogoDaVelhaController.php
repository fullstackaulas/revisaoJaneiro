<?php

namespace App\Http\Controllers;

use App\Models\JogoDaVelha;
use Illuminate\Http\Request;

class JogoDaVelhaController extends Controller
{
    
    public function inserir(Request $request){

        $ultimaJogada = JogoDaVelha::where('idJogo', $request->idJogo)->orderBy('id', 'desc')->limit(1)->first();

        if($ultimaJogada != null && $ultimaJogada->jogador == $request->jogador)
            return response('mesmo jogador', 422);

        $posicao = JogoDaVelha::where('posicao', $request->posicao)->where('idJogo', $request->idJogo)->count();
        
        if($posicao > 0)
            return response('posicao ja jogada', 422);

        $jogoDaVelha = new JogoDaVelha();
        $jogoDaVelha->jogador = $request->jogador;
        $jogoDaVelha->posicao = $request->posicao;
        $jogoDaVelha->idJogo = $request->idJogo;

        $jogoDaVelha->save();

        $checarVitoria = jogoDaVelha::checarVitoria($request->idJogo);

        return response(compact('jogoDaVelha', 'checarVitoria'), 201);
    }

    public function carregarPosicoes($idJogo){
        $jogoDaVelha = JogoDaVelha::where('idJogo', $idJogo)->get();

        if($jogoDaVelha == null)
            return response('', 404);

        return response($jogoDaVelha, 200);
    }




}
