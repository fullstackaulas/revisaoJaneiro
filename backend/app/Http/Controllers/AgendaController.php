<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agenda;

class AgendaController extends Controller
{
    //
    public function inserir(Request $request) {
        $data = new Agenda();

        $data->nome = $request->nome;
        $data->email = $request->email;
        $data->telefone = $request->telefone;
        $data->endereco = $request->endereco;
        $data->created_by = auth()->id();
        $data->save();

        return response($data, 201 );

    }

    public function listar(){

        $data = Agenda::get();

        return response($data, 200);
    }

    public function pegarUm($id){

        $data = Agenda::where('id', $id)->first();

        return response($data, 200);

    }
}
