<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anotacao;

class AnotacaoController extends Controller
{
    //
    public function getAnotacao()
    {
        $data = Anotacao::get();
        return response($data, 200);
    }

    public function insertAnotacao(Request $request)
    {
        $data = new Anotacao();
        $data->created_by = 1;
        $data->conteudo = $request->conteudo;
        $data->save();

        return response('', 201);
    }

    public function getAnotacaoOne($id)
    {
        $data = Anotacao::where('id', $id)->first();
        if($data == null)
            return response('', 404);
    
        return response($data, 200);
    }

    public function updateAnotacao($id, Request $request)
    {
        $data = Anotacao::where('id', $id)->first();

        // if(isset($request->conteudo))
        //     $data->conteudo = $request->conteudo;
        $data->conteudo = isset($request->conteudo) ? $request->conteudo : $data->conteudo;
        $data->updated_by = 1;

        $data->save();

        return response($data, 200);
    }



    public function deleteAnotacao($id)
    {
        $data = Anotacao::where('id', $id)->first();
        if ($data == null)
            return response('', 404);

        $data->delete();
        return response('', 200);
    }



    // Route::delete('anotacao', [AnotacaoController::class, 'deleteAnotacao']);


    public function insertAnotacaoNuvem(Request $request)
    {
        $data = new Anotacao();
        $data->setConnection('mysqlNuvem');
        $data->created_by = 1;
        $data->conteudo = $request->conteudo;
        $data->save();

        return response('', 201);
    }
}
