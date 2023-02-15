<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proizvod extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'naziv',
        'proizvodjac',
        'cena',
        'kolicina',
        'kategorija',
        'zemlja_porekla'
      ];
 



    public function kategorija()
    {
       return $this->belongsTo(Kategorija::class);
    }
    public function stavke()
    {
       return $this->belongsTo(StavkaKorpe::class);
    }
}
