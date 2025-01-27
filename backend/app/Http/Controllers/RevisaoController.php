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
}
