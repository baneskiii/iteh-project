<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StavkaKorpe extends Model
{
    use HasFactory;
    protected $fillable = [
        'proizvod_id',
        'korpa_id',
        'kolicina',
        
    ];
    public function korpa()
    {
        return $this->belongsTo(Korpa::class);
    }
    public function proizvod(){
        return $this->belongsTo(Proizvod::class);
    }
}
