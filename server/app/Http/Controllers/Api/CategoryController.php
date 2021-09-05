<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        $status     = $categories->count() ? true : false;

        return response()->json([
            'data'   => $categories,
            'status' => $status,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create(
            $request->validated() +
            ['slug' => Str::slug($request->validated()['name']),
            ]);

        $status = $category ? true : false;

        return response()->json([
            'data'   => $category,
            'status' => $status,
            'message' => 'Category Added Successfully.'
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $status = $category->update($request->validated() + ['slug' => Str::slug($request->validated()['name'])]);

        return response()->json([
            'status' => $status,
        ]);
    }

   
}
