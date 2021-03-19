<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::all();
    }

    public function show(Article $article)
    {
        return $article;
    }

    public function store(ArticleRequest $request,Article $article)
    {
        $article->fill($request->all());
        $article->save();
        // return Article::create($request->all());
    }

    public function update(Request $request , Article $article)
    {
        $article->update($request->all());

        return $article;
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return $article;
    }
}
