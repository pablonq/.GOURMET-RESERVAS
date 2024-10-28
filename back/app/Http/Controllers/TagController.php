<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function indexTags()
    {
        $tags = Tag::all();
        return response()->json($tags);
    }


    public function crearTag(Request $request)
    {
        $request->validate([
            'nombreTag' => 'required|string|max:255',
        ]);

        $tag = Tag::create($request->only('nombreTag'));

        return response()->json($tag, 201);
    }
}
