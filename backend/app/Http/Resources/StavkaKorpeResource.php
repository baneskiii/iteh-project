<?php

namespace App\Http\Resources;

use App\Models\Proizvod;
use App\Models\Kategorija;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class StavkaKorpeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'korpa' => $this->resource->korpa_id,
            'proizvod' => new ProizvodResource(Proizvod::find($this->resource->proizvod_id)),
            'user' => new UserResource (User::find($this->resource->user_id)),
            'kolicina' => $this->resource->kolicina,

          


        ];
    }
}
