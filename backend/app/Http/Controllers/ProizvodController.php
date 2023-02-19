<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProizvodResource;

use App\Models\Proizvod;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProizvodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProizvodResource::collection(Proizvod::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'naziv' => 'required',
                'proizvodjac' => 'required|string|max:100',
                'cena' => 'required',
                'kategorija' => 'required',
                'zemlja_porekla' => 'required',
                'image' => 'required'

            ]
        );
        if ($validator->fails())
            return response()->json($validator->errors());





        $p = Proizvod::create([
            'naziv' => $request->naziv,
            'proizvodjac' => $request->proizvodjac,
            'cena' => $request->cena,
            'zemlja_porekla' => $request->zemlja_porekla,
            'kolicina' => 0,

            'kategorija' => $request->kategorija,
            'image' => $request->image

        ]);
        return response()->json(["Uspesno kreiran proizvod", $p]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProizvodResource(Proizvod::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function edit(Proizvod $proizvod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [


        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

        $l = Proizvod::find($request->id);
        if ($l) {
            $l->naziv = $request->naziv;
            $l->proizvodjac = $request->proizvodjac;
            $l->cena = $request->cena;
            $l->kategorija = $request->kategorija;
            $l->image = $request->image;
            $l->zemlja_porekla = $request->zemlja_porekla;
            $l->kolicina = 0;



            $l->save();
            return response()->json(['Proizvod uspesno izmenjen!', new ProizvodResource($l)]);
        } else {
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $p = Proizvod::find($id);
        if ($p) {
            $p->delete();
            return response()->json("uspesno obrisano!");
        } else {

            return response()->json([
                'message' => 'Ne postoji u bazi.',
            ], 400);
        }
    }
}