<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class UserController extends Controller
{
    //

    public function getUsuarios()
    {
        $data = Users::get();
        return response($data, 200);
    }
}
